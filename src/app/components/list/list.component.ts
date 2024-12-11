import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  // http
  names = ['Mario', 'Luigi', 'Stefano', 'Franco'];
}
