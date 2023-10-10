import { Component } from '@angular/core';
import { FormStorageService } from '../services/form-storage/form-storage.service';
import { NAVBAR_TOOLTIP_MESSAGES } from '../Data/formConst';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
constructor(public formData:FormStorageService,){
}
public toolTipMessages=NAVBAR_TOOLTIP_MESSAGES;
public getDraftFromLS() {
  const draft = localStorage.getItem('STEP_1');
  if (draft) {
    const formDraft=JSON.parse(draft)
      if(formDraft.marketingName || formDraft.technicalName){
        this.formData.setAreNamesEmpty(false);
      }
      else{
        this.formData.setAreNamesEmpty(true);
      }
  }else{
    this.formData.setAreNamesEmpty(true);
  }
}
ngOnInit(){
  this.getDraftFromLS()
  this.formData.definitionForm.valueChanges.subscribe((formValues) => {
      if(formValues.technicalName || formValues.marketingName){
      this.formData.setAreNamesEmpty(false);
    }
    else{
      this.formData.setAreNamesEmpty(true);
    }
  });
}

}
