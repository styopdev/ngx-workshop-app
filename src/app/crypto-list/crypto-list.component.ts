import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../services/crypto.service'

@Component({
  selector: 'crypto-list',
  templateUrl: './crypto-list.component.html',
  styleUrls: ['./crypto-list.component.css']
})
export class CryptoListComponent implements OnInit {
  public coinList: Object;
  public visibleItems: any[] = [];

  constructor(public crService: CryptoService) {
    this.visibleItems = new Array();
  }

  ngOnInit() {
    this.crService.getCryptoCurrencyList()
      .subscribe(list => this.coinList = list.splice(0, 100));
  }

  showRate(currency) {
    this.visibleItems.push(currency);
  }

}
