export interface PromotionDefinition{
    id:string
    marketingName:string;
    technicalName:string;
    description:string;
    selectedPortal:string;
    selectedType:string;
    benefitAmount:string;
    startDate:Date|string;
    finishDate:Date|string;
    priceCondition:string;
    isOtherPromos:boolean;
    isBackPromo:boolean;
}