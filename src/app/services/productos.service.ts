import { Producto } from './../interfaces/productos.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { resolve } from '../../../node_modules/@types/q';

@Injectable(
  /* {
  providedIn: 'root'
  }*/
)

export class ProductosService {

  cargando = true;
  productos: Producto[] = [];
  productosFiltrado: Producto[] = [];


  constructor(private http: HttpClient) {
    this.cargarProductos();
  }


  private cargarProductos() {
    // promesas: hay q mostrar algo hasta q se resuelva esto:
    return new Promise(( resolve , reject) => {
      this.http.get('https://angular-smartest-v1.firebaseio.com/productos_idx.json')
      .subscribe((resp: Producto[]) => {
        this.productos = resp;
        this.cargando = false;
        resolve();
      });
    });


  }

   getProducto(id: string) {
    /*la comilla ` es de  ECMAScript 6` y se llaman comillas literales
permite hacer inserciones de pedazos de string o expresiones dentro de un string
${expresion de js o string} - lo concatena
    */
  return  this.http.get(`https://angular-smartest-v1.firebaseio.com/productos/${id}.json`);

  }

  buscarProducto(termino: string) {
    if (this.productos.length === 0) {
      // hay q esperar q se carguen los datos
      // .then() ejecuta un cod desp q termina esa func
      // es un callback =>
      this.cargarProductos().then(() => {
        // desp de tener los prod
        // aplicar filtro
        this.filtrarProducto(termino);
      });
    } else {
      // aplicar el filtro
      this.filtrarProducto(termino);
    }
  }

  private filtrarProducto(termino: string) {
    // hay q limpiarlo xq sino solo agrega elem al array
    this.productosFiltrado = [];
    termino = termino.toLocaleLowerCase();
  // barre todo el array, y crea uno nuevo con los datos de la busq
  /*this.productosFiltrado = this.productos.filter( producto =>{
    return true;
  });*/

   this.productos.forEach(prod => {
     const tituloLower = prod.titulo.toLocaleLowerCase();
    if (prod.categoria.indexOf(termino) >= 0
    || tituloLower.indexOf(termino) >= 0) {

this.productosFiltrado.push(prod);
    }
  });
  }


}

