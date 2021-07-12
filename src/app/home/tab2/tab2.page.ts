import { Component, OnInit } from '@angular/core';
import { TsService } from '../tab1/ts.service';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {

  constructor(private ts: TsService) { }

  ngOnInit() {
  }

  click(){
    this.ts.subject.next(true);
  }
}
