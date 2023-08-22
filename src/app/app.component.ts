import { Component } from '@angular/core';
import { SwaggerService } from './app/src/app/api/services';
import { Swagger } from './app/src/app/api/models';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public swagger: Swagger;
  public constructor(private api: SwaggerService){
    this.swagger = {};
    this.api.apiSwaggerGet$Json({Id: 2}).subscribe(res => {
      this.swagger = res;
    })
  }
}
