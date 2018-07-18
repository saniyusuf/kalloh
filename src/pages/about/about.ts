import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Camera, CameraOptions} from "@ionic-native/camera";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  myImage = '';

  constructor(
    private camera: Camera,
    public navCtrl: NavController) {

  }

  takePhoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
    this.camera.getPicture(options)
      .then((data)=> {
        this.myImage = 'data:image/jpeg;base64,' + data;
      })
  }
}
