import { Component } from '@angular/core';
import { ReaderClass } from './interface/reader-class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {


  title = 'eliseReader';
  parametros = new ReaderClass;

  muestrame(_parametros:ReaderClass) {

    console.log("soy el padre");
    console.log(_parametros);
    this.parametros = _parametros;

  }
}
