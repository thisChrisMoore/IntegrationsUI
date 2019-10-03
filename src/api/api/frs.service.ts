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

import { FrsAgreementResponse } from '../model/frsAgreementResponse';

import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { Configuration } from '../configuration';
import { FrsServiceInterface } from './frs.serviceInterface';

@Injectable()
export class FrsService implements FrsServiceInterface {
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
   * @param userId
   * @param session
   * @param year
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public frsGetApiFrs(
    userId: string,
    session: string,
    year: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<FrsAgreementResponse>;
  public frsGetApiFrs(
    userId: string,
    session: string,
    year: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<FrsAgreementResponse>>;
  public frsGetApiFrs(
    userId: string,
    session: string,
    year: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<FrsAgreementResponse>>;
  public frsGetApiFrs(
    userId: string,
    session: string,
    year: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (userId === null || userId === undefined) {
      throw new Error('Required parameter userId was null or undefined when calling frsGetApiFrs.');
    }
    if (session === null || session === undefined) {
      throw new Error('Required parameter session was null or undefined when calling frsGetApiFrs.');
    }
    if (year === null || year === undefined) {
      throw new Error('Required parameter year was null or undefined when calling frsGetApiFrs.');
    }

    let queryParameters = new HttpParams({ encoder: this.encoder });
    if (userId !== undefined && userId !== null) {
      queryParameters = queryParameters.set('userId', <any>userId);
    }
    if (session !== undefined && session !== null) {
      queryParameters = queryParameters.set('session', <any>session);
    }
    if (year !== undefined && year !== null) {
      queryParameters = queryParameters.set('year', <any>year);
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    const httpHeaderAccepts: string[] = ['application/json', 'text/json', 'application/xml', 'text/xml'];
    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    return this.httpClient.get<FrsAgreementResponse>(`${this.configuration.basePath}/api/Frs`, {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }

  /**
   * @param userId
   * @param session
   * @param year
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public frsGetFrsAgreement(
    userId: string,
    session: string,
    year: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<FrsAgreementResponse>;
  public frsGetFrsAgreement(
    userId: string,
    session: string,
    year: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<FrsAgreementResponse>>;
  public frsGetFrsAgreement(
    userId: string,
    session: string,
    year: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<FrsAgreementResponse>>;
  public frsGetFrsAgreement(
    userId: string,
    session: string,
    year: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (userId === null || userId === undefined) {
      throw new Error('Required parameter userId was null or undefined when calling frsGetFrsAgreement.');
    }
    if (session === null || session === undefined) {
      throw new Error('Required parameter session was null or undefined when calling frsGetFrsAgreement.');
    }
    if (year === null || year === undefined) {
      throw new Error('Required parameter year was null or undefined when calling frsGetFrsAgreement.');
    }

    let queryParameters = new HttpParams({ encoder: this.encoder });
    if (userId !== undefined && userId !== null) {
      queryParameters = queryParameters.set('userId', <any>userId);
    }
    if (session !== undefined && session !== null) {
      queryParameters = queryParameters.set('session', <any>session);
    }
    if (year !== undefined && year !== null) {
      queryParameters = queryParameters.set('year', <any>year);
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    const httpHeaderAccepts: string[] = ['application/json', 'text/json', 'application/xml', 'text/xml'];
    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    return this.httpClient.get<FrsAgreementResponse>(`${this.configuration.basePath}/api/Frs/GetFrsAgreement`, {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
}