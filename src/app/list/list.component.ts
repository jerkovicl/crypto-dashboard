import {Component, Input, OnInit} from '@angular/core';
import {CoinService} from '../coin.service';
import {Coin} from '../coin.model';
@Component({
 selector: 'app-list',
 templateUrl: './list.component.html',
 styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
 coins: Coin[];
 noDataMsg: string;
 fiat: string;
constructor(private coinService: CoinService) {
 this.noDataMsg = 'Select fiat currency to get started';
 // filteredCoinsSubject: Which sends updates on the filtered collection of crypto currency data. So if in the multiselect filter, only two crypto coins are selected then, the most recent value emitted by subscribing to filteredCoinsSubject will be an array of length two.
 this.coinService.filteredCoinsSubject.subscribe({
 next: (v) => this.updateCoins(v),
 });
 // emits a string message based on api actions
 this.coinService.apiSubject.subscribe({
 next: (msg) => this.noDataMsg = msg,
 });
 // emits the value of the selected fiat currency when it is updated.
 this.coinService.fiatSubject.subscribe({
 next: (newValue) => this.fiat = newValue,
 });
 }
updateCoins(coins: Coin[]) {
 this.coins = [];
 coins.forEach((coin) => this.coins.push(coin));
 }
 ngOnInit() {
 }
}