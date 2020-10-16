import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-proj',
  templateUrl: './proj.component.html',
  styleUrls: ['./proj.component.scss']
})
export class ProjComponent implements OnInit {
  @Input() proj
  currImgIndex = 0;
  currImg;
  href;
  constructor() { }

  ngOnInit() {
    this.href = "#" + this.proj.id
    this.currImg = this.proj.imgs[0]
  }
  nextImg(inc) {
    this.currImgIndex = this.currImgIndex + inc;
    if (this.currImgIndex < 0) {
      this.currImgIndex = this.proj.imgs.length - 1;
    }
    if (this.currImgIndex >= this.proj.imgs.length) {
      this.currImgIndex = 0;
    }
    this.currImg = this.proj.imgs[this.currImgIndex];
  }
}
