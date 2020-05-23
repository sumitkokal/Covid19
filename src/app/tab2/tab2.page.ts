import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public StateUpdate: object[] = [];
  public showDetailsFlag = true;
  public getheader: string[] = [];

  constructor(private covidservice: ApiService) {
    this.getCovidUpdates();
  }

  getCovidUpdates() {
    this.covidservice.getUpdates().subscribe((response) => {
      if (response) {
        this.StateUpdate = Array.of(response)
        this.getheader = Object.keys(response);
      }
    })
  }

  showDetails = () => {
    this.showDetailsFlag = !this.showDetailsFlag;
  }
}
