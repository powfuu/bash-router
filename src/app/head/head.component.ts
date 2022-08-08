import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  isDark: boolean = true;
  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem('@app-theme') === "dark"){
      document.documentElement.className = "dark";
      this.isDark = false;
    }else if(localStorage.getItem('@app-theme') === "light"){
      document.documentElement.className = "light";
      this.isDark = true;
    }else if(!localStorage.getItem('@app-theme')){
      document.documentElement.className = "dark";
      this.isDark = true;
    localStorage.setItem('@app-theme',"dark")
    }
  }
  handleChangeColorscheme(){
    this.isDark = !this.isDark;
    if(document.documentElement.className === "dark"){
      document.documentElement.className = "light";
    localStorage.setItem('@app-theme',"light")
    }
    else if(document.documentElement.className === "light"){
      localStorage.setItem('@app-theme',"dark")
      document.documentElement.className = "dark";
    }
  }

}
