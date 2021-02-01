import { getLocaleMonthNames } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface Comment{
  postId:number;
  name:string;
  email:string;
  body:string
}

@Component({
  selector: 'app-comment-component',
  templateUrl: './comment-component.component.html',
  styleUrls: ['./comment-component.component.css']
})

export class CommentComponentComponent implements OnInit {

  comments : Array<Comment>;
  error: string;
  date: string;
  

  constructor() { }

  ngOnInit(): void {
    // metodo di life circle
    // questo serve per recuperare dati
    fetch('https://jsonplaceholder.typicode.com/comments')
     .then(response=>{
    if (!response.ok) throw Error(response.statusText)
    return response.json();
    })
    .then((json:Array<Comment>)=>{
    this.comments = json;      
    }).catch(err => (this.error = err));
    var today =  new Date();
    var dd = String(today.getDate());    
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    var mm = monthNames[today.getMonth()];
    var yyyy = String(today.getFullYear());
    var today_str = dd +' '+mm+' '+yyyy;
    this.date = today_str;                              
  }
}
