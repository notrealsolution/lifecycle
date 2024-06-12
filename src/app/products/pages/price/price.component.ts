import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'products-price-page',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  public price: number = 0;

  public interval$?: Subscription;

  constructor() {
    console.log('**COMPONENTE HIJO**')
  }

  ngOnInit():void {

    console.log('PriceComponent(HIJO): ngOnInit');

    this.interval$ = interval(1000).subscribe( value => console.log(`Tick: ${ value }`) );
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('PriceComponent(HIJO): ngOnChanges');
    console.log({ changes });
  }
  ngOnDestroy(): void {
    this.interval$?.unsubscribe();
    console.log('PriceComponent(HIJO): ngOnDestroy');
  }



}
