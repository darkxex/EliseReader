import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ReaderClass } from 'src/app/interface/reader-class';
import { PagesService } from 'src/app/services/pages.service';

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

 listchapter = new Array<string>;

  chapterloaded = new Array<string>();
selectedValue: any;

  constructor(public pages: PagesService, private rutaActiva: ActivatedRoute, private router: Router) {
  }

  chapter: string = "0";
  ngOnInit() {
      this.listchapter = [];
      for (let index = 0; index < 144; index++) {
        this.listchapter.push(index + "");

      }
      this.listchapter.push("143.2");
      console.log(this.listchapter);
    this.rutaActiva.paramMap.subscribe((param) =>
      {
       console.log("subs:"+ param.get('id'));
        this.chapter = param.get('id') || "0";
        this.chapterloaded = this.pages.getPages(this.chapter);
        this.selectedValue = this.chapter;
      });


  }

  btnSiguiente(){
   let indexNext = this.listchapter.indexOf(this.selectedValue) + 1;
   console.log("Valor: "+ indexNext);
   if (indexNext < this.listchapter.length)
   this.router.navigateByUrl("chapter/"+ this.listchapter[indexNext]);

  }

  btnAnterior(){
    let indexNext = this.listchapter.indexOf(this.selectedValue) - 1;
    console.log("Valor: "+ indexNext);
    if (indexNext >=0 )
    this.router.navigateByUrl("chapter/"+ this.listchapter[indexNext]);

   }
  chapteris()
  {console.log(this.selectedValue);
    this.router.navigateByUrl("chapter/"+ this.selectedValue);
  }


}
