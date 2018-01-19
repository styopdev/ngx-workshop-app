import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'

const coinListEndpoint = 'https://min-api.cryptocompare.com/data/all/coinlist';
const priceEndpoint = 'https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=';

@Injectable()

export class CryptoService {

    searchUrl: string;
    searchParam: string;
    constructor(private http: HttpClient) { }

    public getCryptoCurrencyList() {
        return this.http.get(coinListEndpoint)
            .map(data => data as any)
            .map(data => {
                return Object.keys(data.Data)
                    .map(key => {
                        return {
                            key, value: data.Data[key]
                        }
                    });
            });
    }

    public getCryptoPrice(currencyCode) {
        return this.http.get(`${priceEndpoint}${currencyCode}`);
    }
}
