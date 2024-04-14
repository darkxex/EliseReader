import { Component } from '@angular/core';
import { ReaderClass } from 'src/app/interface/reader-class';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  parametros = new ReaderClass;

  muestrame(_parametros:ReaderClass) {

    console.log("soy el padre");
    console.log(_parametros);
    this.parametros = _parametros;

  }
}
