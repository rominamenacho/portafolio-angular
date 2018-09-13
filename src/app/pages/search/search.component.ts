import { ProductosService } from './../../services/productos.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  // para recibir el argumento, uso route
  constructor( private route: ActivatedRoute,
    public productoS: ProductosService) { }

  ngOnInit() {
    // para recuperar el parametro de busqueda
    this.route.params
      .subscribe(params => {
        // console.log(params['termino']);
        this.productoS.buscarProducto(params['termino']);
      });
  }

}
