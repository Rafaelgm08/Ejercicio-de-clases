import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavlateralComponent } from './navlateral/navlateral.component';
import { DescuentosComponent } from './descuentos exclusivos/descuentos.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CardComponent, NavbarComponent, NavlateralComponent, RouterModule, DescuentosComponent, ListaProductosComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public title: string = 'Hola mundo de angular';
  public contador: number = 10;
}
