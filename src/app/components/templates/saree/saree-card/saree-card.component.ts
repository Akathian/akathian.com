import { Component, Input, OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-saree-card',
  templateUrl: './saree-card.component.html',
  styleUrls: ['./saree-card.component.scss']
})
export class SareeCardComponent implements OnInit {
  @Input() sareeData;
  categories = [
    'All', 'Men', 'Women', 'Accessories', 'Sarees', 'Lenghas', 'Blouses'
  ]
  constructor() { }

  ngOnInit() {
  }

  setCrumbs(path) {
    const splitPath = path.split('/')
    let crumbsHTML = ``
    for (let i = 0; i < splitPath.length; i += 1) {
      const dir = splitPath[i]
      crumbsHTML += `
      <a href='templates/saree-store#${dir}' style='color: inherit' class='underline-anim'> ${dir} </a> /`
    }
    document.getElementById('main-crumbs').innerHTML = crumbsHTML
  }

  goto(name) {
    const splitPath = this.sareeData.path.split('/')
    for (let toHide of this.categories) {
      try {
        if (splitPath.indexOf(toHide) === -1) {
          const hide = document.getElementById(`${toHide}`);
          hide.style.display = 'none'
        }
      } catch (e) { }
    }
    this.setCrumbs(this.sareeData.path)
    const elmnt = document.getElementById(`${name}`);
    elmnt.style.display = 'inherit'
    elmnt.scrollIntoView();
  }
}
