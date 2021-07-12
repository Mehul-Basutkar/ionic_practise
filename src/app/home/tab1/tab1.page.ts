import { Component, OnInit } from '@angular/core';
import { TsService } from './ts.service';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  show:boolean = false;
  data:string ="this is hidden data";

  constructor(private ts: TsService) { 
    this.ts.subject.subscribe( res => {
      this.show = res;
    });
  }

  ngOnInit() {
  }

}
