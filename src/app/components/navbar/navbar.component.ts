import { DOCUMENT } from '@angular/common';
import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { ReaderClass } from 'src/app/interface/reader-class';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit{


@Output() parametros = new EventEmitter<any>();

  opciones = new ReaderClass;

  txtExpandir = "Expandir";
  txtSeparar = "Separar"
  fullScreen = false;
  elem: any;
  constructor(
          @Inject(DOCUMENT) private document: any
      ) {}
  ngOnInit(): void {

      this.elem = document.documentElement;
  }

  openFullscreen() {
          if (this.elem.requestFullscreen) {
            this.elem.requestFullscreen();
          } else if (this.elem.mozRequestFullScreen) {
            /* Firefox */
            this.elem.mozRequestFullScreen();
          } else if (this.elem.webkitRequestFullscreen) {
            /* Chrome, Safari and Opera */
            this.elem.webkitRequestFullscreen();
          } else if (this.elem.msRequestFullscreen) {
            /* IE/Edge */
            this.elem.msRequestFullscreen();
          }
          this.fullScreen = true;
        }
  /* Close fullscreen */
        closeFullscreen() {
          if (this.document.exitFullscreen) {
            this.document.exitFullscreen();
          } else if (this.document.mozCancelFullScreen) {
            /* Firefox */
            this.document.mozCancelFullScreen();
          } else if (this.document.webkitExitFullscreen) {
            /* Chrome, Safari and Opera */
            this.document.webkitExitFullscreen();
          } else if (this.document.msExitFullscreen) {
            /* IE/Edge */
            this.document.msExitFullscreen();
          }
          this.fullScreen = false;
        }

  btnExpandir() {
    this.opciones.expandir = !this.opciones.expandir;
    this.parametros.emit(this.opciones);
    this.txtExpandir = (this.opciones.expandir ? "Normal" : "Expandir");

  }
  btnSeparar() {
    this.opciones.separar = !this.opciones.separar;
    this.parametros.emit(this.opciones);
    this.txtSeparar = (this.opciones.separar ? "Unir" : "Separar");
  }

  btnPaginadoOn() {
    this.opciones.paginado = true;
    this.parametros.emit(this.opciones);
  }

  btnPaginadoOff() {
    this.opciones.paginado = false;
    this.parametros.emit(this.opciones);
  }

}
