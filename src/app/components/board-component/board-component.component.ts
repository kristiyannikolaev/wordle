import { Component } from '@angular/core';
import { BoardService } from 'src/app/services/board.service';

@Component({
  selector: 'app-board-component',
  templateUrl: './board-component.component.html',
  styleUrls: ['./board-component.component.css'],
})
export class BoardComponentComponent {
  board: string[][];

  constructor(public boardService:BoardService) {
    this.board = this.boardService.guessRows;
  }
}
