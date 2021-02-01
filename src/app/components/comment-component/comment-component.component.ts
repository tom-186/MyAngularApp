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
    /* FETCH DATA */
    fetch('https://jsonplaceholder.typicode.com/comments')
     .then(response=>{
    if (!response.ok) throw Error(response.statusText)
    return response.json();
    })
    .then((json:Array<Comment>)=>{
    this.comments = json;      
    }).catch(err => (this.error = err));

    /* GET DATE */
    var date =  new Date();
    var dd = String(date.getDate());  
    function ordinal_suffix_of(i) {
      var j = i % 10,
          k = i % 100;
      if (j == 1 && k != 11) {
          return i + "st";
      }
      if (j == 2 && k != 12) {
          return i + "nd";
      }
      if (j == 3 && k != 13) {
          return i + "rd";
      }
      return i + "th";  }  
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    var mm = monthNames[date.getMonth()];
    var yyyy = String(date.getFullYear());
    var date_str = ordinal_suffix_of(dd) +' '+mm+' '+yyyy;
    this.date = date_str;
  }
}
