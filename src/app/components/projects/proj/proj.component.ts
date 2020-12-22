import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-proj',
  templateUrl: './proj.component.html',
  styleUrls: ['./proj.component.scss']
})
export class ProjComponent implements OnInit {
  @Input() projects
  @Input() idx
  currImgIndex = 0;
  currImg;
  href;
  constructor() { }

  ngOnInit() {
    this.href = "#" + this.projects[this.idx].id
    this.currImg = this.projects[this.idx].imgs[0]
  }
  nextImg(inc) {
    this.currImgIndex = this.currImgIndex + inc;
    if (this.currImgIndex < 0) {
      this.currImgIndex = this.projects[this.idx].imgs.length - 1;
    }
    if (this.currImgIndex >= this.projects[this.idx].imgs.length) {
      this.currImgIndex = 0;
    }
    this.currImg = this.projects[this.idx].imgs[this.currImgIndex];
  }
}
