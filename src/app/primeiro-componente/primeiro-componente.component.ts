import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primeiro-componente',
  templateUrl: './primeiro-componente.component.html',
  styleUrls: ['./primeiro-componente.component.scss']
})
export class PrimeiroComponenteComponent implements OnInit {

  nome: string;
  constructor() { }

  ngOnInit(): void {
    // this.nome = 'Michelli';
  }

  passarValor(nomeOutro: string) {
    this.nome = nomeOutro;
  }

}
