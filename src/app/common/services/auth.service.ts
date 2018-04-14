import { Injectable } from '@angular/core';
import { AngularFireLiteAuth } from 'angularfire-lite';

@Injectable()
export class AuthService {

  constructor(
    public auth: AngularFireLiteAuth
  ) { }

}
