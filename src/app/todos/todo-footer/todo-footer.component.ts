import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from 'src/app/filtro/filtro.actions';
import { AppState } from '../../app.reducer';
import { filtrosValidos } from '../../filtro/filtro.actions';
import { limpiarTodos } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: []
})
export class TodoFooterComponent implements OnInit {

  filtroActual : actions.filtrosValidos = 'todos';

  filtros: actions.filtrosValidos [] = ['todos', 'pendientes', 'completados'];

  pendientes: number = 0;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    this.store.subscribe( state => {

        this.filtroActual = state.filtro;
        this.pendientes = state.todos.filter(todo => !todo.completado).length;

      })
  }

  cambiarFiltro(filtro:actions.filtrosValidos){

    this.store.dispatch(actions.setFiltro({filtro}))

  }

  limpiarCompletados(){

    this.store.dispatch(limpiarTodos())

  }



}
