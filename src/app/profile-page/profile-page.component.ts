import { Component, OnInit } from '@angular/core';
import { RegistrationServiceService } from '../registration-page/registration-service.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  constructor(private registerationService: RegistrationServiceService) { }

  profile: any = {};

  ngOnInit(): void {
    this.getProfileData();
  }

  getProfileData() {
    this.registerationService.getProfile()
    .subscribe((response) => {
      this.profile = response;
    })
  }

}
