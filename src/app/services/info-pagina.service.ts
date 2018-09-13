import { Equipo } from './../interfaces/equipo.interface';
import { InfoPagina} from './../interfaces/info-pagina.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable(
 /* {
 providedIn: 'root'
 }*/
)

export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;
  equipo: Equipo[] = [];

// http para hacer peticiones
  constructor(private http: HttpClient) {
    this.cargarInfo();
    this.cargarEquipo();

  }

  // cargarInfo
  private cargarInfo() {

    // leer el archivo json
this.http.get('assets/data/data-pagina.json')
/* si le doy un tipo a la respuesta, puedo acceder a los elem
dle objeto InfoPagina y hay q ponerlo entre ()*/
    .subscribe( (resp: InfoPagina) => {
      this.cargada = true;
      this.info = resp;
      // console.log(resp);
       // console.log(resp['twitter']);
    });

  }


private cargarEquipo() {
  this.http.get('https://angular-smartest-v1.firebaseio.com/equipo.json')
    .subscribe( (resp: Equipo[] ) => {
      this.equipo = resp;
     // console.log(resp);
    });
}

}
