import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';

import { Todo } from '../models/todo.models';
import { AppState } from '../../app.reducer';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { filtrosValidos } from 'src/app/filtro/filtro.actions';
import { state } from '@angular/animations';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: []
})
export class TodoListComponent implements OnInit {

  todos : Todo[] = [];

  filtroActual: filtrosValidos = "todos";


  constructor(private store : Store<AppState>) { }

  ngOnInit(): void {

   // this.store.select('todos')
     // .subscribe(todos => this.todos = todos);


    this.store.subscribe(({todos,filtro})=> {

      this.todos= todos;

      this.filtroActual = filtro;

    })


  }

}
