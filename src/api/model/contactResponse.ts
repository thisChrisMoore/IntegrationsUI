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

/**
 * PersonalResponse
 */
export class ContactResponse {
  /**
   * ContactId
   */
  ContactId?: string;
  /**
   * ContactName
   */
  ContactName?: string;
  ContactEmail?: string;
  ContactPhone?: string;
  ContactCellPhone?: string;
  ContactPermAddr?: string;
  IsValid?: boolean;
  ErrorMessage?: string;
  ResultMessage?: string;
  ValidationErrors?: Array<string>;
}
