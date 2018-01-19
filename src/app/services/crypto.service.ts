import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'

const coinList = 'https://min-api.cryptocompare.com/data/all/coinlist';

@Injectable()

export class CryptoService {

    searchUrl: string;
    searchParam: string;
    constructor(private http: HttpClient) { }

    public getCryptoCurrencyList() {
        return this.http.get(coinList)
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
}