import { Component, OnInit } from '@angular/core';
import { CounterService } from '../../service/counter.service';

@Component({
  moduleId: module.id,
  selector: 'app-home-page',
  templateUrl: 'home-page.component.html',
  styleUrls: ['home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private counterService: CounterService) { }

  ngOnInit() {
  }

  increment():void{
    this.counterService.incre();
  }
}
