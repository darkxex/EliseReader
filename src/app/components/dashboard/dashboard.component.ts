import { Component, Input } from '@angular/core';
import { ReaderClass } from 'src/app/interface/reader-class';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  @Input()
  item:any = {
    expandir:false,
    separar:false,
    paginado: false
  };



}
