import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {

  constructor() { }

  counter: number = 0;

  incre():void{
    this.counter = this.counter + 1;
    console.log(this.counter);
  }
}
