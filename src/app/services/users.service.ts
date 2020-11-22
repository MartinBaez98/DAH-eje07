import { Injectable } from '@angular/core';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users: Users[] = new Array();

  constructor() {
    this.users.push({
      name: 'Martín Báez',
      city: 'Guasave',
      like: 0,
      loveIt: 0,
      interests: ['Deporte', 'Música']
    });
    this.users.push({
      name: 'Jonathan López',
      city: 'Guasave',
      like: 0,
      loveIt: 0,
      interests: ['Deporte', 'Música']
    });
  }

  getUsers(): Users[] {
    return this.users;
  }
}
