import { Component } from '@angular/core';
import { DEFINITION_TOOLTIP_MESSAGES, ERROR_MESSAGES, PORTAL_LIST, TUTORIAL_TEXT, TYPE_LIST } from './../../Data/formConst';
import { FormStorageService } from './../../services/form-storage/form-storage.service';

@Component({
  selector: 'app-definition',
  templateUrl: './definition.component.html',
  styleUrls: ['./definition.component.scss'],
})
export class DefinitionComponent {
  constructor(
    public formData:FormStorageService,
    ) {}

  public portalList: Array<string> = PORTAL_LIST;
  public typeList: Array<string> = TYPE_LIST;
  public tutorialText:Array<string>=TUTORIAL_TEXT.split('\n\n')
  public toolTipMessages=DEFINITION_TOOLTIP_MESSAGES;
  public errorMessages=ERROR_MESSAGES;
  public isDataValid=true;

  public getDraftFromLS() {
    const draft = localStorage.getItem('STEP_1');
    if (draft) {
      const formDraft=JSON.parse(draft)
        this.formData.definitionForm.setValue(formDraft);
    }
}

ngOnInit() {
  this.getDraftFromLS();
  this.formData.definitionForm.valueChanges.subscribe((formValues) => {
    localStorage.setItem('STEP_1', JSON.stringify(formValues));
  });
}

}
