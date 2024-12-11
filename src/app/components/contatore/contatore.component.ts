import { Component } from '@angular/core';

@Component({
  selector: 'app-contatore',
  template: `
    <h1>Contatore</h1>
    <p>{{ contatore }}</p>
    <button (click)="incrementa(1)">Incrementa</button>
    <button (click)="incrementa(-1)">decrementa</button>
  `,
  styles: ``
})
export class ContatoreComponent {
  contatore = 90;

  incrementa(num: number) {
    this.contatore += num;
  }
}

