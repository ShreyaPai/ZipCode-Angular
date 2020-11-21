import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PincodeService {
  private IndiaUrl = 'http://api.postalpincode.in/pincode';
  private UsaUrl = 'https://api.zip-codes.com/ZipCodesAPI.svc/1.0/QuickGetZipCodeDetails';
  private ukUrl = 'https://api.postcodes.io/postcodes'
  constructor(private http: HttpClient) { }

  public getCityPincode(country: string, pincode: number): Observable<any> {
    let url = '';
    if(country === 'India') {
        url = `${this.IndiaUrl}/${pincode}`;

    } else if(country === 'USA') {
        url = `${this.UsaUrl}/${pincode}?key=DEMOAPIKEY`;
    } else if(country === 'UK') {
        url = `${this.ukUrl}/${pincode}`;
    }
    console.log('url :>> ', url);
    return this.http.get<any>(url);
  }
}
