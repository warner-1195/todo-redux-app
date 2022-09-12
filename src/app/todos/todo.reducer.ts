import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.models';
import * as actions from './todo.actions';
import { limpiarTodos } from './todo.actions';

export const initialState: Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('Comer'),
  new Todo('Dormir'),
  new Todo('Estudiar')
];

export const todoReducer = createReducer(
  initialState,
  on(actions.crear, (state, {texto}) => [...state, new Todo(texto) ]),

  on(actions.limpiarTodos, (state) => state.filter(todo => !todo.completado)),

  on(actions.borrar, (state, {id} ) => state.filter( todo => todo.id !== id )),

  on(actions.toggle, (state, {id}) => {
    return state.map(todo => {
      if(todo.id === id){
        return{
          ...todo,
          completado : !todo.completado
        }
      } else {
        return todo;
      }
    })
  }),
  on(actions.editar, (state, {id, texto}) => {
    return state.map(todo => {
      if(todo.id === id){
        return{
          ...todo,
          texto: texto
        }
      } else {
        return todo;
      }
    })
  }),

  on(actions.toggleAll, (state, {completado}) => state.map(todo => {

    return{
      ...todo,
      completado: completado
    }

  }))
  
);