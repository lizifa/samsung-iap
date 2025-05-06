export interface IapProduct {
    itemId: string;
    itemName: string;
    itemPrice: string;
    itemPriceString: string;
    currencyUnit: string;
    itemDesc: string;
    itemType: 'CONSUMABLE' | 'NON_CONSUMABLE' | 'SUBSCRIPTION';
    subscriptionPeriodUnit?: string;
    subscriptionPeriod?: number;
}
export interface IapPurchase {
    purchaseId: string;
    itemId: string;
    itemName: string;
    paymentId: string;
    paymentAmount: string;
    currencyUnit: string;
    purchaseDate: string;
    purchaseType: 'CONSUMABLE' | 'NON_CONSUMABLE' | 'SUBSCRIPTION';
    subscriptionEndDate?: string;
}
export interface IapError {
    code: string;
    message: string;
    details?: any;
}
export interface IapPromotionEligibility {
    itemId: string;
    isEligible: boolean;
    promotionType?: string;
    promotionEndDate?: string;
}
