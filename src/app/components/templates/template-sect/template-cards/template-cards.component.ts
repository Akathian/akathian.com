import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-template-cards',
  templateUrl: './template-cards.component.html',
  styleUrls: ['./template-cards.component.scss']
})
export class TemplateCardsComponent implements OnInit {
  @Input() templates
  @Input() idx
  href;

  constructor() { }

  ngOnInit() {
    this.href = "#" + this.templates[this.idx].id
  }

}
