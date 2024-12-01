import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MobileService {
  isMobile = false;

  setIsMobile(isMobile: boolean) {
    this.isMobile = isMobile;
  }
}
