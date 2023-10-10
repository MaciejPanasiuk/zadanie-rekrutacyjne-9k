import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormStorageService } from '../form-storage/form-storage.service';

export const RouteGuardService = () => {
  const formData = inject(FormStorageService);
  const router = inject(Router);
  const localStorageData = localStorage.getItem('STEP_1');
  if (localStorageData) {
    const parsedData = JSON.parse(localStorageData);
    if (parsedData.technicalName || parsedData.marketingName) {
      return true;
    } else {
      return router.parseUrl('/definition');
    }
  } else if (!formData.areNamesEmpty) {
    return true;
  } else {
    return router.parseUrl('/definition');
  }
};
