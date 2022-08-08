import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.css']
})
export class Section2Component implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }
  goHome(){
    this.router.navigate([''])
  }

}
