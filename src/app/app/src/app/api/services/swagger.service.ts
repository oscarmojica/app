/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';

import { Swagger } from '../models/swagger';

@Injectable({ providedIn: 'root' })
export class SwaggerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiSwaggerGet()` */
  static readonly ApiSwaggerGetPath = '/api/Swagger';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSwaggerGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSwaggerGet$Plain$Response(
    params?: {
      Id?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Swagger>> {
    const rb = new RequestBuilder(this.rootUrl, SwaggerService.ApiSwaggerGetPath, 'get');
    if (params) {
      rb.query('Id', params.Id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Swagger>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSwaggerGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSwaggerGet$Plain(
    params?: {
      Id?: number;
    },
    context?: HttpContext
  ): Observable<Swagger> {
    return this.apiSwaggerGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Swagger>): Swagger => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSwaggerGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSwaggerGet$Json$Response(
    params?: {
      Id?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Swagger>> {
    const rb = new RequestBuilder(this.rootUrl, SwaggerService.ApiSwaggerGetPath, 'get');
    if (params) {
      rb.query('Id', params.Id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Swagger>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSwaggerGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSwaggerGet$Json(
    params?: {
      Id?: number;
    },
    context?: HttpContext
  ): Observable<Swagger> {
    return this.apiSwaggerGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Swagger>): Swagger => r.body)
    );
  }

}
