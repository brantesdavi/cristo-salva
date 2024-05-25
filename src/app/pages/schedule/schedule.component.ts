import { Component } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
})
export class ScheduleComponent {

  listSchedule = [
    {
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

    },
    {
      idSchedule: 1,
      title: "Culto Wave",
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
      minister: "Samuel",
      band: {
        guitar: "Diego",
        aGuitar: "Samuel",
        drums: "Fernando",
        keys: "Davi",
        bass: "Lucas",

      },
      tags: [
        { title: "Wave", color: "#9D9BFF", txtColor: ""}
      ]

    }
  ]
}
