import { ProductosService } from './services/productos.service';
import { InfoPaginaService } from './services/info-pagina.service';
import {HttpClientModule } from '@angular/common/http' ;
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// RUTAS
import { AppRoutingModule } from './app-routing.module';

//COMPONENTES
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { SearchComponent } from './pages/search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    ItemComponent,
    SearchComponent
  ],
  /*aca van los modulos*/
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  /*en la version nueva, ya no es necesario agregar los services
  a providres, basta con poner: providedIn: 'root' en el decorador
  injectable para decirle que se ve desde el root para abajo*/
  providers: [InfoPaginaService, ProductosService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
