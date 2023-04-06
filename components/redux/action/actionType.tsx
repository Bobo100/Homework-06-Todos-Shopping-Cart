// Todo
export enum Todo_ActionType {
    ADD_TODO = 'ADD_TODO',
    DELETE_TODO = 'DELETE_TODO',
    EDIT_TODO = 'EDIT_TODO',
}

export interface Todo_Action {
    type: Todo_ActionType;
    payload: any;
}


// Shopping Cart
export enum ShoppingCart_ActionType {
    ADD_TO_CART = 'ADD_TO_CART',
    DELETE_FROM_CART = 'DELETE_FROM_CART',
    EDIT_CART = 'EDIT_CART',
    CLEAR_CART = 'CLEAR_CART',
}

export interface ShoppingCart_Action {
    type: ShoppingCart_ActionType;
    payload: any;
}

// shopping cart V2
export enum ShoppingCart_ActionTypeV2 {
    ADD_TO_CART_V2 = 'ADD_TO_CART_V2',
    DELETE_FROM_CART_V2 = 'DELETE_FROM_CART_V2',
    ADD_ONE_TO_CART_V2 = 'ADD_ONE_TO_CART_V2',
    MINUS_ONE_TO_CART_V2 = 'MINUS_ONE_TO_CART_V2',
    CLEAR_CART_V2 = 'CLEAR_CART_V2',
}

export interface ShoppingCart_ActionV2 {
    type: ShoppingCart_ActionTypeV2;
    payload: any;
}