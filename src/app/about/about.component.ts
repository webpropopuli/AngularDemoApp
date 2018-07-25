import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { MyDataService } from '../my-data.service';
import { Subscriber } from '../../../node_modules/rxjs';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  goals: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _data: MyDataService) {
      this.route.params.subscribe(res => console.log(res.id) );
      }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res);
  }

  sendToHome()  {
    this.router.navigate(['']); // ? sends to homepage
  }

}
