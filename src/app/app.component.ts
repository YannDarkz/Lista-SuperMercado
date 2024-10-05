import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ListItemsComponent } from './components/list-items/list-items.component';
import { BuyItemComponent } from './components/buy-item/buy-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BuyItemComponent, ListItemsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '';
  notifyAddItem(): void {
    this.title = 'adcionado com sucesso'
    setTimeout(() => {
      this.title = ''
    },2000)
  }
}
