import { Component, OnInit } from '@angular/core';
import { RappersService } from '../rappers.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-rappers',
  templateUrl: './rappers.component.html',
  styleUrls: ['./rappers.component.css']
})
export class RappersComponent implements OnInit {
  name = new FormControl(''); 
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
  addRapper (){
    this.name.value('rappers')
  }
}
