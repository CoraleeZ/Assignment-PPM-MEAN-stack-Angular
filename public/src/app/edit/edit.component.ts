import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  ID='';
  one:any={title:null,price:null,url:null};
  right:number;
  errors:any;
  validations:any;


  constructor(
    private _edit: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    ){};

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
      this.ID=params['id'];

      this._edit.getOneTask(this.ID)
      .subscribe(data=>{
        console.log('get one:',data);
        if(data['name']=="CastError"){
          this.right=0;
          this.errors=data;

        }else{
          this.one=data[0];
          this.right=1;
        }
     });
    
    });  
  };

  onedit(){
    this._edit.updateOneTask(this.ID,this.one)
    .subscribe(data=>{
      console.log('update one:',data);
      if(data['errors']){
        this.validations=data;
      }else{
        this._router.navigate(['/products']);
      }
    })

  };

  deleteone(){
    this._edit.deleteOneTask(this.ID)
    .subscribe(data=>{
      console.log('delete one:',data);
      this._router.navigate(['/products']);
    });
  };

}
