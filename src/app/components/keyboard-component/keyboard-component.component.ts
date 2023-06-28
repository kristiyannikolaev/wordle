import { Component } from '@angular/core';
import { KeyboardService } from 'src/app/services/keybord.service';

@Component({
  selector: 'app-keyboard-component',
  templateUrl: './keyboard-component.component.html',
  styleUrls: ['./keyboard-component.component.css']
})
export class KeyboardComponentComponent {
  keyboard: string[] = [];

  constructor(public keyboardService: KeyboardService) {
    this.keyboard = this.keyboardService.keys;
  }

  handleClick(key: string) {
    this.keyboardService.handleClick(key);
  }
}
