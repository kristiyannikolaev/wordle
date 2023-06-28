import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class BoardService {

  guessRows:string[][] = [
    ['', '', '', '', '', ''],
    ['', '', '', '', '', ''],
    ['', '', '', '', '', ''],
    ['', '', '', '', '', ''],
    ['', '', '', '', '', ''],
    ['', '', '', '', '', ''],
  ]

  currentRow = 0;
  currentTile = 0;

  addLetter(letter: string) :void {
    const tile = (<HTMLSelectElement>document.getElementById(`guessRow-${this.currentRow}-tile-${this.currentTile}`));
    tile.textContent = letter;
    this.guessRows[this.currentRow][this.currentTile - 1] = letter;
    // this.currentTile++;
    console.log(this.guessRows);
  }
}
