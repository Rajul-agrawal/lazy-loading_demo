import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../../node_modules/@angular/router';

@Component({
  moduleId: module.id,
  selector: 'os-navbar',
  templateUrl: 'os-navbar.component.html',
  styleUrls: ['os-navbar.component.css']
})
export class OsNavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
}
