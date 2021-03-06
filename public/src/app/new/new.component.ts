import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  one={title:null,price:null,url:null}
  validations:any;
  
  constructor(
    private _new: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    ){};


  ngOnInit() {

  }

  onsubmit(){
    this._new.createOneTask(this.one)
    .subscribe(data=>{
      console.log('create one:' ,data);
      if(data['errors']){
        this.validations=data;
      }else{
      this._router.navigate(['/products']);
      }
    });
  }
  

}
