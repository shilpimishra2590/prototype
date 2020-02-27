import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  constructor(private httpClient:HttpClient) { }

  comment;
  IsError:boolean = false;

  ngOnInit() {
    this.httpClient.get("https://jsonplaceholder.typicode.com/comments").toPromise().then((todo) =>{
    console.log(todo);
    this.comment = todo;
    }).catch((errorcatch)=>{
      this.IsError = true;  
    }).finally(()=>{
      console.log('completed')
    })

  }

}
