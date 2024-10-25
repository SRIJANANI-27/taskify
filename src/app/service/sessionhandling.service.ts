import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionhandlingService {
//   loggedInUsername!: string; 

//   constructor() { }

//   setLoggedInUsername(username: string) {
//     this.loggedInUsername = username;
//   }

//   getLoggedInUsername() {
//     return this.loggedInUsername;
//   }
// }

private loggedInUsernameKey = 'loggedInUsername';

  constructor() { }

  setLoggedInUsername(username: string): void {
    sessionStorage.setItem(this.loggedInUsernameKey, username);
  }

  getLoggedInUsername(): string | null {
    return sessionStorage.getItem(this.loggedInUsernameKey);
  }

  clearLoggedInUsername(): void {
    sessionStorage.removeItem(this.loggedInUsernameKey);
  }


 
  private userTypeKey = 'userType';



  setUserType(userType: string): void {
    sessionStorage.setItem(this.userTypeKey, userType);
  }

  getUserType(): string | null {
    return sessionStorage.getItem(this.userTypeKey);
  }

  clearUserType(): void {
    sessionStorage.removeItem(this.userTypeKey);
  }

  
}