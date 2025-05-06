import { IapProduct, IapPurchase, IapPromotionEligibility } from './types/iap.types';
export interface IapHelper {
    /**
     * Set the operation mode for Samsung IAP
     * @param mode 0 for test mode, 1 for production mode
     * @throws {IapError} If setting operation mode fails
     */
    setOperationMode(mode: 0 | 1): Promise<void>;
    /**
     * Start a payment flow for an item
     * @param itemId The ID of the item to purchase
     * @returns Promise resolving to purchase details
     * @throws {IapError} If payment fails
     */
    startPayment(itemId: string): Promise<IapPurchase>;
    /**
     * Get details for one or more products
     * @param ids Comma-separated list of item IDs
     * @returns Promise resolving to array of product details
     * @throws {IapError} If fetching product details fails
     */
    getProductsDetails(ids: string): Promise<IapProduct[]>;
    /**
     * Get list of owned items
     * @param itemType Type of items to fetch ('ALL', 'CONSUMABLE', 'NON_CONSUMABLE', 'SUBSCRIPTION')
     * @returns Promise resolving to array of owned items
     * @throws {IapError} If fetching owned items fails
     */
    getOwnedList(itemType: string): Promise<IapPurchase[]>;
    /**
     * Consume a purchased item
     * @param purchaseId The ID of the purchase to consume
     * @throws {IapError} If consuming the item fails
     */
    consumePurchasedItems(purchaseId: string): Promise<void>;
    /**
     * Acknowledge a purchase
     * @param purchaseId The ID of the purchase to acknowledge
     * @throws {IapError} If acknowledging the purchase fails
     */
    acknowledgePurchases(purchaseId: string): Promise<void>;
    /**
     * Change a subscription plan
     * @param oldItemId Current subscription item ID
     * @param newItemId New subscription item ID
     * @param prorationMode Proration mode (0-3)
     * @throws {IapError} If changing subscription plan fails
     */
    changeSubscriptionPlan(oldItemId: string, newItemId: string, prorationMode: 0 | 1 | 2 | 3): Promise<void>;
    /**
     * Check promotion eligibility for items
     * @param ids Comma-separated list of item IDs
     * @returns Promise resolving to array of promotion eligibility status
     * @throws {IapError} If checking promotion eligibility fails
     */
    getPromotionEligibility(ids: string): Promise<IapPromotionEligibility[]>;
}
export declare const IapHelper: IapHelper;
