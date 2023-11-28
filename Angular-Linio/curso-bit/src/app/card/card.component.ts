import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() title:String = "soy el titulo"
  @Input() img: String = "soy la imagen generica"
  @Input() link: String = "Agregar al carrito"
  @Input() description: String = "Descripcion generica"
  @Input() secondprice: String = "Descripcion generica"
  @Input() style_button: String = "btn btn-secondary"
  @Input() envio_gratis: String = "btn btn-success"
  
}
