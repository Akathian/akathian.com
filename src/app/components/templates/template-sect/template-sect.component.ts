import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-sect',
  templateUrl: './template-sect.component.html',
  styleUrls: ['./template-sect.component.scss']
})
export class TemplateSectComponent implements OnInit {
  templates = [
    {
      num: 1,
      link: '/templates/saree-store',
      type: 'Template',
      // year: '2020 - 2021',
      name: 'AK Sarees',
      id: "saree",
      imgs: [],
      blurb: 'In Progress',
      desc: [
        'Elegant landing page design for your jewelry & saree e-commerce store',
        'Customizable to tailor your products',
      ],
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
