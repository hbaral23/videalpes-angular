import { Component } from '@angular/core';
import { NavigationEnd, Router, Event } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';

class sidebarItem {
  title: string;
  icon: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
title = 'videaples-angular';
private mobileQuery: MediaQueryList;
private _mobileQueryListener: () => void;
displaymenu = false;
menuItems = [{title: "Projet", icon: "perm_media", url: "/project"}, {title: "Utilisateur", icon: "supervised_user_circle", url: "/user"}, {title: "Votes", icon: "how_to_vote", url: "/vote"}, {title: "Prix", icon: "stars", url: "/award"},]
    constructor(private router: Router, media: MediaMatcher) {
      this.router.events.subscribe((event: Event) => {
        if (event instanceof NavigationEnd) {
          if (event.url === '/login') {
            this.displaymenu = false;
          } else {
            this.displaymenu = true;
          }
        }
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
      });
          }
        
        ngOnInit() {
        }
        
        ngOnDestroy(): void {
          this.mobileQuery.removeListener(this._mobileQueryListener);
        }

        changePage(url) {
          this.router.navigate([url]);
        }

        onActivate(event) {
          window.scroll(0,0);
      }
}
