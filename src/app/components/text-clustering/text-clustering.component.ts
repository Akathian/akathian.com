import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { content } from "./a";

@Component({
  selector: "app-text-clustering",
  templateUrl: "./text-clustering.component.html",
  styleUrls: ["./text-clustering.component.scss"],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class TextClusteringComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    document.getElementsByClassName("jp-nb")[0].innerHTML = content;
  }
}
