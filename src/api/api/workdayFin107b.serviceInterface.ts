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
import { LogDetailResponse } from '../model/logDetailResponse';

import { Configuration } from '../configuration';

export interface WorkdayFin107bServiceInterface {
  defaultHeaders: HttpHeaders;
  configuration: Configuration;

  /**
   * Initiates the creation of the ledger data CSV file for the FIN.INT107 integration
   *
   * @param beginDate
   * @param endDate
   */
  workdayFin107bFinInt107bBegin(
    beginDate: string,
    endDate: string,
    extraHttpRequestParams?: any
  ): Observable<FullSyncResponse>;

  /**
   * Initiates the creation of the ledger data CSV file for the FIN.INT107 integration
   *
   * @param beginDate
   * @param endDate
   */
  workdayFin107bGetApiWorkdayFin107b(
    beginDate: string,
    endDate: string,
    extraHttpRequestParams?: any
  ): Observable<FullSyncResponse>;

  /**
   * Displays the import log for the given date
   *
   * @param exportDate Date the export from Workday FIN.INT107 Data Radius and import into Jenzabar CX occured.
   */
  workdayFin107bGetSyncLog(exportDate: string, extraHttpRequestParams?: any): Observable<LogDetailResponse>;

  /**
   * Gets a distinct list of dates that can be used for import log information
   *
   */
  workdayFin107bGetSyncLogDates(extraHttpRequestParams?: any): Observable<LogDetailResponse>;
}