import { Component, OnInit } from '@angular/core';
import { trigger, transition, keyframes, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-saree',
  templateUrl: './saree.component.html',
  styleUrls: ['./saree.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 })),
        query(':enter', stagger('300ms', [
          animate('1s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-10px)', offset: 0 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
          ]))
        ]))
      ])
    ])
  ]
})
export class SareeComponent implements OnInit {

  All = {
    Women: {
      img: 'assets/template/saree/saree4.png',
      name: 'Women',
      hide: ['Men', 'Accessories', 'Sarees', 'Lenghas', 'Blouses'],
      path: "All/Women",
      children: {
        ASarees: {
          img: 'assets/template/saree/women.png',
          name: 'Sarees',
          hide: ['Lenghas', 'Blouses'],
          path: 'All/Women/Sarees',
          children: {
            Silk: { img: 'assets/template/saree/saree3.png', name: 'Silk', path: 'All/Women/Sarees/Silk' },
            Cotton: { img: 'assets/template/saree/saree2.JPG', name: 'Cotton', path: 'All/Women/Sarees/Cotton' },
            "Half Sarees": { img: 'assets/template/saree/women.png', name: 'Half Sarees', path: 'All/Women/Sarees/Half-Sarees' },
          }
        },
        CLenghas: {
          img: 'assets/template/saree/saree2.JPG',
          name: 'Lenghas',
          hide: ['Sarees', 'Blouses'],
          path: 'All/Women/Lenghas',
          children: {
            Wedding: { img: 'assets/template/saree/wedding.JPG', name: 'Wedding', path: 'All/Women/Lenghas/Wedding' },
            Party: { img: 'assets/template/saree/party.png', name: 'Party', path: 'All/Women/Lenghas/Party' },
            Festive: { img: 'assets/template/saree/festive.jpg', name: 'Festive', path: 'All/Women/Lenghas/Festive' },
          }
        },
        BBlouses: {
          img: 'assets/template/saree/blouse.png',
          name: 'Blouses',
          hide: ['Sarees', 'Lenghas'],
          path: 'All/Women/Blouses',
          children: {
            'Short Sleeve': { img: 'assets/template/saree/saree2.JPG', name: 'Short Sleeve', path: 'All/Women/Lenghas/Wedding' },
            'Long Sleeve': { img: 'assets/template/saree/saree3.png', name: 'Long Sleeve', path: 'All/Women/Lenghas/Wedding' },
            "Half Length": { img: 'assets/template/saree/women.png', name: 'Half Length', path: 'All/Women/Lenghas/Wedding' },
          }
        },
      }

    },
    Accessories: {
      name: 'Accessories',
      img: 'assets/template/saree/jewelry.JPG',
      path: "All/Accessories",

    },
    Men: {
      img: 'assets/template/saree/men.png',
      name: 'Men',
      path: "All/Men",
    },
  }

  allArray = []
  constructor() { }

  ngOnInit() {
    this.allArray = Object.values(this.All)
  }

}
