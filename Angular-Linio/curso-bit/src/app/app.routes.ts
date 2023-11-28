
import { Routes } from '@angular/router';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { HpComponent } from './hp/hp.component';
import { SamsungComponent } from './samsung/samsung.component';
import { LgComponent } from './lg/lg.component';
import { DescuentosComponent } from './descuentos exclusivos/descuentos.component';





export const routes: Routes = [
    {
        path:'lista-productos', component: ListaProductosComponent
    },
    {
        path:'descuentos', component: DescuentosComponent
    },
    {
        path:'hp', component: HpComponent
    },
    {
        path:'samsung', component: SamsungComponent
    },
    {
        path:'lg', component: LgComponent
    },
];
