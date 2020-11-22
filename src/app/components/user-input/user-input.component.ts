import { Component, OnInit, Input } from '@angular/core';
import { PincodeService } from 'src/app/shared/pincode.service';
import { IPincode } from 'src/app/shared/pincode.interface';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css'],
})
export class UserInputComponent implements OnInit {
  @Input() activeCountry: string;
  public userInput: number;
  public pincodeDetails: IPincode[] = [];
  pincodeEntered: boolean;
  public showError: string;
  isZipcodeInvalid: boolean = false;
  constructor(private pincodeService: PincodeService) {}

  ngOnInit(): void {}

  getDetailsOnPincode(pincode: number) {
    this.pincodeEntered = false;
    this.pincodeDetails = [];
    console.log('activeCountry :>> ', this.activeCountry);
    this.pincodeService
      .getCityPincode(this.activeCountry, pincode)
      .subscribe((response) => {
        if (this.activeCountry === 'India') {
          response.forEach((element) => {
            if(element && element.PostOffice !== null) {
              element.PostOffice.filter((data) => {
                this.pincodeDetails.push({
                  pincode: pincode,
                  location: data.Name,
                  city: data.District,
                  state: data.State,
                  country: data.Country,
                });
              });
            } else {
              this.showErrorPopup();
            }
        });
      }else if (this.activeCountry === 'USA') {
          if(this.isEmpty(response) || response === undefined || (response.Error && response.Error !== '')) {
            this.showErrorPopup();
          } else {
            console.log('response :>> ', response);
            this.pincodeDetails.push({
              pincode: response.ZipCode,
              city: response.City,
              state: response.State,
              country: response.County,
            });
          }
        } else if (this.activeCountry === 'UK') {
          console.log('response :>> ', response);
          const result = response.result;
          this.pincodeDetails.push({
            pincode: pincode,
            city: result.primary_care_trust,
            state: result.region,
            country: result.country,
          });
        }
        this.pincodeEntered = true;
      }, (error) => {
        this.showErrorPopup();
      });
  }

  showErrorPopup() {
      this.isZipcodeInvalid = true;
      this.showError = 'Please enter a valid Zipcode';
  }

  public isEmpty(response) {
    for(let key in response) {
        if(response.hasOwnProperty(key))
            return false;
    }
    return true;
}
}
