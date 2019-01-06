import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-content-default',
  templateUrl: './content-default.component.html',
  styleUrls: ['./content-default.component.scss']
})
export class ContentDefaultComponent implements OnInit {
  mode = new FormControl('over');


  constructor() { }

  ngOnInit() {
  }

}
