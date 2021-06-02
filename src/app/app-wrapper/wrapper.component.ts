import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {

  alreadyToggled = false
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  @ViewChild('drawer', { static: false }) matDrawer!: MatSidenav;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private $route: ActivatedRoute,
    private $router: Router
  ) { }

  ngOnInit(): void {
    this.$router.events.subscribe(data => {
      if (data instanceof (NavigationEnd)) {
        if (this.matDrawer.opened) {
          this.matDrawer.toggle();
        }
      }
    })
  }

}
