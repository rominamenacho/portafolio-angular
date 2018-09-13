import { ProductoDescripcion } from './../../interfaces/producto-descripcion.interface';
import { ProductosService } from './../../services/productos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

producto: ProductoDescripcion;
productoId: string;

  constructor(private route: ActivatedRoute,
              public productoService: ProductosService ) { }

  ngOnInit() {

    /*al subscribirse al route, va a estar pendiente de todos los
    cambios en las rutas*/

      this.route.params
      .subscribe(parametros => {
        // console.log(parametros['id']);
        this.productoService.getProducto(parametros['id'])
          .subscribe ((producto: ProductoDescripcion ) => {
            this.productoId = parametros['id'];
            this.producto = producto;
          });
      });
  }

}
