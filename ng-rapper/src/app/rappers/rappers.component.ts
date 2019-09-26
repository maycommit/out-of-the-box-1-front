import { Component, OnInit } from '@angular/core';
import { RappersService } from '../rappers.service';

@Component({
  selector: 'app-rappers',
  templateUrl: './rappers.component.html',
  styleUrls: ['./rappers.component.css']
})
export class RappersComponent implements OnInit {

  rappers: Array<any>;
  constructor(private rappersService: RappersService) { }

  ngOnInit() {
    this.listar();
  }
  listar() {
    this.rappersService.listar().subscribe (dados => {
      this.rappers = dados
      console.log(dados)
    });
  }
}
