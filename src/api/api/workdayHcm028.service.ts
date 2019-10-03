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

import { Csv028Model } from '../model/csv028Model';
import { FullSyncResponse } from '../model/fullSyncResponse';
import { LogDetailResponse } from '../model/logDetailResponse';
import { SuspendedItemResponse } from '../model/suspendedItemResponse';

import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { Configuration } from '../configuration';
import { WorkdayHcm028ServiceInterface } from './workdayHcm028.serviceInterface';

@Injectable()
export class WorkdayHcm028Service implements WorkdayHcm028ServiceInterface {
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
   * Delete the suspended item using the passed in ID from the Suspended Items DB
   * @param suspendedItemId Suspended Item IDs to delete
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public workdayHcm028DeleteSuspendedItem(
    suspendedItemId: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<SuspendedItemResponse>;
  public workdayHcm028DeleteSuspendedItem(
    suspendedItemId: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<SuspendedItemResponse>>;
  public workdayHcm028DeleteSuspendedItem(
    suspendedItemId: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<SuspendedItemResponse>>;
  public workdayHcm028DeleteSuspendedItem(
    suspendedItemId: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (suspendedItemId === null || suspendedItemId === undefined) {
      throw new Error(
        'Required parameter suspendedItemId was null or undefined when calling workdayHcm028DeleteSuspendedItem.'
      );
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

    return this.httpClient.post<SuspendedItemResponse>(
      `${this.configuration.basePath}/api/WorkdayHcm028/DeleteSuspendedItem`,
      suspendedItemId,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   * Delete the suspended item using the passed in ID from the Suspended Items DB
   * @param suspendedItems List of Suspended Item IDs to delete
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public workdayHcm028DeleteSuspendedSelected(
    suspendedItems: Array<string>,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<SuspendedItemResponse>;
  public workdayHcm028DeleteSuspendedSelected(
    suspendedItems: Array<string>,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<SuspendedItemResponse>>;
  public workdayHcm028DeleteSuspendedSelected(
    suspendedItems: Array<string>,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<SuspendedItemResponse>>;
  public workdayHcm028DeleteSuspendedSelected(
    suspendedItems: Array<string>,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (suspendedItems === null || suspendedItems === undefined) {
      throw new Error(
        'Required parameter suspendedItems was null or undefined when calling workdayHcm028DeleteSuspendedSelected.'
      );
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

    return this.httpClient.post<SuspendedItemResponse>(
      `${this.configuration.basePath}/api/WorkdayHcm028/DeleteSuspendedSelected`,
      suspendedItems,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   * Displays the import log for the given date
   * @param exportDate Date the export from Workday HCM.INT008 Data Radius and import into Jenzabar CX occured.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public workdayHcm028GetApiWorkdayHcm028(
    exportDate: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<LogDetailResponse>;
  public workdayHcm028GetApiWorkdayHcm028(
    exportDate: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<LogDetailResponse>>;
  public workdayHcm028GetApiWorkdayHcm028(
    exportDate: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<LogDetailResponse>>;
  public workdayHcm028GetApiWorkdayHcm028(
    exportDate: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (exportDate === null || exportDate === undefined) {
      throw new Error(
        'Required parameter exportDate was null or undefined when calling workdayHcm028GetApiWorkdayHcm028.'
      );
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

    return this.httpClient.get<LogDetailResponse>(`${this.configuration.basePath}/api/WorkdayHcm028`, {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }

  /**
   * Retrieves items that were suspended during the import
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public workdayHcm028GetSuspendedItems(observe?: 'body', reportProgress?: boolean): Observable<SuspendedItemResponse>;
  public workdayHcm028GetSuspendedItems(
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<SuspendedItemResponse>>;
  public workdayHcm028GetSuspendedItems(
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<SuspendedItemResponse>>;
  public workdayHcm028GetSuspendedItems(observe: any = 'body', reportProgress: boolean = false): Observable<any> {
    let headers = this.defaultHeaders;

    // to determine the Accept header
    const httpHeaderAccepts: string[] = ['application/json', 'text/json', 'application/xml', 'text/xml'];
    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    return this.httpClient.get<SuspendedItemResponse>(
      `${this.configuration.basePath}/api/WorkdayHcm028/GetSuspendedItems`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   * Displays the import log for the given date
   * @param exportDate Date the export from Workday HCM.INT008 Data Radius and import into Jenzabar CX occured.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public workdayHcm028GetSyncLog(
    exportDate: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<LogDetailResponse>;
  public workdayHcm028GetSyncLog(
    exportDate: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<LogDetailResponse>>;
  public workdayHcm028GetSyncLog(
    exportDate: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<LogDetailResponse>>;
  public workdayHcm028GetSyncLog(
    exportDate: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (exportDate === null || exportDate === undefined) {
      throw new Error('Required parameter exportDate was null or undefined when calling workdayHcm028GetSyncLog.');
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

    return this.httpClient.get<LogDetailResponse>(`${this.configuration.basePath}/api/WorkdayHcm028/GetSyncLog`, {
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
  public workdayHcm028GetSyncLogDates(observe?: 'body', reportProgress?: boolean): Observable<LogDetailResponse>;
  public workdayHcm028GetSyncLogDates(
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<LogDetailResponse>>;
  public workdayHcm028GetSyncLogDates(
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<LogDetailResponse>>;
  public workdayHcm028GetSyncLogDates(observe: any = 'body', reportProgress: boolean = false): Observable<any> {
    let headers = this.defaultHeaders;

    // to determine the Accept header
    const httpHeaderAccepts: string[] = ['application/json', 'text/json', 'application/xml', 'text/xml'];
    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    return this.httpClient.get<LogDetailResponse>(`${this.configuration.basePath}/api/WorkdayHcm028/GetSyncLogDates`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }

  /**
   * Initiates the removal of rescinds from CX via a CSV file dropped by Workday for the HCM.INT028 integration
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public workdayHcm028HcmInt028Begin(observe?: 'body', reportProgress?: boolean): Observable<FullSyncResponse>;
  public workdayHcm028HcmInt028Begin(
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<FullSyncResponse>>;
  public workdayHcm028HcmInt028Begin(
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<FullSyncResponse>>;
  public workdayHcm028HcmInt028Begin(observe: any = 'body', reportProgress: boolean = false): Observable<any> {
    let headers = this.defaultHeaders;

    // to determine the Accept header
    const httpHeaderAccepts: string[] = ['application/json', 'text/json', 'application/xml', 'text/xml'];
    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    return this.httpClient.get<FullSyncResponse>(`${this.configuration.basePath}/api/WorkdayHcm028/HcmInt028Begin`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }

  /**
   * Processes the Workday HCM.INT028 Rescinds Data Radius data and updates the Jenzabar CX database
   * @param csv028Items Serialized Csv004 objects containing Workday data to import into Jenzabar CX
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public workdayHcm028Post(
    csv028Items: Array<Csv028Model>,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<object>;
  public workdayHcm028Post(
    csv028Items: Array<Csv028Model>,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<object>>;
  public workdayHcm028Post(
    csv028Items: Array<Csv028Model>,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<object>>;
  public workdayHcm028Post(
    csv028Items: Array<Csv028Model>,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (csv028Items === null || csv028Items === undefined) {
      throw new Error('Required parameter csv028Items was null or undefined when calling workdayHcm028Post.');
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

    return this.httpClient.post<object>(`${this.configuration.basePath}/api/WorkdayHcm028/Post`, csv028Items, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }

  /**
   * Retrieves the suspended item using the passed in ID from the Suspended Items DB and creates new records the Jenzabar CX database
   * @param suspendedItemId ID of the suspended item to process as a new item in Jenzabar CX
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public workdayHcm028PostSuspendedItem(
    suspendedItemId: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<SuspendedItemResponse>;
  public workdayHcm028PostSuspendedItem(
    suspendedItemId: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<SuspendedItemResponse>>;
  public workdayHcm028PostSuspendedItem(
    suspendedItemId: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<SuspendedItemResponse>>;
  public workdayHcm028PostSuspendedItem(
    suspendedItemId: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (suspendedItemId === null || suspendedItemId === undefined) {
      throw new Error(
        'Required parameter suspendedItemId was null or undefined when calling workdayHcm028PostSuspendedItem.'
      );
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

    return this.httpClient.post<SuspendedItemResponse>(
      `${this.configuration.basePath}/api/WorkdayHcm028/PostSuspendedItem`,
      suspendedItemId,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   * Retrieves the suspended item using the passed in ID from the Suspended Items DB and creates the new adm record and updates the remaining records in the Jenzabar CX database
   * @param suspendedItemId ID of the suspended item to process as an update in Jenzabar CX
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public workdayHcm028PutApiWorkdayHcm028(
    suspendedItemId: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<SuspendedItemResponse>;
  public workdayHcm028PutApiWorkdayHcm028(
    suspendedItemId: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<SuspendedItemResponse>>;
  public workdayHcm028PutApiWorkdayHcm028(
    suspendedItemId: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<SuspendedItemResponse>>;
  public workdayHcm028PutApiWorkdayHcm028(
    suspendedItemId: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (suspendedItemId === null || suspendedItemId === undefined) {
      throw new Error(
        'Required parameter suspendedItemId was null or undefined when calling workdayHcm028PutApiWorkdayHcm028.'
      );
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

    return this.httpClient.put<SuspendedItemResponse>(
      `${this.configuration.basePath}/api/WorkdayHcm028`,
      suspendedItemId,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   * Retrieves the suspended item using the passed in ID from the Suspended Items DB and creates the new adm record and updates the remaining records in the Jenzabar CX database
   * @param suspendedItemId ID of the suspended item to process as an update in Jenzabar CX
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public workdayHcm028PutSuspendedItem(
    suspendedItemId: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<SuspendedItemResponse>;
  public workdayHcm028PutSuspendedItem(
    suspendedItemId: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<SuspendedItemResponse>>;
  public workdayHcm028PutSuspendedItem(
    suspendedItemId: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<SuspendedItemResponse>>;
  public workdayHcm028PutSuspendedItem(
    suspendedItemId: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (suspendedItemId === null || suspendedItemId === undefined) {
      throw new Error(
        'Required parameter suspendedItemId was null or undefined when calling workdayHcm028PutSuspendedItem.'
      );
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

    return this.httpClient.put<SuspendedItemResponse>(
      `${this.configuration.basePath}/api/WorkdayHcm028/PutSuspendedItem`,
      suspendedItemId,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }
}