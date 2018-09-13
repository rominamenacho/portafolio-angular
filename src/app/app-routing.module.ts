import { SearchComponent } from './pages/search/search.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const app_routes: Routes = [
{ path: 'home', component: PortafolioComponent},
{ path: 'about', component: AboutComponent},
{ path: 'item/:id', component: ItemComponent},
{ path: 'search/:termino', component: SearchComponent},
/*cualquier otra ruta q no sea las de arriba, va a redireccionar al path, es decir a portfolio
pathMatch significa que lea todo el path
*/
{ path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
imports: [
  /*forRoot es para rutas de la raiz de nuestra app,
  routChid es para declarar las rutas fijas
  useHash:patron- ver */
  RouterModule.forRoot(app_routes, {useHash: true})
],
exports: [
  RouterModule
]
})
export class AppRoutingModule{

}
