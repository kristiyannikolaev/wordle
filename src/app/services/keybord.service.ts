import { Injectable } from '@angular/core';
import { BoardService } from './board.service';

@Injectable({
  providedIn: 'root'
})
export class KeyboardService {

  wordle = 'ПРИБОР';

  constructor(private boardService: BoardService) {}

  keys: string[] = [
    'Я',
    'В',
    'Е',
    'Р',
    'Т',
    'У',
    'И',
    'О',
    'П',
    'Ю',
    'А',
    'С',
    'Д',
    'Ф',
    'Г',
    'Х',
    'Й',
    'К',
    'Л',
    'Ш',
    'Щ',
    '\u2714',
    'З',
    'Ь',
    'Ц',
    'Ж',
    'Б',
    'Н',
    'М',
    'Ч',
    '\u232b'
  ];

  handleClick(key: string,): void {
    console.log('cliked ' + key)
    this.boardService.addLetter(key);
  }
}
