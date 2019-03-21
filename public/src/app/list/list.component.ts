import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
lists:any=[];

  constructor(
    private _list: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    ){};


  ngOnInit() {
    this._list.getAllTask()
    .subscribe(data=>{
      console.log('get all list:',data);
      this.lists=data;
    });

  }


  deleteone(id:any){
    this._list.deleteOneTask(id)
    .subscribe(data=>{
      console.log('delete one:',data);
      this.ngOnInit();
    });
  }


}
