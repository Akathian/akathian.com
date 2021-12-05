import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";
// import  KineticTracker } from "./js/kinetic-sdk.js";
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

// var KineticTracker: any;
var options = {
  logging: false,
  trackingTimeSensitivity: 10,
  mouseTrackingElement: "#trackarea",
  debug: true,
  autoTracking: false,
  appKey: "9uPzEznbIihsxgV",
  appSecret:
    "A4ronFGq7o+RxvK01m8AqqtsiTQRcCaNOCm/uM9eY8PSoCYYV0bDNaXoF4vozjk7AA==",
  trackingInterval: 60,
  sensorPollingFrequency: 10,
  packageId: "akathian.preinterview.com/pre-interview",
};
