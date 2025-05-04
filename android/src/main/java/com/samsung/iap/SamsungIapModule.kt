package com.samsung.iap

import android.util.Log
import com.facebook.react.bridge.*
import com.samsung.android.sdk.iap.lib.helper.IapHelper
import com.samsung.android.sdk.iap.lib.vo.*

class SamsungIapModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    private val TAG = "SamsungIapModule"
    private val mIapHelper: IapHelper = IapHelper.getInstance(reactContext)
    private val mReactContext: ReactApplicationContext = reactContext

    override fun getName(): String = "SamsungIap"

    @ReactMethod
    fun setOperationMode(mode: Int, promise: Promise) {
        try {
            mIapHelper.setOperationMode(mode)
            promise.resolve(null)
        } catch (e: Exception) {
            promise.reject("SET_OPERATION_MODE_ERROR", e)
        }
    }

    @ReactMethod
    fun startPayment(itemId: String, promise: Promise) {
        mIapHelper.startPayment(itemId) { errorVo, purchaseVo ->
            if (errorVo.errorCode == IapHelper.IAP_ERROR_NONE) {
                val result = Arguments.createMap().apply {
                    if (purchaseVo != null) {
                        putString("itemId", purchaseVo.itemId)
                        putString("purchaseId", purchaseVo.purchaseId)
                        putBoolean("isConsumable", purchaseVo.isConsumable)
                        putString("jsonString", purchaseVo.jsonString)
                    }
                }
                promise.resolve(result)
            } else {
                promise.reject("PAYMENT_ERROR", errorVo.errorString)
            }
        }
    }

    @ReactMethod
    fun getProductsDetails(ids: String, promise: Promise) {
        mIapHelper.getProductsDetails(ids) { errorVo, productList ->
            if (errorVo.errorCode == IapHelper.IAP_ERROR_NONE) {
                val result = Arguments.createArray().apply {
                    productList?.forEach { product ->
                        Arguments.createMap().apply {
                            putString("itemId", product.itemId)
                            putString("itemName", product.itemName)
                            putString("itemPriceString", product.itemPriceString)
                            putString("itemDesc", product.itemDesc)
                            putString("type", product.type)
                            putBoolean("isConsumable", product.isConsumable)
                        }.let { pushMap(it) }
                    }
                }
                promise.resolve(result)
            } else {
                promise.reject("GET_PRODUCTS_ERROR", errorVo.errorString)
            }
        }
    }

    @ReactMethod
    fun getOwnedList(itemType: String, promise: Promise) {
        mIapHelper.getOwnedList(itemType) { errorVo, ownedList ->
            if (errorVo.errorCode == IapHelper.IAP_ERROR_NONE) {
                val result = Arguments.createArray().apply {
                    ownedList.forEach { item ->
                        Arguments.createMap().apply {
                            putString("itemId", item.itemId)
                            putString("purchaseId", item.purchaseId)
                            putBoolean("isConsumable", item.isConsumable)
                            putInt("acknowledgedStatus", item.acknowledgedStatus)
                        }.let { pushMap(it) }
                    }
                }
                promise.resolve(result)
            } else {
                promise.reject("GET_OWNED_LIST_ERROR", errorVo.errorString)
            }
        }
    }

    @ReactMethod
    fun consumePurchasedItems(purchaseId: String, promise: Promise) {
        mIapHelper.consumePurchasedItems(purchaseId) { errorVo, consumeList ->
            if (errorVo.errorCode == IapHelper.IAP_ERROR_NONE) {
                val result = Arguments.createArray().apply {
                    consumeList.forEach { item ->
                        Arguments.createMap().apply {
                            putInt("statusCode", item.statusCode)
                            putString("purchaseId", item.purchaseId)
                        }.let { pushMap(it) }
                    }
                }
                promise.resolve(result)
            } else {
                promise.reject("CONSUME_ITEMS_ERROR", errorVo.errorString)
            }
        }
    }

    @ReactMethod
    fun acknowledgePurchases(purchaseId: String, promise: Promise) {
        mIapHelper.acknowledgePurchases(purchaseId) { errorVo, ackList ->
            if (errorVo.errorCode == IapHelper.IAP_ERROR_NONE) {
                val result = Arguments.createArray().apply {
                    ackList.forEach { item ->
                        Arguments.createMap().apply {
                            putInt("statusCode", item.statusCode)
                            putString("purchaseId", item.purchaseId)
                        }.let { pushMap(it) }
                    }
                }
                promise.resolve(result)
            } else {
                promise.reject("ACKNOWLEDGE_PURCHASES_ERROR", errorVo.errorString)
            }
        }
    }

    @ReactMethod
    fun changeSubscriptionPlan(oldItemId: String, newItemId: String, prorationMode: Int, promise: Promise) {
        mIapHelper.changeSubscriptionPlan(oldItemId, newItemId, prorationMode) { errorVo, purchaseVo ->
            if (errorVo.errorCode == IapHelper.IAP_ERROR_NONE) {
                val result = Arguments.createMap().apply {
                    if (purchaseVo != null) {
                        putString("itemId", purchaseVo.itemId)
                        putString("purchaseId", purchaseVo.purchaseId)
                        putBoolean("isConsumable", purchaseVo.isConsumable)
                        putString("jsonString", purchaseVo.jsonString)
                    }
                }
                promise.resolve(result)
            } else {
                promise.reject("CHANGE_SUBSCRIPTION_PLAN_ERROR", errorVo.errorString)
            }
        }
    }

    @ReactMethod
    fun getPromotionEligibility(ids: String, promise: Promise) {
        mIapHelper.getPromotionEligibility(ids) { errorVo, pricingList ->
            if (errorVo.errorCode == IapHelper.IAP_ERROR_NONE) {
                val result = Arguments.createArray().apply {
                    pricingList.forEach { item ->
                        Arguments.createMap().apply {
                            putString("itemId", item.itemId)
                            putString("pricing", item.pricing)
                        }.let { pushMap(it) }
                    }
                }
                promise.resolve(result)
            } else {
                promise.reject("GET_PROMOTION_ELIGIBILITY_ERROR", errorVo.errorString)
            }
        }
    }
} 