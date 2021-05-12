import { Component, OnInit } from '@angular/core';
import {MyComponentService} from './my-component.component.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  constructor(private myComponentService: MyComponentService) { }

  ngOnInit(): void {
    this.myComponentService.myFunction();
  }

}
