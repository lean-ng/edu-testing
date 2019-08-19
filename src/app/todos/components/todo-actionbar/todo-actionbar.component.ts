import { Component, OnInit } from '@angular/core';
import { Store } from '../../state/store';

@Component({
  selector: 'todo-actionbar',
  templateUrl: './todo-actionbar.component.html',
  styleUrls: ['./todo-actionbar.component.css']
})
export class TodoActionbarComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit() {
  }

}
