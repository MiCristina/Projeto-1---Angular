import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Imagem } from '../models/api';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {

  imagens: any;
  erro: any;

  constructor(private apiService: ApiService) {
    this.pegarImagem();
  }

  ngOnInit(): void {
  }

  pegarImagem() {
    this.apiService.getImg().subscribe(
      (data:Imagem) => {
        this.imagens = data;
        console.log("deu bom", data);
      },
      (error:any) => {
        this.erro = error;
        console.log("nn deu bom", error);
      }
    );
  }

}
