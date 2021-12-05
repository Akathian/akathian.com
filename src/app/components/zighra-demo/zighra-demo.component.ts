import { AfterViewInit, Component, OnInit } from "@angular/core";
import $ from "jquery";
// declare let KineticTracker: any;
declare let ZFS: any;

@Component({
  selector: "app-zighra-demo",
  templateUrl: "./zighra-demo.component.html",
  styleUrls: ["./zighra-demo.component.scss"],
})
export class ZighraDemoComponent implements OnInit, AfterViewInit {
  options;
  kinetic;
  config;
  constructor() {
    this.options = {
      logging: false,
      trackingTimeSensitivity: 10,
      mouseTrackingElement: "#trackarea",
      debug: true,
      autoTracking: true,
      appKey: "9uPzEznbIihsxgV",
      appSecret:
        "A4ronFGq7o+RxvK01m8AqqtsiTQRcCaNOCm/uM9eY8PSoCYYV0bDNaXoF4vozjk7AA==",
      trackingInterval: 60,
      sensorPollingFrequency: 10,
      packageId: "",
    };

    this.config = {
      scoreThreshold: 80,
      loginThreshold: 80,
      defaultPin: 1111,
      disableChallenge: true,
    };
  }

  ngOnInit() {
    this.kinetic = new ZFS.KineticTracker(this.options);
    this.kinetic.init();

    if (
      typeof this.options.autoTracking == "undefined" ||
      this.options.autoTracking == true
    ) {
      $("#startTracking").hide();
      $("#stopTracking").hide();
      $("#showData").show();
    } else {
      $("#startTracking").show();
      $("#stopTracking").hide();
      $("#showData").hide();
    }
    let self = this;
    $("#demoForm").submit(function (e) {
      e.preventDefault();
      var userName = $("#txtUsername").val();
      if (userName != "") {
        self.loginProfile(userName, userName, function (error, response) {
          if (error) {
            console.log(error);
            alert(error);
          } else {
            // Added inverse logic for confidence
            var confidence =
              100 - parseFloat(response.responseData.data.confidence);

            if (response.responseData.data.score > self.config.loginThreshold) {
              alert(
                "Authentication Success. (Score = " +
                  response.responseData.data.score +
                  " and Confidence = " +
                  confidence +
                  ")"
              );
              self.kinetic.login(response.userName, function (error, response) {
                if (error) {
                  console.log(error);
                  alert(error);
                } else {
                  window.location.href = "transaction.html";
                }
              });
            } else {
              alert(
                "Authentication Failed. (Score = " +
                  response.responseData.data.score +
                  " and Confidence = " +
                  confidence +
                  ")"
              );
              //window.location.href = "index.html";
              // Ask for PIN input
              var getPin = prompt("Please enter your PIN", "");

              if (getPin == null || getPin == "") {
                // PIN cancelled
                window.location.href = "index.html";
              } else {
                // PIN entered
                if (getPin == this.config.defaultPin) {
                  // PIN is correct
                  self.kinetic.login(
                    response.userName,
                    function (error, response) {
                      if (error) {
                        console.log(error);
                        alert(error);
                      } else {
                        window.location.href = "transaction.html";
                      }
                    }
                  );
                } else {
                  // PIN is wrong
                  window.location.href = "index.html";
                }
              }
            }
          }
        });
      }
    });
  }

  ngAfterViewInit() {
    // console.log(window.kinetic);
  }

  getResults(x) {
    var output = {};

    if (localStorage.getItem("records")) {
      try {
        output = JSON.parse(localStorage.getItem("records"));
      } catch (e) {
        // Do nothing
      }
    }

    localStorage.setItem("records", JSON.stringify($.extend(output, x)));
    localStorage.setItem(
      "browserData",
      JSON.stringify(this.kinetic.getDeviceInfo())
    );
  }

  startTracking() {
    this.kinetic.trackStart();
    $("#startTracking").hide();
    $("#stopTracking").show();
    $("#trackarea").addClass("tracking");
  }

