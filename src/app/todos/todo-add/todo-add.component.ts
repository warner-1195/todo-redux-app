import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions  from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: []
})
export class TodoAddComponent implements OnInit {


//definicion del input adicionandole el formcontrol
  txtInput: FormControl;

  constructor(private store : Store<AppState>) { 
    //creacion y validacion del texto ingresado
    this.txtInput = new FormControl('', Validators.required);
  }

  ngOnInit(): void {
  }

  agregar(){

    //validacion del input
    if(this.txtInput.invalid) {
      return;
    }

    //dispara la accion
    this.store.dispatch(actions.crear({texto: this.txtInput.value}));

    //limpiar el input
    this.txtInput.reset();


  }

}
