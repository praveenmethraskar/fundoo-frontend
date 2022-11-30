import {ChangeDetectorRef, Component, OnInit, OnDestroy } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/services/dataService/data-service.service';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  mobileQuery: MediaQueryList;
  value: any;
  message:any;
  subscription: any;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private route: Router,private data:DataServiceService, private snackbar:MatSnackBar) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  
  ngOnInit(): void {
    this.data.searchNote.subscribe(message => this.message = message)
  }

  private _mobileQueryListener: () => void;

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  OnLogout(){
    localStorage.removeItem("token");
    this.route.navigateByUrl('/login');
    this.snackbar.open("Logout Successful",'',{duration: 3000});
  }

  refresh(): void {
    window.location.reload();
    this.snackbar.open("Refreshing",'',{duration: 3000});
}

searchTitle(event: any){
  console.log("input in search field===",event.target.value)
  this.value = event.target.value
  let Ddata={
    type: 'search',
    data:[this.value]
  }
  this.data.changeData(Ddata)
  }
}
