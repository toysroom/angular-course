import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParagraphComponent } from './components/paragraph.component';
import { ListComponent } from './components/list/list.component';
import { PippoComponent } from './components/pippo/pippo.component';
import { ProvaComponent } from './components/prova.component';
import { ContatoreComponent } from './components/contatore/contatore.component';

import { TodoModule } from './components/todo/todo.module';

@NgModule({
  declarations: [
    AppComponent,
    ParagraphComponent,
    ListComponent,
    PippoComponent,
    ProvaComponent,
    ContatoreComponent,
  ],
  imports: [
    BrowserModule, 
    TodoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
