import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'products-price-page',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  public price: number = 0;


  constructor() {
    console.log('**COMPONENTE HIJO**')
  }

  ngOnInit():void {
    console.log('PriceComponent(HIJO): ngOnInit');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('PriceComponent(HIJO): ngOnChanges');
    console.log({ changes });
  }
  ngOnDestroy(): void {
    console.log('PriceComponent(HIJO): ngOnDestroy');
  }



}
