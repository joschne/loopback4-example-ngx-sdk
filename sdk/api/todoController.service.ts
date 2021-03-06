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

import { NewTodo } from '../model/newTodo';
import { Todo } from '../model/todo';
import { TodoList } from '../model/todoList';
import { TodoPartial } from '../model/todoPartial';
import { TodoWithRelations } from '../model/todoWithRelations';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable({
  providedIn: 'root'
})
export class TodoControllerService {

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
     * @param newTodo 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public todoControllerCreateTodo(newTodo?: NewTodo, observe?: 'body', reportProgress?: boolean): Observable<Todo>;
    public todoControllerCreateTodo(newTodo?: NewTodo, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Todo>>;
    public todoControllerCreateTodo(newTodo?: NewTodo, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Todo>>;
    public todoControllerCreateTodo(newTodo?: NewTodo, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.post<Todo>(`${this.configuration.basePath}/todos`,
            newTodo,
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
    public todoControllerDeleteTodo(id: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public todoControllerDeleteTodo(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public todoControllerDeleteTodo(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public todoControllerDeleteTodo(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling todoControllerDeleteTodo.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.delete<any>(`${this.configuration.basePath}/todos/${encodeURIComponent(String(id))}`,
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
    public todoControllerFindOwningList(id: number, observe?: 'body', reportProgress?: boolean): Observable<TodoList>;
    public todoControllerFindOwningList(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<TodoList>>;
    public todoControllerFindOwningList(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TodoList>>;
    public todoControllerFindOwningList(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling todoControllerFindOwningList.');
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


        return this.httpClient.get<TodoList>(`${this.configuration.basePath}/todos/${encodeURIComponent(String(id))}/todo-list`,
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
     * @param filter 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public todoControllerFindTodoById(id: number, filter?: object, observe?: 'body', reportProgress?: boolean): Observable<TodoWithRelations>;
    public todoControllerFindTodoById(id: number, filter?: object, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<TodoWithRelations>>;
    public todoControllerFindTodoById(id: number, filter?: object, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TodoWithRelations>>;
    public todoControllerFindTodoById(id: number, filter?: object, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling todoControllerFindTodoById.');
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


        return this.httpClient.get<TodoWithRelations>(`${this.configuration.basePath}/todos/${encodeURIComponent(String(id))}`,
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
     * @param filter 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public todoControllerFindTodos(filter?: object, observe?: 'body', reportProgress?: boolean): Observable<Array<TodoWithRelations>>;
    public todoControllerFindTodos(filter?: object, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<TodoWithRelations>>>;
    public todoControllerFindTodos(filter?: object, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<TodoWithRelations>>>;
    public todoControllerFindTodos(filter?: object, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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


        return this.httpClient.get<Array<TodoWithRelations>>(`${this.configuration.basePath}/todos`,
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
     * @param todo 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public todoControllerReplaceTodo(id: number, todo?: Todo, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public todoControllerReplaceTodo(id: number, todo?: Todo, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public todoControllerReplaceTodo(id: number, todo?: Todo, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public todoControllerReplaceTodo(id: number, todo?: Todo, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling todoControllerReplaceTodo.');
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

        return this.httpClient.put<any>(`${this.configuration.basePath}/todos/${encodeURIComponent(String(id))}`,
            todo,
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
     * @param todoPartial 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public todoControllerUpdateTodo(id: number, todoPartial?: TodoPartial, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public todoControllerUpdateTodo(id: number, todoPartial?: TodoPartial, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public todoControllerUpdateTodo(id: number, todoPartial?: TodoPartial, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public todoControllerUpdateTodo(id: number, todoPartial?: TodoPartial, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling todoControllerUpdateTodo.');
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

        return this.httpClient.patch<any>(`${this.configuration.basePath}/todos/${encodeURIComponent(String(id))}`,
            todoPartial,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
