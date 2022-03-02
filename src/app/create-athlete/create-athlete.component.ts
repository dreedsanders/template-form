import { Component, OnInit } from '@angular/core';
import { Athlete } from '../model/athlete';

@Component({
  selector: 'app-create-athlete',
  templateUrl: './create-athlete.component.html',
  styleUrls: ['./create-athlete.component.css']
})
export class CreateAthleteComponent implements OnInit {

  public athlete!: Athlete;
  public confirmed = false;
  public teams = ["Ice Bats", "Mavericks", "Cowboys", "Austin FC"]

  constructor(
  ) {
    this.athlete = new Athlete("", "", "");
  }

  createAthlete(data: { valid: any; }) {
    console.log("Athlete Form ", data);
    if (data) {
      console.log("creating athlete ", this.athlete);
    } else {
      console.error("Athlete form is in invalid state");
    }
  }

  ngOnInit(): void {
  }

}
