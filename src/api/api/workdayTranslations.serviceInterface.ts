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

import { CxTranslation } from '../model/cxTranslation';
import { LogDetailResponse } from '../model/logDetailResponse';
import { TranslationResponse } from '../model/translationResponse';

import { Configuration } from '../configuration';

export interface WorkdayTranslationsServiceInterface {
  defaultHeaders: HttpHeaders;
  configuration: Configuration;

  /**
   * Retrieves the current list of translations for the Workday integration
   *
   * @param module
   */
  workdayTranslationsGetApiWorkdayTranslations(
    module: string,
    extraHttpRequestParams?: any
  ): Observable<TranslationResponse>;

  /**
   * Gets a distinct list of dates that can be used for import log information
   *
   */
  workdayTranslationsGetSyncLogDates(extraHttpRequestParams?: any): Observable<LogDetailResponse>;

  /**
   * Displays the import translation errors log for the given date
   *
   * @param exportDate
   */
  workdayTranslationsGetSyncTranslationLog(
    exportDate: string,
    extraHttpRequestParams?: any
  ): Observable<LogDetailResponse>;

  /**
   * Retrieves the current list of translations for the Workday integration
   *
   * @param module
   */
  workdayTranslationsGetTranslations(module: string, extraHttpRequestParams?: any): Observable<TranslationResponse>;

  /**
   * Creates a new Translation in the CX database
   *
   * @param module
   * @param tItem The translation object to create in Jenzabar CX
   */
  workdayTranslationsPostApiWorkdayTranslations(
    module: string,
    tItem: CxTranslation,
    extraHttpRequestParams?: any
  ): Observable<TranslationResponse>;

  /**
   * Creates a new Translation in the CX database
   *
   * @param module
   * @param tItem The translation object to create in Jenzabar CX
   */
  workdayTranslationsPostTranslation(
    module: string,
    tItem: CxTranslation,
    extraHttpRequestParams?: any
  ): Observable<TranslationResponse>;

  /**
   * Retrieves the suspended item using the passed in ID from the Suspended Items DB and creates the new adm record and updates the remaining records in the Jenzabar CX database
   *
   * @param module
   * @param tItem The translation object to update in Jenzabar CX
   */
  workdayTranslationsPutApiWorkdayTranslations(
    module: string,
    tItem: CxTranslation,
    extraHttpRequestParams?: any
  ): Observable<TranslationResponse>;

  /**
   * Retrieves the suspended item using the passed in ID from the Suspended Items DB and creates the new adm record and updates the remaining records in the Jenzabar CX database
   *
   * @param module
   * @param tItem The translation object to update in Jenzabar CX
   */
  workdayTranslationsPutTranslation(
    module: string,
    tItem: CxTranslation,
    extraHttpRequestParams?: any
  ): Observable<TranslationResponse>;
}