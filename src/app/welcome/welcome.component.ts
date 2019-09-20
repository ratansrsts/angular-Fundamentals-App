import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import {AppComponent} from '../app.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

message='Some welcome message'
name=''

  constructor(private route: ActivatedRoute) { }



  // constructor(private route: Router) { }

  ngOnInit() {
    console.log(this.message)
    // console.log(this.route.snapshot.params['name']);
    this.name=(this.route.snapshot.params['name']);
  }

  // toastPage() {
  //   this.route.navigate(['error']);
  // }

}
