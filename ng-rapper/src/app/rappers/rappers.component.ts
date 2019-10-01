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
  rappersForm;
  rappers: Array<any>;
  constructor(private rappersService: RappersService,
    private formBuilder: FormBuilder) {

    this.rappersForm = this.formBuilder.group({
      picture: "", 
      name:"",
      age:"",
      album:"",
      single:""

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
    this.rappersService.addRappers(rappersFormData).subscribe(() => console.log('uhuuul'));
  }

  deleteRapper(id) {
    this.rappersService.deleteRapper(id).subscribe(() => console.log('uhuuul'));
  }

  updateRapper(id, rappersFormData){
    console.log(rappersFormData)
    this.rappersService.updateRapper(id, rappersFormData);
  }
}
