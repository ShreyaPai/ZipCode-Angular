import { Component, OnInit, Input } from '@angular/core';
import { IPincode } from 'src/app/shared/pincode.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() pincodeDetails: IPincode
  constructor() { }

  ngOnInit(): void {
    console.log('pincodeDetails :>> ', this.pincodeDetails);
  }

}
