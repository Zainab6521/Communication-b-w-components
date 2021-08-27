import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  currentItem = 'Television';
  items = ['white', 'yellow', 'red', 'green'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
