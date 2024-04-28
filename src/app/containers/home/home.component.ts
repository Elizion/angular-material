import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductoModel } from 'src/app/models/producto.model';
import { DummyService } from 'src/app/services/dummy.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  opened = true

  lista: ProductoModel[] = []

  constructor(private store: Store<{counter:{counter:number}}>,
              private serviceDummy: DummyService ) {
    
  }

  counterDisplay!: number

  ngOnInit(): void {    
    this.getProductos()
    this.store.select('counter').subscribe(data=>{
      this.counterDisplay = data.counter
    }) 
  }

  getProductos() {  
    setTimeout(()=> {
      this.serviceDummy.getProducts().subscribe(object => {            
        this.lista = object['products']                
      })
    }, 3000 )        
  }



}
