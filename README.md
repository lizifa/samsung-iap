# @xiaoshubao/samsung-iap

A React Native/Expo package for Samsung In-App Purchase integration.

## Prerequisites

Before using this package, you need to:

1. Obtain the Samsung IAP SDK (.aar file) from [Samsung Developers](https://developer.samsung.com/iap)
2. Place the SDK file in your project's `android/app/libs/` directory

## Installation

```bash
# Using npm
npm install @xiaoshubao/samsung-iap

# Using yarn
yarn add @xiaoshubao/samsung-iap

# Using pnpm
pnpm add @xiaoshubao/samsung-iap
```

## Configuration

### Expo Setup

1. Add the plugin to your `app.config.ts` or `app.json`:

```typescript
export default {
  // ... other config
  plugins: [
    [
      "@xiaoshubao/samsung-iap",
      {
        android: {
          sdkPath: "libs/SamsungIAP_V6.0.0.aar" // Path to your SDK file
        }
      }
    ]
  ]
}
```

2. Place the Samsung IAP SDK file:
   ```bash
   # Create the libs directory if it doesn't exist
   mkdir -p android/app/libs
   
   # Copy your SDK file
   cp path/to/your/SamsungIAP_V6.0.0.aar android/app/libs/
   ```

3. Ensure your `android/app/build.gradle` has the correct repository configuration:
   ```gradle
   android {
     // ... other config
     
     repositories {
       flatDir {
         dirs 'libs'
       }
     }
   }
   ```

### Important Notes

- This package requires the Samsung IAP SDK (.aar file) to be provided by you
- The SDK file must be placed in the correct location (`android/app/libs/`)
- The `sdkPath` in the plugin configuration must match your actual file name
- Use EAS Build, not Expo Go, as this is a native module
- Samsung IAP only works on Samsung devices

## Usage

```typescript
import { IapHelper } from '@xiaoshubao/samsung-iap';

// Initialize IAP
const initIap = async () => {
  try {
    // Set operation mode (0 for test, 1 for production)
    await IapHelper.setOperationMode(0);
    console.log('IAP initialized successfully');
  } catch (error) {
    console.error('Failed to initialize IAP:', error);
  }
};

// Get product details
const getProducts = async (itemIds: string) => {
  try {
    const products = await IapHelper.getProductsDetails(itemIds);
    console.log('Products:', products);
    return products;
  } catch (error) {
    console.error('Failed to get products:', error);
    throw error;
  }
};

// Start payment
const purchaseItem = async (itemId: string) => {
  try {
    const result = await IapHelper.startPayment(itemId);
    console.log('Purchase successful:', result);
    
    // Handle consumable items
    if (result.purchaseType === 'CONSUMABLE') {
      await IapHelper.consumePurchasedItems(result.purchaseId);
    }
    
    return result;
  } catch (error) {
    console.error('Purchase failed:', error);
    throw error;
  }
};

// Get owned items
const getOwnedItems = async (itemType: string) => {
  try {
    const items = await IapHelper.getOwnedList(itemType);
    console.log('Owned items:', items);
    return items;
  } catch (error) {
    console.error('Failed to get owned items:', error);
    throw error;
  }
};
```

## API Reference

### IapHelper

#### setOperationMode(mode: 0 | 1): Promise<void>
Set the operation mode for Samsung IAP.
- `mode`: 0 for test mode, 1 for production mode

#### startPayment(itemId: string): Promise<IapPurchase>
Start a payment flow for an item.
- `itemId`: The ID of the item to purchase
- Returns: Promise resolving to purchase details

#### getProductsDetails(ids: string): Promise<IapProduct[]>
Get details for one or more products.
- `ids`: Comma-separated list of item IDs
- Returns: Promise resolving to array of product details

#### getOwnedList(itemType: string): Promise<IapPurchase[]>
Get list of owned items.
- `itemType`: Type of items to fetch ('ALL', 'CONSUMABLE', 'NON_CONSUMABLE', 'SUBSCRIPTION')
- Returns: Promise resolving to array of owned items

#### consumePurchasedItems(purchaseId: string): Promise<void>
Consume a purchased item.
- `purchaseId`: The ID of the purchase to consume

#### acknowledgePurchases(purchaseId: string): Promise<void>
Acknowledge a purchase.
- `purchaseId`: The ID of the purchase to acknowledge

#### changeSubscriptionPlan(oldItemId: string, newItemId: string, prorationMode: 0 | 1 | 2 | 3): Promise<void>
Change a subscription plan.
- `oldItemId`: Current subscription item ID
- `newItemId`: New subscription item ID
- `prorationMode`: Proration mode (0-3)

#### getPromotionEligibility(ids: string): Promise<IapPromotionEligibility[]>
Check promotion eligibility for items.
- `ids`: Comma-separated list of item IDs
- Returns: Promise resolving to array of promotion eligibility status

## Error Handling

The package provides structured error handling with the following error codes:

```typescript
interface IapError {
  code: string;
  message: string;
  details?: any;
}
```

Common error codes:
- `SET_OPERATION_MODE_ERROR`: Failed to set operation mode
- `PAYMENT_ERROR`: Payment failed
- `GET_PRODUCTS_ERROR`: Failed to get product details
- `GET_OWNED_LIST_ERROR`: Failed to get owned items
- `CONSUME_ITEMS_ERROR`: Failed to consume items
- `ACKNOWLEDGE_PURCHASES_ERROR`: Failed to acknowledge purchases
- `CHANGE_SUBSCRIPTION_PLAN_ERROR`: Failed to change subscription plan
- `GET_PROMOTION_ELIGIBILITY_ERROR`: Failed to get promotion eligibility

## Testing

For testing purposes, you can use the test mode:

```typescript
// Set test mode
await IapHelper.setOperationMode(0);

// Test purchase flow
try {
  const result = await IapHelper.startPayment('test_item_id');
  console.log('Test purchase successful:', result);
} catch (error) {
  console.error('Test purchase failed:', error);
}
```

## Troubleshooting

1. **SDK not found error**
   - Make sure the Samsung IAP SDK aar file is in the correct location
   - Check that the build.gradle file is properly configured
   - Verify the sdkPath in the plugin configuration matches your file name

2. **Device compatibility**
   - Samsung IAP only works on Samsung devices
   - Check device compatibility before making API calls
   - Use `Platform.OS === 'android' && Platform.constants.Manufacturer.toLowerCase().includes('samsung')` to verify

3. **Network issues**
   - Ensure the device has a stable internet connection
   - Check if the Samsung account is properly logged in
   - Verify that the device has access to Samsung services

4. **Test mode issues**
   - Make sure you're using the correct test item IDs
   - Verify that the test mode is properly set
   - Check if the test account has sufficient balance

## License

MIT 