import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { TodoModule } from './todos/todo.module';
import { FooterComponent } from './footer/footer.component';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './todos/store/reducers/todo.reducer';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    TodoModule,
    StoreModule.forRoot({ todos: todoReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: true,
      autoPause: true,
      features: {
        pause: false,
        lock: true,
        persist: true
      }
    }) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
