import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RegistrationServiceService } from './registration-service.service';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {

  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    bio: new FormControl('')
  });

  constructor(private registerService: RegistrationServiceService) { }

  ngOnInit(): void {
  }

  submitUser() {
    
    this.registerService.registerUser(this.profileForm.value).subscribe((response) => {
      console.log("Response " + response)
      sessionStorage.setItem("isLoggedIn", "true")
    })
  }

}
