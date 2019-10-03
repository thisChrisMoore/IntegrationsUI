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
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { FullSyncResponse } from '../model/fullSyncResponse';

import { Configuration } from '../configuration';

export interface WorkdayEmailListServiceInterface {
  defaultHeaders: HttpHeaders;
  configuration: Configuration;

  /**
   *
   *
   */
  workdayEmailListEmailListStudentBegin(extraHttpRequestParams?: any): Observable<FullSyncResponse>;

  /**
   *
   *
   */
  workdayEmailListGetApiWorkdayEmailList(extraHttpRequestParams?: any): Observable<FullSyncResponse>;
}