import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs'
import { LoginPage } from '../login/login';
import {AuthService } from '../../providers/auth-service/auth-service'

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  responseData : any;
  userData = {"username": "","password": "","name": "","email": ""};

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signup(){
    this.authService.postData(this.userData, 'signup').then((result) =>{
    this.responseData = result;
    if(this.responseData.userData){
    console.log(this.responseData);
    localStorage.setItem('userData', JSON.stringify(this.responseData) );
    this.navCtrl.push(TabsPage);
    }
    else{console.log("User already exists");}
  }, (err) =>{
    //Error log
  });
}
 login(){
  this.navCtrl.push(LoginPage);
}
}
