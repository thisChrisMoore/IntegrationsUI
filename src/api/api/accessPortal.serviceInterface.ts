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
import { PersonalResponse } from '../model/personalResponse';
import { SuspendedItemResponse } from '../model/suspendedItemResponse';

import { Configuration } from '../configuration';

export interface AccessPortalServiceInterface {
  defaultHeaders: HttpHeaders;
  configuration: Configuration;

  /**
   * Delete the suspended item using the passed in ID from the Suspended Items DB
   *
   * @param suspendedItemId Suspended Item IDs to delete
   */
  accessPortalDeleteSuspendedItem(
    suspendedItemId: string,
    extraHttpRequestParams?: any
  ): Observable<SuspendedItemResponse>;

  /**
   * Displays the import log for the given date
   *
   * @param exportDate Date the export from AccessPortal and import into Jenzabar CX occured.
   */
  accessPortalGetApiAccessPortal(exportDate: string, extraHttpRequestParams?: any): Observable<LogDetailResponse>;

  /**
   * Retrieves details regarding the employees
   *
   * @param contactId Cx ID of the contact to retrieve information for
   */
  accessPortalGetContactDetail(contactId: string, extraHttpRequestParams?: any): Observable<PersonalResponse>;

  /**
   * Initiates an import of AccessPortal data into Jenzabar CX
   *
   */
  accessPortalGetFullSync(extraHttpRequestParams?: any): Observable<FullSyncResponse>;

  /**
   * Retrieves items that were suspended during the import
   *
   */
  accessPortalGetSuspendedItems(extraHttpRequestParams?: any): Observable<SuspendedItemResponse>;

  /**
   * Displays the import log for the given date
   *
   * @param exportDate Date the export from AccessPortal and import into Jenzabar CX occured.
   */
  accessPortalGetSyncLog(exportDate: string, extraHttpRequestParams?: any): Observable<LogDetailResponse>;

  /**
   * Gets a distinct list of dates that can be used for import log information
   *
   */
  accessPortalGetSyncLogDates(extraHttpRequestParams?: any): Observable<LogDetailResponse>;

  /**
   * User clicks \&quot;Create\&quot; in UI.  Retrieves the suspended item using the passed in ID from the Suspended Items DB and creates new records the Jenzabar CX database
   *
   * @param suspendedItemId ID of the suspended item to process as a new item in Jenzabar CX
   */
  accessPortalPostSuspendedItem(
    suspendedItemId: string,
    extraHttpRequestParams?: any
  ): Observable<SuspendedItemResponse>;

  /**
   * User clicks \&quot;Match\&quot; in UI. Retrieves the suspended item using the passed in ID from the Suspended Items DB and creates the new adm record and updates the remaining records in the Jenzabar CX database
   *
   * @param suspendedItemId ID of the suspended item to process as an update in Jenzabar CX
   */
  accessPortalPutSuspendedItem(
    suspendedItemId: string,
    extraHttpRequestParams?: any
  ): Observable<SuspendedItemResponse>;
}