import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  constructor(private http: HttpClient) {}

  getPages(chapter: string): Array<string> {
    let pages = new Array();
    this.http.get('/elisereader/backend.php?link=' + chapter,{responseType: 'text'}).subscribe(data => {
      //console.log(data);
      let num = 0;
      while (num != -1) {
        num = data.indexOf("data-src=' https://visortmo.ws/uploads/manga/",num + 1);
        if(num == -1)
          break;
        let num2 = data.indexOf(" '",num);
        let temporal = data.substring(num + 11,num2);
        pages.push(temporal)
      }
  })
  console.log(pages);
  return pages;
  }
}
