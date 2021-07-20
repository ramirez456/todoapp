import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from '../../models/todo.models';
import { crear } from './../actions/todo.actions';

export const initialState:Todo[] = [
  new Todo('salvar al mundo')
];

const _todoReducer = createReducer(
  initialState,
  on(crear, (state,{texto}) => [...state, new Todo(texto)])
);

export function todoReducer(state: Todo[] | undefined, action: Action) {
  return _todoReducer(state, action);
} 