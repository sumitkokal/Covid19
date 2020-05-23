import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public MaharashtraUpdate: string[] = [];
  public showDetailsFlag = true;
  public getheader: string[] = [];

  constructor(private covidservice: ApiService) {
    this.getCovidUpdates();
  }

  getCovidUpdates() {
    this.covidservice.getUpdates().subscribe((response) => {
      if (response) {
        this.MaharashtraUpdate = Array.of(response["Maharashtra"]["districtData"])
        this.getheader = Object.keys(response["Maharashtra"]["districtData"]);
      }
    })
  }

  showDetails = () => {
    this.showDetailsFlag = !this.showDetailsFlag;
  }
}
