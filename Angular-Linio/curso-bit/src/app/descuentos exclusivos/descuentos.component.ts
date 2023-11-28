import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from '../card/card.component';
import { RouterModule } from '@angular/router';
import { NavlateralComponent } from '../navlateral/navlateral.component';
import { NavbarComponent } from '../navbar/navbar.component';


@Component({
  selector: 'app-descuentos',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, CardComponent, NavlateralComponent, NavbarComponent],
  templateUrl: './descuentos.component.html',
  styleUrl: './descuentos.component.css'
})
export class DescuentosComponent {

}
