import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TitleComponentComponent } from './components/title-component/title-component.component';
import { MessageComponentComponent } from './components/message-component/message-component.component';
import { BoardComponentComponent } from './components/board-component/board-component.component';
import { KeyboardComponentComponent } from './components/keyboard-component/keyboard-component.component';
import { BoardService } from './services/board.service';
import { KeyboardService } from './services/keybord.service';

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
  providers: [BoardService, KeyboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
