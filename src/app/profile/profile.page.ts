import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  // Simple user info variables
  userEmail: string = '';
  userName: string = '';
  userCourse: string = '';

  constructor(
    private navCtrl: NavController,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    // For now, use hardcoded values
    this.userEmail = 'user@email.com';
    this.userName = 'User Name';
    this.userCourse = 'Computer Science';
  }

  async editProfile() {
    const alert = await this.alertController.create({
      header: 'Edit Profile',
      cssClass: 'custom-alert', // Add a custom CSS class
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Name',
          value: this.userName,
          handler: (value) => {
            // Prevent default behavior
            return false;
          }
        },
        {
          name: 'course',
          type: 'text',
          placeholder: 'Course',
          value: this.userCourse,
          handler: (value) => {
            // Prevent default behavior
            return false;
          }
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary'
        },
        {
          text: 'Save',
          handler: (data) => {
            // Update local values
            this.userName = data.name;
            this.userCourse = data.course;
            
            // For now, just log the update
            console.log('Profile updated:', data);
          }
        }
      ]
    });

    // Custom method to prevent blurring
    await alert.present();
    const alertElement = document.querySelector('ion-alert');
    
    // Add event listeners to prevent blurring
    if (alertElement) {
      const inputs = alertElement.querySelectorAll('input');
      inputs.forEach(input => {
        input.addEventListener('blur', (event) => {
          event.stopPropagation();
          event.preventDefault();
          input.focus(); // Immediately refocus the input
        });
      });
    }
  }

  logout() {
    // Simple navigation to login page
    this.navCtrl.navigateRoot('/login');
  }
}