  stopTracking() {
    this.makeTransaction();

    $("#stopTracking").hide();
    $("#startTracking").show();
    $("#trackarea").removeClass("tracking");
  }

  loginProfile(userName, text, callback) {
    if (text == null) {
      text = userName;
    }

    var userData = {
      name: userName,
      uCode: userName,
    };
    this.kinetic.getProfile(userData, function (error, profileData) {
      if (error) {
        // console.log(error);
        // alert((error.data.errors[0].message));
        callback(error.data.errors[0].message);
      } else {
        localStorage.setItem("profileCode", profileData.data.profileCode);
        localStorage.setItem("userName", userName);

        $("#successMessage").show();
        $("#txtUsername").disabled = true;

        // kinetic.trackStart();
      }
    });
  }

  makeTransaction() {
    var userName = localStorage.getItem("userName");
    var profileCode = localStorage.getItem("profileCode");

    if (profileCode == "" || userName == "") {
      localStorage.removeItem("authToken");
      localStorage.removeItem("userName");
      localStorage.removeItem("profileCode");
      alert("Your session has expired. Please login again");
      window.location.href = "index.html";
    } else {
      let self = this;
      this.kinetic.trackStop(function (trackData) {
        var transRefId = self.makeTransRefId();
        var body = {
          gestureInfo: trackData,
          profileCode: profileCode,
          transRefId: transRefId,
        };

        console.log("trackData " + trackData);

        self.kinetic.checkGesture(body, function (error, gestureData) {
          if (error) {
            alert(JSON.stringify(error));
          } else {
            localStorage.setItem("transRefId", gestureData.refId);
            localStorage.setItem("appRefId", gestureData.data.reqRefId);

            var score = gestureData.data.score;

            // Score greater than thresh. value
            if (score >= self.config.scoreThreshold) {
              this.reportAction("allow", gestureData, true);
              alert("Your mouse score is good: " + score);
            } else {
              // Score less than thres. value

              // Ask for PIN input
              var getPin = prompt(
                "Your mouse score is not good " +
                  score +
                  "\nPlease enter your PIN",
                ""
              );

              if (getPin == null || getPin == "") {
                // PIN cancelled
                this.reportAction("deny", gestureData, false);
              } else {
                // PIN entered
                if (getPin == this.config.defaultPin) {
                  // PIN is correct
                  this.reportAction("allow", gestureData, true);
                } else {
                  // PIN is wrong
                  this.reportAction("deny", gestureData, false);
                }
              }
            }
          }
        });
      });
    }
  }
  makeTransRefId() {
    var text = "";
    var possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-";

    for (var i = 0; i < 37; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }

  reportAction(action, checkResp, allowTransaction) {
    var inputData = {
      profileCode: localStorage.getItem("profileCode"),
      action: action,
      refId: checkResp.refId,
      type: checkResp.data.type ? checkResp.data.type : "gesture",
    };

    this.kinetic.reportAction(inputData, function (error, outputData) {
      if (error) {
        console.log(JSON.stringify(error));
      }

      console.log("reportAction outputData: " + JSON.stringify(outputData));

      // If pin input is true or score > threshold then proceed
      if (allowTransaction) {
        // Do below after report action call response
        var selectedTransactionType = $("#transactionType :selected").text();
        localStorage.setItem("transType", selectedTransactionType);
        var amount = $("#amount").val();
        localStorage.setItem("amount", amount);

        if (this.config.disableChallenge == true) {
          // Challenge disabled. So directly process the transaction.
          // appRefId = 0
          var transRefId = localStorage.getItem("transRefId");
          // transaction(0, transRefId);
        } else {
          // Challenge required.
          window.location.href = "challenge.html";
        }
      } else {
        // Deny
        window.location.href = "transaction-fail.html";
      }
    });
  }
}
// <script
//       type="text/javascript"
//       src="assets/js/kinetic-sdk-1.0.1.min.js"
//     ></script>
//     <script type="text/javascript">
//       var options =
//       $(document).ready(function () {
//         kinetic = new ZFS.KineticTracker(options);
//         kinetic.init();
//       });
//     </script>
