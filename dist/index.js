"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IapHelper = void 0;
var react_native_1 = require("react-native");
var SamsungIap = react_native_1.NativeModules.SamsungIap;
exports.IapHelper = {
    setOperationMode: function (mode) { return __awaiter(void 0, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, SamsungIap.setOperationMode(mode)];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    throw {
                        code: 'SET_OPERATION_MODE_ERROR',
                        message: 'Failed to set operation mode',
                        details: error_1
                    };
                case 3: return [2 /*return*/];
            }
        });
    }); },
    startPayment: function (itemId) { return __awaiter(void 0, void 0, void 0, function () {
        var error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, SamsungIap.startPayment(itemId)];
                case 1: return [2 /*return*/, _a.sent()];
                case 2:
                    error_2 = _a.sent();
                    throw {
                        code: 'PAYMENT_ERROR',
                        message: 'Payment failed',
                        details: error_2
                    };
                case 3: return [2 /*return*/];
            }
        });
    }); },
    getProductsDetails: function (ids) { return __awaiter(void 0, void 0, void 0, function () {
        var error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, SamsungIap.getProductsDetails(ids)];
                case 1: return [2 /*return*/, _a.sent()];
                case 2:
                    error_3 = _a.sent();
                    throw {
                        code: 'GET_PRODUCTS_ERROR',
                        message: 'Failed to get product details',
                        details: error_3
                    };
                case 3: return [2 /*return*/];
            }
        });
    }); },
    getOwnedList: function (itemType) { return __awaiter(void 0, void 0, void 0, function () {
        var error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, SamsungIap.getOwnedList(itemType)];
                case 1: return [2 /*return*/, _a.sent()];
                case 2:
                    error_4 = _a.sent();
                    throw {
                        code: 'GET_OWNED_LIST_ERROR',
                        message: 'Failed to get owned items',
                        details: error_4
                    };
                case 3: return [2 /*return*/];
            }
        });
    }); },
    consumePurchasedItems: function (purchaseId) { return __awaiter(void 0, void 0, void 0, function () {
        var error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, SamsungIap.consumePurchasedItems(purchaseId)];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    error_5 = _a.sent();
                    throw {
                        code: 'CONSUME_ITEMS_ERROR',
                        message: 'Failed to consume items',
                        details: error_5
                    };
                case 3: return [2 /*return*/];
            }
        });
    }); },
    acknowledgePurchases: function (purchaseId) { return __awaiter(void 0, void 0, void 0, function () {
        var error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, SamsungIap.acknowledgePurchases(purchaseId)];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    error_6 = _a.sent();
                    throw {
                        code: 'ACKNOWLEDGE_PURCHASES_ERROR',
                        message: 'Failed to acknowledge purchases',
                        details: error_6
                    };
                case 3: return [2 /*return*/];
            }
        });
    }); },
    changeSubscriptionPlan: function (oldItemId, newItemId, prorationMode) { return __awaiter(void 0, void 0, void 0, function () {
        var error_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, SamsungIap.changeSubscriptionPlan(oldItemId, newItemId, prorationMode)];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    error_7 = _a.sent();
                    throw {
                        code: 'CHANGE_SUBSCRIPTION_PLAN_ERROR',
                        message: 'Failed to change subscription plan',
                        details: error_7
                    };
                case 3: return [2 /*return*/];
            }
        });
    }); },
    getPromotionEligibility: function (ids) { return __awaiter(void 0, void 0, void 0, function () {
        var error_8;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, SamsungIap.getPromotionEligibility(ids)];
                case 1: return [2 /*return*/, _a.sent()];
                case 2:
                    error_8 = _a.sent();
                    throw {
                        code: 'GET_PROMOTION_ELIGIBILITY_ERROR',
                        message: 'Failed to get promotion eligibility',
                        details: error_8
                    };
                case 3: return [2 /*return*/];
            }
        });
    }); }
};
