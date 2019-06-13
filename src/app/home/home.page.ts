import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  perfis = [];

  constructor() {
    this.perfis = [
      {
        'avatar':'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/CandymyloveYasu.png/220px-CandymyloveYasu.png',
        'nome':'Julia',
        'idade':20,
        'likes':0
      },
      {
        'avatar':'http://apollo2.dl.playstation.net/cdn/UP1023/PCSE00398_00/vrlbRVO3EewOy4lyiASZeKApFoA8ex1j.png',
        'nome':'Danny',
        'idade':19,
        'likes':0
      }
    ]
  }

  likes(perfis) {
    perfis.likes = perfis.likes + 1;
  }

}
