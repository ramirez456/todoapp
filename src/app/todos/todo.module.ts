import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoAddComponent} from './todo-add/todo-add.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { ItemComponent } from './todo-item/item.component';
import { ListComponent } from './todo-list/list.component';
import { TodoPageComponent } from './todo-page/todo-page.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TodoAddComponent,
    TodoFooterComponent,
    ItemComponent,
    ListComponent,
    TodoPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    TodoPageComponent
  ]
})
export class TodoModule { }
