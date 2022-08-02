import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dialog-section-item',
  templateUrl: './dialog-section-item.component.html',
  styleUrls: ['./dialog-section-item.component.css']
})
export class DialogSectionItemComponent implements OnInit {

  @Input() name: string;
  @Input() value: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
