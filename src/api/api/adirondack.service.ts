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

import { AdirondackResponse } from '../model/adirondackResponse';
import { AdirondackVerifyResponse } from '../model/adirondackVerifyResponse';
import { LogDetailResponse } from '../model/logDetailResponse';

import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { Configuration } from '../configuration';
import { AdirondackServiceInterface } from './adirondack.serviceInterface';

@Injectable()
export class AdirondackService implements AdirondackServiceInterface {
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
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public adirondackAdirondackBegin(observe?: 'body', reportProgress?: boolean): Observable<AdirondackResponse>;
  public adirondackAdirondackBegin(
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<AdirondackResponse>>;
  public adirondackAdirondackBegin(
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<AdirondackResponse>>;
  public adirondackAdirondackBegin(observe: any = 'body', reportProgress: boolean = false): Observable<any> {
    let headers = this.defaultHeaders;

    // to determine the Accept header
    const httpHeaderAccepts: string[] = ['application/json', 'text/json', 'application/xml', 'text/xml'];
    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    return this.httpClient.get<AdirondackResponse>(`${this.configuration.basePath}/api/Adirondack/AdirondackBegin`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }

  /**
   * Displays the import log for the given date
   * @param exportDate Date the export from CX to Adirondack occured.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public adirondackGetApiAdirondack(
    exportDate: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<LogDetailResponse>;
  public adirondackGetApiAdirondack(
    exportDate: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<LogDetailResponse>>;
  public adirondackGetApiAdirondack(
    exportDate: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<LogDetailResponse>>;
  public adirondackGetApiAdirondack(
    exportDate: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (exportDate === null || exportDate === undefined) {
      throw new Error('Required parameter exportDate was null or undefined when calling adirondackGetApiAdirondack.');
    }

    let queryParameters = new HttpParams({ encoder: this.encoder });
    if (exportDate !== undefined && exportDate !== null) {
      queryParameters = queryParameters.set('exportDate', <any>exportDate);
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    const httpHeaderAccepts: string[] = ['application/json', 'text/json', 'application/xml', 'text/xml'];
    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    return this.httpClient.get<LogDetailResponse>(`${this.configuration.basePath}/api/Adirondack`, {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }

  /**
   * Displays the import log for the given date
   * @param exportDate Date the export from CX to Adirondack occured.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public adirondackGetSyncLog(
    exportDate: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<LogDetailResponse>;
  public adirondackGetSyncLog(
    exportDate: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<LogDetailResponse>>;
  public adirondackGetSyncLog(
    exportDate: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<LogDetailResponse>>;
  public adirondackGetSyncLog(
    exportDate: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (exportDate === null || exportDate === undefined) {
      throw new Error('Required parameter exportDate was null or undefined when calling adirondackGetSyncLog.');
    }

    let queryParameters = new HttpParams({ encoder: this.encoder });
    if (exportDate !== undefined && exportDate !== null) {
      queryParameters = queryParameters.set('exportDate', <any>exportDate);
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    const httpHeaderAccepts: string[] = ['application/json', 'text/json', 'application/xml', 'text/xml'];
    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    return this.httpClient.get<LogDetailResponse>(`${this.configuration.basePath}/api/Adirondack/GetSyncLog`, {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }

  /**
   * Gets a distinct list of dates that can be used for import log information
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public adirondackGetSyncLogDates(observe?: 'body', reportProgress?: boolean): Observable<LogDetailResponse>;
  public adirondackGetSyncLogDates(
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<LogDetailResponse>>;
  public adirondackGetSyncLogDates(
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<LogDetailResponse>>;
  public adirondackGetSyncLogDates(observe: any = 'body', reportProgress: boolean = false): Observable<any> {
    let headers = this.defaultHeaders;

    // to determine the Accept header
    const httpHeaderAccepts: string[] = ['application/json', 'text/json', 'application/xml', 'text/xml'];
    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    return this.httpClient.get<LogDetailResponse>(`${this.configuration.basePath}/api/Adirondack/GetSyncLogDates`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }

  /**
   * the client uploads a CSV file created by Adirondack
   * @param csvData
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public adirondackVerifyAppStatus(
    csvData: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<AdirondackVerifyResponse>;
  public adirondackVerifyAppStatus(
    csvData: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<AdirondackVerifyResponse>>;
  public adirondackVerifyAppStatus(
    csvData: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<AdirondackVerifyResponse>>;
  public adirondackVerifyAppStatus(
    csvData: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (csvData === null || csvData === undefined) {
      throw new Error('Required parameter csvData was null or undefined when calling adirondackVerifyAppStatus.');
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    const httpHeaderAccepts: string[] = ['application/json', 'text/json', 'application/xml', 'text/xml'];
    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = [
      'application/json',
      'text/json',
      'application/xml',
      'text/xml',
      'application/x-www-form-urlencoded'
    ];
    const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected !== undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }

    return this.httpClient.post<AdirondackVerifyResponse>(
      `${this.configuration.basePath}/api/Adirondack/VerifyAppStatus`,
      csvData,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   * The client uploads a CSV file created by Adironack.  The controller reads the file data and compares the housing and dining data  from the Adirondack data to CARS.    The housing and dining differences  are returned to the client to display in a grid.
   * @param csvData
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public adirondackVerifyDining(
    csvData: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<AdirondackVerifyResponse>;
  public adirondackVerifyDining(
    csvData: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<AdirondackVerifyResponse>>;
  public adirondackVerifyDining(
    csvData: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<AdirondackVerifyResponse>>;
  public adirondackVerifyDining(
    csvData: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (csvData === null || csvData === undefined) {
      throw new Error('Required parameter csvData was null or undefined when calling adirondackVerifyDining.');
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    const httpHeaderAccepts: string[] = ['application/json', 'text/json', 'application/xml', 'text/xml'];
    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = [
      'application/json',
      'text/json',
      'application/xml',
      'text/xml',
      'application/x-www-form-urlencoded'
    ];
    const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected !== undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }

    return this.httpClient.post<AdirondackVerifyResponse>(
      `${this.configuration.basePath}/api/Adirondack/VerifyDining`,
      csvData,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   * The client uploads a CSV file created by Adironack.  The controller reads the file data and compares the housing and dining data  from the Adirondack data to CARS.    The housing and dining differences  are returned to the client to display in a grid.
   * @param csvData
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public adirondackVerifyHousing(
    csvData: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<AdirondackVerifyResponse>;
  public adirondackVerifyHousing(
    csvData: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<AdirondackVerifyResponse>>;
  public adirondackVerifyHousing(
    csvData: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<AdirondackVerifyResponse>>;
  public adirondackVerifyHousing(
    csvData: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (csvData === null || csvData === undefined) {
      throw new Error('Required parameter csvData was null or undefined when calling adirondackVerifyHousing.');
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    const httpHeaderAccepts: string[] = ['application/json', 'text/json', 'application/xml', 'text/xml'];
    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = [
      'application/json',
      'text/json',
      'application/xml',
      'text/xml',
      'application/x-www-form-urlencoded'
    ];
    const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected !== undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }

    return this.httpClient.post<AdirondackVerifyResponse>(
      `${this.configuration.basePath}/api/Adirondack/VerifyHousing`,
      csvData,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }
}
