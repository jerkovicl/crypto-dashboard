import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { ListCardComponent } from './list-card/list-card.component';
import { ListComponent } from './list/list.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, MultiselectDropdownModule],
  declarations: [AppComponent, HelloComponent, SearchFilterComponent, ListCardComponent, ListComponent, DashboardComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
