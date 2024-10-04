import { Component, EventEmitter, OnInit, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardListComponent } from '../card-list/card-list.component';
import { AddItemsComponent } from '../add-items/add-items.component';
import { BuyItemComponent } from '../buy-item/buy-item.component';

@Component({
  selector: 'app-list-items',
  standalone: true,
  imports: [CommonModule, CardListComponent, AddItemsComponent, BuyItemComponent],
  templateUrl: './list-items.component.html',
  styleUrl: './list-items.component.scss'
})
export class ListItemsComponent implements OnInit {
  items: Array<{ name: string, price: number }> = []

  @Input() loadBuyItems = new EventEmitter<void>()



  @ViewChild(AddItemsComponent) addItemsComponent!: AddItemsComponent;
  @ViewChild(BuyItemComponent) buyItemComponent!: BuyItemComponent;

  ngOnInit(): void {
    this.loadItems()
    // this.clearListBuy()
  }

  ngAfterViewInit(): void {
    this.addItemsComponent.itemUpdated.subscribe(() => {
      this.loadItems();
    });
  }

  loadItems(): void {
    const storedItems = localStorage.getItem('listaCompras')
    if (storedItems) {
      this.items = JSON.parse(storedItems)
    }
  }

  editItem(item: any, index: number): void {
    if (this.addItemsComponent) {
      this.addItemsComponent.startEdit(item, index);
      this.scrollToTop()
    } else {
      console.log('addItemsComponent não está inicializado');
    }
  }


  deleteItem(index: number): void {
    const storedItems = JSON.parse(localStorage.getItem('listaCompras') || '[]');
    storedItems.splice(index, 1);
    localStorage.setItem('listaCompras', JSON.stringify(storedItems));
    this.loadItems();
  }

  clearList(): void {
    localStorage.removeItem('listaCompras');
    this.items = [];
  }


  buyItem(item: any, index: number) {
    const purchasedItems = JSON.parse(localStorage.getItem('listaComprados') || '[]');
    purchasedItems.push(item);
    localStorage.setItem('listaComprados', JSON.stringify(purchasedItems));
    this.deleteItem(index);
    this.buyItemComponent.loadPurchasedItems();

  }

  onLoadBuyItems(): void {
    this.loadBuyItems.emit()
  }


  clearListBuy(): void {
    localStorage.removeItem('listaComprados');
  }

  scrollToTop(): void {
    const scrollDuration = 500;
    const scrollStep = -window.scrollY / (scrollDuration / 500);
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);


  }

}