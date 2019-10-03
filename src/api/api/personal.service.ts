/**
 * UF.DataAccess.API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: V1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpEvent, HttpParameterCodec } from '@angular/common/http';
import { CustomHttpParameterCodec } from '../encoder';
import { Observable } from 'rxjs';

import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { Configuration } from '../configuration';
import { PersonalServiceInterface } from './personal.serviceInterface';

@Injectable()
export class PersonalService implements PersonalServiceInterface {
  protected basePath = 'http://localhost:8080';
  public defaultHeaders = new HttpHeaders();
  public configuration = new Configuration();
  public encoder: HttpParameterCodec;

  constructor(
    protected httpClient: HttpClient,
    @Optional() @Inject(BASE_PATH) basePath: string,
    @Optional() configuration: Configuration
  ) {
    if (configuration) {
      this.configuration = configuration;
      this.configuration.basePath = configuration.basePath || basePath || this.basePath;
    } else {
      this.configuration.basePath = basePath || this.basePath;
    }
    this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
  }

  /**
   * Retrieves information needed to populate the Personal Information view in the MyProfile application.  Can also be used when personal information such as addresses, personal contact and emergency contacts information is needed.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public personalGet(observe?: 'body', reportProgress?: boolean): Observable<object>;
  public personalGet(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<object>>;
  public personalGet(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<object>>;
  public personalGet(observe: any = 'body', reportProgress: boolean = false): Observable<any> {
    let headers = this.defaultHeaders;

    // to determine the Accept header
    const httpHeaderAccepts: string[] = ['application/json', 'text/json', 'application/xml', 'text/xml'];
    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    return this.httpClient.get<object>(`${this.configuration.basePath}/api/Personal/Get`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }

  /**
   * Retrieves information needed to populate the Personal Information view in the MyProfile application.  Can also be used when personal information such as addresses, personal contact and emergency contacts information is needed.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public personalGetApiPersonal(observe?: 'body', reportProgress?: boolean): Observable<object>;
  public personalGetApiPersonal(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<object>>;
  public personalGetApiPersonal(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<object>>;
  public personalGetApiPersonal(observe: any = 'body', reportProgress: boolean = false): Observable<any> {
    let headers = this.defaultHeaders;

    // to determine the Accept header
    const httpHeaderAccepts: string[] = ['application/json', 'text/json', 'application/xml', 'text/xml'];
    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    return this.httpClient.get<object>(`${this.configuration.basePath}/api/Personal`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
}