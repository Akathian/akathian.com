import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-semester',
  templateUrl: './semester.component.html',
  styleUrls: ['./semester.component.scss']
})
export class SemesterComponent implements OnInit {
  @Input() sem;
  constructor() { }

  ngOnInit() {
  }

}
