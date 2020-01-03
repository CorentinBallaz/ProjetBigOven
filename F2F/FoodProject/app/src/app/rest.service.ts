import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};



@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getRecipes(): Observable<any> {

    const apiUrl = 'http://localhost:3000/MyApi/recipes/';

    return this.http.get(apiUrl, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));

  }

    getResearchRecipes(str : any): Observable<any> {

        const apiUrl = 'http://localhost:3000/MyApi/recipes/' + str;

        return this.http.get(apiUrl, httpOptions).pipe(
            map(this.extractData),
            catchError(this.handleError));

    }

  getRecipe(id: any): Observable<any> {

    const apiUrl = "http://localhost:3000/MyApi/recipe/" + id;

    return this.http.get(apiUrl, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));

  }

  addIngredient(ingredientName:String): Observable<any> {
    const apiUrl = "http://localhost:3000/MyApi/cart/";
    return this.http.post(apiUrl,{"name":ingredientName},httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  deleteIngredient(ingredientName:any): Observable<any> {

    console.log("I'm in the rest for deleting ingredient",ingredientName);

    const apiUrl = "http://localhost:3000/MyApi/cart/delete";

    console.log(apiUrl);

    return this.http.post(apiUrl,{"ingredient":ingredientName},httpOptions).pipe(
    map(this.extractData),
    catchError(this.handleError));
  }

  deleteAllIngredients(): Observable<any> {

    console.log("I'm in the reste for removing all ingredients from cart");
    const apiUrl = "http://localhost:3000/MyApi/cart/deleteAll";
    return this.http.delete(apiUrl,httpOptions).pipe(
    map(this.extractData),
    catchError(this.handleError));

  }

  getCart(): Observable<any> {

    const apiUrl = "http://localhost:3000/MyApi/cart/";

    return this.http.get(apiUrl, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));

  }

  getFavoriRecipes(): Observable<any> {

    const apiUrl = "http://localhost:3000/MyApi/favoriRecipes/";

    return this.http.get(apiUrl, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));

  }

  addFavoriRecipe(id:String): Observable<any> {
    console.log('test ee');
    console.log(id);
    const apiUrl = "http://localhost:3000/MyApi/favoriRecipes/";
    return this.http.post(apiUrl,{"id":id},httpOptions).pipe(
    map(this.extractData),
      catchError(this.handleError));
  }
  
  deleteFavoriRecipe(id:any): Observable<any> {

    console.log("I'm in the rest for deleting favori recipe",id);

    const apiUrl = "http://localhost:3000/MyApi/favoriRecipes/delete";

    console.log(apiUrl);

    return this.http.post(apiUrl,{"id":id},httpOptions).pipe(
    map(this.extractData),
    catchError(this.handleError));
  }

  
}
