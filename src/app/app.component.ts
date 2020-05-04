import { Component ,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit{
  
  photos: {id:string,title:string,url:string}[];

  constructor(private http: HttpClient) { }


ngOnInit() {
  this.http.get('https://jsonplaceholder.typicode.com/photos?_limit=6').subscribe((res:any)=>{
    this.photos = res
  });
}
}
