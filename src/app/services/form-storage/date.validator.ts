import { AbstractControl } from "@angular/forms";

export function dateComparisonValidator(control:AbstractControl):{[key:string]:boolean}|null{
    const startDate = control.get('startDate')?.value;
    const finishDate = control.get('finishDate')?.value;

    if (finishDate&& startDate && new Date(finishDate) < new Date(startDate)) {
        return { 'finishBeforeStart': true };
      }
      return null
}