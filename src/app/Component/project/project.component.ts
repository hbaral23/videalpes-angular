import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from '../../../Service/auth-service.service';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {


  constructor(private authSerice: AuthServiceService) { }

  ngOnInit() {
    this.authSerice.removeToken();
  }

}
