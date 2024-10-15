import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent implements OnInit {
  mostrarLogin: boolean = false;

  constructor(private route: Router) {}

  ngOnInit(): void {
      this.route.events.subscribe(event => {
        if(event instanceof NavigationEnd){
          this.mostrarLogin = this.route.url === '/';
        }
      })
  }
}
