/**
 * LoopBack Application
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { TodoListsIdInclude } from './todoListsIdInclude';
import { TodoListsIdFields } from './todoListsIdFields';


export interface Filter1 { 
    where?: { [key: string]: object; };
    fields?: TodoListsIdFields;
    offset?: number;
    limit?: number;
    skip?: number;
    order?: Array<string>;
    include?: Array<TodoListsIdInclude>;
}

