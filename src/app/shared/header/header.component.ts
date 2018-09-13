import { Router } from '@angular/router';
import { InfoPaginaService } from './../../services/info-pagina.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
/*para poder acceder a los datos q estan en el service,
hay q inyectarlo en el contructor*/
  constructor(public infoPaginaService: InfoPaginaService,
              private router: Router) { }

  ngOnInit() {
  }

  buscarProducto( termino: string) {
   //  console.log(termino);
   // si el term no es suf para buscar en la base,
   // no hace nada
   if (termino.length < 1) {
    return;
   }
   this.router.navigate(['/search', termino]);
  }
}
