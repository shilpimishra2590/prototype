import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  // httpClient: any;

  constructor(private httpClient:HttpClient) { }
  serverdata;
  IsError:boolean = false;

  ngOnInit() {
    this.httpClient.get("https://jsonplaceholder.typicode.com/albums").toPromise().then((data) => {
      console.log(data)
      this.serverdata = data;
    }).catch((errorcatch) => {
      this.IsError = true;
      
    }).finally(() => {
      console.log('completed')
    })
  }

}
