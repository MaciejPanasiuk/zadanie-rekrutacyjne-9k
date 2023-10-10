import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { dateComparisonValidator } from './date.validator';
import { ERROR_MESSAGES } from './../../Data/formConst';

@Injectable({
  providedIn: 'root'
})
export class FormStorageService {

  constructor(private _fb: FormBuilder,
    ) {}
  
  public areNamesEmpty:boolean=true;

  public definitionForm = this._fb.group({
    marketingName: ['', [Validators.required]],
    technicalName: [''],
    description: [''],
    selectedPortal: ['portal', [Validators.required]],
    selectedType: ['type', [Validators.required]],
    benefitAmount: [''],
    startDate: ['', [Validators.required]],
    finishDate: [''],
    priceCondition: ['BusinessConditions'],
    isOtherPromos: [true],
    isBackPromo: [false],
    id:['']
}, { validators: dateComparisonValidator }); 

  public formValidationCheck(){
    return this.definitionForm.valid;
  }
  public setAreNamesEmpty(value:boolean){
    this.areNamesEmpty=value;
  }
  public setErrorMessage(){
    if(this.definitionForm.hasError('finishBeforeStart')){
      return ERROR_MESSAGES.invalidDateError;
    }
    else if(!this.definitionForm.hasError('finishBeforeStart') && this.definitionForm.invalid){
      return ERROR_MESSAGES.missingRequiredError;
    }
    else{
      return 'Validation Error'
    }
  }

}
