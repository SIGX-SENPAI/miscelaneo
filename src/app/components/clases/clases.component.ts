import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
})
export class ClasesComponent implements OnInit {
  alerta = 'alert-danger';
  propiedades = {
    danger: false,
  };

  loading = false;

  constructor() { }

  ngOnInit() {
  }
  ejecutar() {
    this.loading = true;
    setTimeout( () => this.loading = false, 3000 );
  }

}
