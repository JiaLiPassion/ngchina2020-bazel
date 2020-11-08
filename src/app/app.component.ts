import {HttpClient} from '@angular/common/http';
import {Component} from '@angular/core';
import {User} from '@shared/user';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  user$: Observable<User>;

  constructor(private http: HttpClient) {
    this.user$ = this.http.get<User>(`http://localhost:3000/api/getTest`)
                     .pipe(tap(console.log));
  }
}
