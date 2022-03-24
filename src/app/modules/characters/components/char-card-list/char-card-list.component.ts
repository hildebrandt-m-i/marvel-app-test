import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-char-card-list',
  templateUrl: './char-card-list.component.html',
  styleUrls: ['./char-card-list.component.scss'],
})
export class CharCardListComponent implements OnInit {

  @Input() character: any;

  constructor() { }

  ngOnInit() {}

}
