import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CryptoListComponent } from './crypto-list/crypto-list.component';

import { CryptoService } from './services/crypto.service'

@NgModule({
  declarations: [
    AppComponent,    
    CryptoListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CryptoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
