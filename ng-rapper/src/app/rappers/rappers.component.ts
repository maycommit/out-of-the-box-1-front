import { Component, OnInit } from '@angular/core';
import { RappersService } from '../rappers.service';
import { FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-rappers',
  templateUrl: './rappers.component.html',
  styleUrls: ['./rappers.component.css']
})
export class RappersComponent implements OnInit {
  name = new FormControl(''); 
  rappers: Array<any>;
  constructor(private rappersService: RappersService,
     private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.listar();
  }
  listar() {
    this.rappersService.listar().subscribe (dados => {
      this.rappers = dados
      console.log(dados)
    });
  }
  addRapper (rappersFormData){
    console.log(rappersFormData)
    this.rappersService.addRapper(rappersFormData)
  }
}
