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