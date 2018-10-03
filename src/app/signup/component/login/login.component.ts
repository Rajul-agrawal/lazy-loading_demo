import { Component, OnInit } from '@angular/core';
import { CounterService } from '../../../shared/service/counter.service';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private counterService: CounterService) { }

  ngOnInit() {
  }

  increment():void{
    this.counterService.incre();
  }
}
