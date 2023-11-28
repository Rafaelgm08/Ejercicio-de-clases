import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from '../card/card.component';
import { RouterModule } from '@angular/router';
import { NavlateralComponent } from '../navlateral/navlateral.component';
import { NavbarComponent } from '../navbar/navbar.component';


@Component({
  selector: 'app-samsung',
  standalone: true,
  imports: [CommonModule,RouterOutlet, RouterModule, CardComponent, NavlateralComponent, NavbarComponent],
  templateUrl: './samsung.component.html',
  styleUrl: './samsung.component.css'
})
export class SamsungComponent {

}
