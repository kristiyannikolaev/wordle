import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TitleComponentComponent } from './components/title-component/title-component.component';
import { MessageComponentComponent } from './components/message-component/message-component.component';
import { BoardComponentComponent } from './components/board-component/board-component.component';
import { KeyboardComponentComponent } from './components/keyboard-component/keyboard-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponentComponent,
    MessageComponentComponent,
    BoardComponentComponent,
    KeyboardComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
