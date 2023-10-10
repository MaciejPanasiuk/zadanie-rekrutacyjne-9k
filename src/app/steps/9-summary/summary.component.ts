import { Component } from '@angular/core';
import { PromotionDefinition } from './../../Interfaces/Interfaces';
import { PromotionStorageService } from '../../services/promotion-storage/promotion-storage.service';
import { v4 as uuidv4 } from 'uuid';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmationComponent } from './../../delete-confirmation/delete-confirmation.component';
import { Router } from '@angular/router';
import { FormStorageService } from './../../services/form-storage/form-storage.service';
import { DEFAULT_FORM_VALUES, ERROR_MESSAGES } from './../../Data/formConst';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent {
  public isNameSubmitted: boolean = false;
  public promotionList: Array<PromotionDefinition> = [];
  public isAdded: boolean = false;
  public isEditing: boolean = false;
  public newPromotion: PromotionDefinition = {
    id: '',
    marketingName: '',
    technicalName: '',
    description: '',
    selectedPortal: '',
    selectedType: '',
    benefitAmount: '',
    startDate: '',
    finishDate: '',
    priceCondition: '',
    isOtherPromos: false,
    isBackPromo: false,
  };
  constructor(
    private _promotionsData: PromotionStorageService,
    private _router: Router,
    public formData: FormStorageService,
    public dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.isNameSubmitted = this._promotionsData.readNameSubmitted();
    this.isEditing = this._promotionsData.readEditingStatus();
  }
  public isFormValid: boolean = true;
  public currentErrorMessage = ERROR_MESSAGES.missingRequiredError;

  public handleAddPromotion() {
    this.isFormValid = this.formData.formValidationCheck();
    if (this.isFormValid) {
      const draft = localStorage.getItem('STEP_1');
      if (draft) {
        this.newPromotion = JSON.parse(draft);
        const newPromotionId = uuidv4();
        this._promotionsData.saveNewPromotion({
          ...this.newPromotion,
          id: newPromotionId,
        });
        this.promotionList = this._promotionsData.readAllPromotions();
        this.formData.definitionForm.reset(DEFAULT_FORM_VALUES);
        localStorage.removeItem('STEP_1');
        this.isAdded = true;
      }
    }
    else{
      this.currentErrorMessage=this.formData.setErrorMessage()
    }
  }
  public handleEditPromotion(id: string) {
    this.newPromotion = this._promotionsData.readPromotion(id);
    localStorage.setItem('STEP_1', JSON.stringify(this.newPromotion));
    localStorage.setItem('draftId', id);
    this._promotionsData.setPromotioneditStatus(true);
    this._router.navigate(['/definition']);
  }
  public handleConfirmUpdate() {
    this.isFormValid = this.formData.formValidationCheck();
    if(this.isFormValid)
    {const draft = localStorage.getItem('STEP_1');
    const draftId = localStorage.getItem('draftId');
    if (draft && draftId) {
      this.newPromotion = JSON.parse(draft);
      this._promotionsData.updateNewPromotion({
        ...this.newPromotion,
        id: draftId,
      });
      this.promotionList = this._promotionsData.readAllPromotions();
      this.formData.definitionForm.reset(DEFAULT_FORM_VALUES);
      localStorage.removeItem('STEP_1');
      this.isAdded = true;
      this.isEditing = false;
      this._promotionsData.setPromotioneditStatus(false);
    }}
    else{
      this.currentErrorMessage=this.formData.setErrorMessage()
    }
  }
  public handleDeletePromotion(id: string) {
    this._promotionsData.deletePromotion(id);
    this.promotionList = this._promotionsData.readAllPromotions();
  }
  public openDialog(id: string, marketingName: string) {
    const dialogRef = this.dialog.open(DeleteConfirmationComponent, {
      data: { marketingName: marketingName },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'false') {
        this.handleDeletePromotion(id);
      }
    });
  }
}
