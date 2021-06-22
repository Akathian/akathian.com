import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-nav-circle",
  templateUrl: "./nav-circle.component.html",
  styleUrls: ["./nav-circle.component.scss"],
})
export class NavCircleComponent implements OnInit {
  @Input() link;
  @Input() name;
  @Input() svg;
  constructor() {}

  ngOnInit() {}
}
