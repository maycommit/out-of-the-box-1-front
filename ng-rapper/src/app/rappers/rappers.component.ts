import { Component, OnInit } from '@angular/core';
import { RappersService } from '../rappers.service';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { Rapper } from '../rapper';

@Component({
  selector: 'app-rappers',
  templateUrl: './rappers.component.html',
  styleUrls: ['./rappers.component.css']
})
export class RappersComponent implements OnInit {
  name = new FormControl(''); 
  rappers: Array<any>;
  constructor(private rappersService: RappersService,
    private formBuilder: FormBuilder) {

    this.formBuilder.group({
    })
   }

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
    console.log(rappersFormData);
    this.rappersService.addRapper(rappersFormData)
  }

  deleteRapper(id, rappersFormData) {
    console.log(rappersFormData);
    this.rappersService.deleteRapper(rappersFormData);
  }

  updateRapper(id, rappersFormData){
    console.log(rappersFormData)
    this.rappersService.updateRapper(id, rappersFormData);
  }
}
