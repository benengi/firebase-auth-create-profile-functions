import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public userProfile:FirebaseObjectObservable<any>;
  public userId:string;

  constructor(public navCtrl: NavController, public afDatabase: AngularFireDatabase, 
  public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe( user => {
      if (user) {
        this.userProfile = this.afDatabase.object(`userProfile/${user.uid}/`);
      } else {
        this.userProfile = null;
      }
    });
  }

}
