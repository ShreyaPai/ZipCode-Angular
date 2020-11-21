import { Component, OnInit } from '@angular/core';
import {MegaMenuItem,MenuItem} from 'primeng/api';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  country: MegaMenuItem[];
  activeCountry: MegaMenuItem;

  constructor() { }

  ngOnInit(): void {
    this.country = [
      {label: 'India'},
      {label: 'UK'},
      {label: 'USA'}
    ]
  }

  public changeCountry(countrySelected): void {
    this.activeCountry = countrySelected.activeItem.label;
  }
}
