import { Injectable } from '@angular/core';
import { PromotionDefinition } from './../../Interfaces/Interfaces';

@Injectable({
  providedIn: 'root'
})
export class PromotionStorageService {
  public isNameSubmitted = false;
  public isEditing=false;
  public promotionsList:Array<PromotionDefinition>=[]

  public saveNewPromotion(newPromotion:PromotionDefinition){
    this.promotionsList.push(newPromotion);
  } 
  public updateNewPromotion(updatedPromotion:PromotionDefinition){
    const updatedPromotionIndex=this.promotionsList.map(promotion=>promotion.id).indexOf(updatedPromotion.id);
    this.promotionsList[updatedPromotionIndex]=updatedPromotion;
  }
  public markNameAsSubmitted(){
    this.isNameSubmitted=true;
  }
  public setPromotioneditStatus(status:boolean){
    this.isEditing=status;
  }
  public readAllPromotions(){
    return this.promotionsList;
  }
  public readPromotion(id:string){
    return this.promotionsList.find((promotion)=>promotion.id===id) as PromotionDefinition;
  }
  public deletePromotion(id:string){
    this.promotionsList=this.promotionsList.filter((promotion)=>promotion.id!==id);
  }
 
  public readNameSubmitted(){
    return this.isNameSubmitted;
  }
  public readEditingStatus(){
    return this.isEditing;
  }
  constructor() { }
}
