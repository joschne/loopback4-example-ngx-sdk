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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent, HttpParameterCodec }       from '@angular/common/http';
import { CustomHttpParameterCodec }                          from '../encoder';
import { Observable }                                        from 'rxjs';

import { InlineResponse200 } from '../model/inlineResponse200';
import { NewTodoList } from '../model/newTodoList';
import { TodoList } from '../model/todoList';
import { TodoListPartial } from '../model/todoListPartial';
import { TodoListWithRelations } from '../model/todoListWithRelations';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable({
  providedIn: 'root'
})
export class TodoListControllerService {

    protected basePath = 'http://127.0.0.1:3000';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();
    public encoder: HttpParameterCodec;

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
    }



    /**
     * @param where 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public todoListControllerCount(where?: { [key: string]: object; }, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse200>;
    public todoListControllerCount(where?: { [key: string]: object; }, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse200>>;
    public todoListControllerCount(where?: { [key: string]: object; }, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse200>>;
    public todoListControllerCount(where?: { [key: string]: object; }, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (where !== undefined && where !== null) {
            queryParameters = queryParameters.set('where', <any>where);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.get<InlineResponse200>(`${this.configuration.basePath}/todo-lists/count`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param newTodoList 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public todoListControllerCreate(newTodoList?: NewTodoList, observe?: 'body', reportProgress?: boolean): Observable<TodoList>;
    public todoListControllerCreate(newTodoList?: NewTodoList, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<TodoList>>;
    public todoListControllerCreate(newTodoList?: NewTodoList, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TodoList>>;
    public todoListControllerCreate(newTodoList?: NewTodoList, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<TodoList>(`${this.configuration.basePath}/todo-lists`,
            newTodoList,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param id 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public todoListControllerDeleteById(id: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public todoListControllerDeleteById(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public todoListControllerDeleteById(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public todoListControllerDeleteById(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling todoListControllerDeleteById.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.delete<any>(`${this.configuration.basePath}/todo-lists/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param filter 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public todoListControllerFind(filter?: object, observe?: 'body', reportProgress?: boolean): Observable<Array<TodoListWithRelations>>;
    public todoListControllerFind(filter?: object, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<TodoListWithRelations>>>;
    public todoListControllerFind(filter?: object, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<TodoListWithRelations>>>;
    public todoListControllerFind(filter?: object, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (filter !== undefined && filter !== null) {
            queryParameters = queryParameters.set('filter', <any>filter);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.get<Array<TodoListWithRelations>>(`${this.configuration.basePath}/todo-lists`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param id 
     * @param filter 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public todoListControllerFindById(id: number, filter?: object, observe?: 'body', reportProgress?: boolean): Observable<TodoListWithRelations>;
    public todoListControllerFindById(id: number, filter?: object, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<TodoListWithRelations>>;
    public todoListControllerFindById(id: number, filter?: object, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TodoListWithRelations>>;
    public todoListControllerFindById(id: number, filter?: object, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling todoListControllerFindById.');
        }

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (filter !== undefined && filter !== null) {
            queryParameters = queryParameters.set('filter', <any>filter);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.get<TodoListWithRelations>(`${this.configuration.basePath}/todo-lists/${encodeURIComponent(String(id))}`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param where 
     * @param todoListPartial 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public todoListControllerUpdateAll(where?: { [key: string]: object; }, todoListPartial?: TodoListPartial, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse200>;
    public todoListControllerUpdateAll(where?: { [key: string]: object; }, todoListPartial?: TodoListPartial, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse200>>;
    public todoListControllerUpdateAll(where?: { [key: string]: object; }, todoListPartial?: TodoListPartial, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse200>>;
    public todoListControllerUpdateAll(where?: { [key: string]: object; }, todoListPartial?: TodoListPartial, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (where !== undefined && where !== null) {
            queryParameters = queryParameters.set('where', <any>where);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.patch<InlineResponse200>(`${this.configuration.basePath}/todo-lists`,
            todoListPartial,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param id 
     * @param todoListPartial 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public todoListControllerUpdateById(id: number, todoListPartial?: TodoListPartial, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public todoListControllerUpdateById(id: number, todoListPartial?: TodoListPartial, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public todoListControllerUpdateById(id: number, todoListPartial?: TodoListPartial, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public todoListControllerUpdateById(id: number, todoListPartial?: TodoListPartial, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling todoListControllerUpdateById.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.patch<any>(`${this.configuration.basePath}/todo-lists/${encodeURIComponent(String(id))}`,
            todoListPartial,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
