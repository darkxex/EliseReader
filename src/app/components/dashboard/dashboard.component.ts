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



  chapterloaded = new Array<string>();
selectedValue: any;

  constructor(public pages: PagesService, private rutaActiva: ActivatedRoute, private router: Router) {
    let _value = this.rutaActiva.snapshot.params;
    console.log (_value);
  }

  chapter: string = "0";
  ngOnInit() {

    this.rutaActiva.paramMap.subscribe((param) =>
      {
       console.log("subs:"+ param.get('id'));
        this.chapter = param.get('id') || "0";
        this.chapterloaded = this.pages.getPages(this.chapter);
        this.selectedValue = this.chapter;
      });


  }

  chapteris()
  {console.log(this.selectedValue);
    this.router.navigateByUrl("chapter/"+ this.selectedValue);
  }


}
