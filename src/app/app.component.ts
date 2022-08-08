import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private router: Router) {}
  title = 'bash-official-site';
  commandList: Array<string> = [];
  routes: Array<string> = [
    'home-component',
    'about-component',
    'information-component',
    'another-component',
  ];
  currentRoute: string = window.location.pathname;
  showingRoutes: boolean = true;
  isFolder: boolean = true;
  isError: boolean = false;
  isErrorPath: boolean = false;
  isErrorCommand: boolean = false;
  isRequested: boolean = false;
  errCommand: string = '';
  errPath: string = '';
  isHiddenExtreme: boolean = false;
  lastCommand: string = '';
  @ViewChild('myinput') emailInputElement!: ElementRef<HTMLInputElement>;
  goRoute(route: string){
    if(route === "home-component"){
      this.router.navigate(['/'])
    }else{
      this.router.navigate([route])
    }
  }
  ngOnInit() {
    if (window.location.pathname === '/') {
      this.currentRoute = '/home-component';
    }
  }
  setCommandList(sh: string) {
    if (this.isRequested === true) {
      this.isRequested = false;
    }
    if (this.commandList.length >= 1) {
      this.commandList = [];
    }
    if (this.showingRoutes === true) {
      this.showingRoutes = false;
    }
    if (this.isFolder === true) {
      this.isFolder = false;
    }
    if (this.isError === true) {
      this.isError = false;
    }
    if (this.isErrorCommand === true) {
      this.isErrorCommand = false;
      this.errCommand = ""
    }
    if (this.isErrorPath=== true) {
      this.isErrorPath = false;
      this.errPath= ""
    }
    if(sh != 'help' && sh != 'help --e' && sh != 'help --extended' && sh != 'clear' && sh != 'clear --a' && sh != 'clear --all' && sh != 'ls' && sh != 'ls --af' && sh != 'ls --asfolder' && sh != 'this.bash.gnu.restore_cleared_content' && sh != 'cd home-component' && sh != 'cd home-component/' && sh != 'cd about-component' && sh != 'cd about-component/' && sh != 'cd information-component' && sh != 'cd information-component/' && sh != 'cd another-component' && sh != 'cd another-component/'){
      this.isError = true;
      if(sh.split(' ')[0] === "cd"){
        this.isErrorPath = true;
        let errPath: string = sh.split(' ').slice(1).toString().replace(',',' ');
        this.errPath=errPath;
      }else{
        this.isErrorCommand = true;
        this.errCommand = sh;
      }
    }
    if (sh === 'help') {
      this.commandList = [
        "'clear' (--all[a])",
        "'ls' (--asfolder[af])",
        "'cd'",
        "'help' (--extended(e))",
        "'this.bash.gnu.restore_cleared_content'",
        "'this.bash.gnu.reload_page'",
      ];
    } else if (sh === 'help --extended' || sh === 'help --e') {
      this.commandList = [
        "'clear' (--all[a]) = Clear screen, --all clear the entire screen.",
        "'ls' (--asfolder[af]) = Shows the paths to navigate, --asfolder shows the paths as a folder.",
        "'cd 'path' = navigate to the 'path' value.",
        "'help' (--extended(e)) = Show the help command list, --extended shows the command list with description.",
        "'this.bash.gnu.restore_cleared_content = change the visibility of top cleared content.'",
        "'this.bash.gnu.reload_page = reload page.'",
      ];
    } else if (sh === 'clear') {
      this.isRequested = false;
      this.commandList = [];
      this.showingRoutes = false;
      this.isFolder = false;
    } else if (sh === 'clear --all' || sh === 'clear --a') {
      this.isRequested = false;
      this.isHiddenExtreme = true;
      this.commandList = [];
      this.showingRoutes = false;
      this.isFolder = false;
    } else if (sh === 'this.bash.gnu.restore_cleared_content') {
      this.isHiddenExtreme = false;
    } else if (sh === 'this.bash.gnu.reload_page') {
      window.location.reload();
    } else if (sh === 'ls') {
      this.showingRoutes = true;
      this.isFolder = false;
    } else if (sh === 'ls --asfolder' || sh === 'ls --af') {
      this.showingRoutes = true;
      this.isFolder = true;
    } else if (sh.slice(0, 2).toString() === 'cd') {
      let routePath = sh.slice(3).toString();
      if (routePath === 'home-component/') {
        this.router.navigate(['/']);
        this.currentRoute = '/home-component';
      }
      if (routePath === 'about-component/') {
        this.router.navigate(['about-component']);
        this.currentRoute = '/about-component';
      }
      if (routePath === 'information-component/') {
        this.router.navigate(['information-component']);
        this.currentRoute = '/information-component';
      }
      if (routePath === 'another-component/') {
        this.router.navigate(['another-component']);
        this.currentRoute = '/another-component';
      }
      if (this.routes.includes(routePath)) {
        if (routePath === 'home-component') {
          this.router.navigate(['/']);
          this.currentRoute = '/home-component';
        } else {
          this.router.navigate([routePath]);
          this.currentRoute = routePath;
        }
      }
    }
  }
  printList(arr: any[]) {
    return this.commandList.map((o) => o);
  }
  printRoutes(arr: any[]) {
    return this.routes.map((o) => o);
  }
  handleFocus() {
    this.emailInputElement.nativeElement.focus();
  }
  requestSomething(event: any) {
    if (event.keyCode === 13) {
      this.setCommandList(event.target.value);
      if (this.isRequested === false) {
        this.isRequested = true;
      }
      if (event.target.value != 'this.bash.gnu.reload_page') {
        this.lastCommand = event.target.value;
      }
      this.emailInputElement.nativeElement.value = '';
    }
  }
  ngAfterViewInit(): void {
    this.emailInputElement.nativeElement.focus();
  }
}
