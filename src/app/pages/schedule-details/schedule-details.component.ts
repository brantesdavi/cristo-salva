import { Component } from '@angular/core';

@Component({
  selector: 'app-schedule-details',
  templateUrl: './schedule-details.component.html',
})
export class ScheduleDetailsComponent {

  schedule = {
    idSchedule: 1,
    title: "Culto de Santa Ceia",
    date: new Date(),
    setList: [
      {
        idMusic: 1,
        title: "Grande é o Senhor",
        tom: "G",
        ref: {
          spotify: "spotify.com",
          youtube: "youtube.com"
        },
        obs: "observation we haver tod do like that"
      },
      {
        idMusic: 2,
        title: "Grande é o Senhor",
        tom: "G",
        ref: {
          spotify: "spotify.com",
          youtube: "youtube.com"
        },
        obs: "observation we haver tod do like that"
      },
    ],
    obs: "observation we haver tod do like that",
    minister: "João",
    band: {
      back: "Sandra",
      guitar: "Lucas",
      aGuitar: "João",
      drums: "Fernando",
      keys: "Davi",
      bass: "Samuel",

    },
    tags: [
      { title: "Domingo", color: "#5CD669"},
      { title: "Ceia", color: "#E8B0AF"}
    ]

  }
}
