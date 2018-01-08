import {Component} from '@angular/core';
// import CoinService
import {CoinService} from '../coin.service';
@Component({
 selector: 'app-dashboard',
 templateUrl: './dashboard.component.html',
 styleUrls: ['./dashboard.component.css'],
 providers: [CoinService] // provider setup
})
export class DashboardComponent {

}