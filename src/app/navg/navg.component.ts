import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {UserService} from '../sevices/user.service';
import { Router } from '@angular/router';
import { AmazingTimePickerService } from 'amazing-time-picker';

import $ from "jquery";
import { SearchService } from '../sevices/search.service';
import { _getOptionScrollPosition } from '@angular/material/core';
import { IgxGridToolbarComponent } from 'igniteui-angular/lib/grids/grid-toolbar.component';
@Component({
  selector: 'app-navg',
  templateUrl: './navg.component.html',
  styleUrls: ['./navg.component.css']
})
export class NavgComponent implements OnInit {
  searchsub:FormGroup;
  constructor( private formBuilder: FormBuilder,
               private searchService: SearchService,
               private router: Router,
               private atp: AmazingTimePickerService) { }

  ngOnInit() {
    this.searchsub=this.formBuilder.group({
      name:[],
      start:[],
      end:[]
    });

  }
    submit() {
  
    this.searchService.passdata(this.searchsub.value["name"],this.searchsub.value["start"],
                                this.searchsub.value["end"]);
    
    this.router.navigate(['/profile']);
}

}