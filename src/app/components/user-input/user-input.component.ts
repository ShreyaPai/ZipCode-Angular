import { Component, OnInit, Input } from '@angular/core';
import { PincodeService } from 'src/app/shared/pincode.service';
import { IPincode } from 'src/app/shared/pincode.interface';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {
  @Input() activeCountry: string;
  public userInput: number;
  public pincodeDetails: IPincode[] = [];
  pincodeEntered: boolean;
  constructor(private pincodeService: PincodeService) { }

  ngOnInit(): void {
  }

  getDetailsOnPincode(pincode: number) {
    this.pincodeEntered = false;
    console.log('activeCountry :>> ', this.activeCountry);
    this.pincodeService.getCityPincode(this.activeCountry, pincode).subscribe(response => {
      this.pincodeDetails = [];
      if(this.activeCountry === 'India') {
        let requredData;
        requredData = response.forEach(element => {
          element.PostOffice.filter(data => {
            this.pincodeDetails.push({
              'pincode': pincode,
              'location': data.Name,
              'city': data.District,
              'state': data.State,
              'country': data.Country
            });
          });
        });
      } else if(this.activeCountry === 'USA') {
        console.log('response :>> ', response);
        this.pincodeDetails.push({
          'pincode': pincode,
          'city': response.City,
          'state': response.State,
          'country': response.County
        })
      } else if (this.activeCountry === 'UK') {
        console.log('response :>> ', response)
        const result = response.result;
        console.log('result :>> ', result);
        this.pincodeDetails.push({
          'pincode': pincode,
          'city': result.primary_care_trust,
          'state': result.region,
          'country': result.country
        });
      }
    });
    this.pincodeEntered = true;
  }
}
