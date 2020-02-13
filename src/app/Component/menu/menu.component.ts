import { Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { AuthServiceService } from 'src/Service/auth-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {
menuItems = [
  {title: "Votes", icon: "how_to_vote", url: "/dashboard"},
  {title: "Projet", icon: "perm_media", url: "/listproject"},
  {title: "Prix", icon: "stars", url: "/award"}, 
  {title: "Types", icon: "theaters", url: "/types"},
  {title: "QRCode", icon: "select_all", url: "/generateqrcode"}];

  constructor(media: MediaMatcher, private authService: AuthServiceService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
  }

  ngOnInit() {
  }

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;


  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  logout(){
    this.authService.logout();
  }
}
