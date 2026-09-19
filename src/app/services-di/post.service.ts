import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

export interface Post {
  id: number;
  title: string;
  body: string;
  userId?: number;
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private readonly apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  private http = inject(HttpClient);

  getPosts(limit: number = 5): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}?_limit=${limit}`).pipe(
      catchError(this.handleError)
    );
  }

  createPost(newPost: { title: string; body: string }): Observable<Post> {
    const payload = {
      ...newPost,
      userId: 1
    };

    return this.http.post<Post>(this.apiUrl, payload).pipe(
      catchError(this.handleError)
    );
  }

  deletePost(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let message = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      message = `Client Error: ${error.error.message}`;
    } else {
      message = `Server Error (Code ${error.status}): ${error.message}`;
    }
    console.error('PostService error:', error);
    return throwError(() => new Error(message));
  }
}
