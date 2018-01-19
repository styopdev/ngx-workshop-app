import { Component, OnInit, Input } from '@angular/core';
import { CryptoService } from '../services/crypto.service'

@Component({
  selector: 'coin-price',
  templateUrl: './coin-price.component.html',
  styleUrls: ['./coin-price.component.css']
})
export class CoinPriceComponent implements OnInit {
  @Input() currency ?: any;
  public price: number;

  constructor(public crService: CryptoService) {}

  ngOnInit() {
    this.crService.getCryptoPrice(this.currency.key)
      .subscribe(price => this.price = price[this.currency.key]);
  }

}
