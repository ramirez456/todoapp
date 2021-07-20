import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {
  

  txtInput?: FormControl;
  constructor() { }

  ngOnInit(): void {
    this.txtInput = new FormControl('Hola', Validators.required)
  }

}
