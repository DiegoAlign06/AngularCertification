import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls:['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy{
  isAuthenticated = false;
  private userSub:Subscription;
  
  constructor(private dataStorageService:DataStorageService,
              private authService:AuthService,){}

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user =>{
      // this.isAuthenticated = !user ? false : true;
      this.isAuthenticated = !!user;
      console.log(!user);
      console.log(!!user);
    });
  }            
  onSaveData(){
    this.dataStorageService.storeRecipes()
  }
  onlogout(){
    this.authService.logout();
  }


  onFetchData(){
    this.dataStorageService.fetchRecipes().subscribe();
  }
  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
