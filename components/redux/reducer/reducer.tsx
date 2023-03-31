import { ShoppingCart_Action, ShoppingCart_ActionType, Todo_Action, Todo_ActionType } from "../action/actionType";
import { ShoppingCart_State, Todo_State, initialShoppingCartState, initialState } from "../state/stateType";

// Next.js中 需要幫state加上一個初始化值
export function todo_reducer(state: Todo_State = initialState, action: Todo_Action) {
    const { type, payload } = action;
    switch (type) {
        case Todo_ActionType.ADD_TODO:
            return {
                ...state,
                toDoList: [...state.toDoList, payload]
            };
        case Todo_ActionType.DELETE_TODO:
            return {
                ...state,
                toDoList: state.toDoList.filter((todo, index) => index !== payload)
            };
        case Todo_ActionType.EDIT_TODO:
            return {
                ...state,
                toDoList: state.toDoList.map((todo, index) => index === payload.index ? payload.todo : todo)
            };
        default:
            return state;
    }
}

export function shoppingCart_reducer(state: ShoppingCart_State = initialShoppingCartState, action: ShoppingCart_Action) {
    const { type, payload } = action;
    switch (type) {
        case ShoppingCart_ActionType.ADD_TO_CART:
            return {
                ...state,
                cartList: [...state.cartList, payload]
            };
        case ShoppingCart_ActionType.DELETE_FROM_CART:
            return {
                ...state,
                cartList: state.cartList.filter((cart, index) => index !== payload)
            };
        case ShoppingCart_ActionType.EDIT_CART:
            return {
                ...state,
                cartList: state.cartList.map((cart, index) => index === payload.index ? payload.cart : cart)
            };
        case ShoppingCart_ActionType.CLEAR_CART:
            return {
                ...state,
                cartList: []
            };
        default:
            return state;
    }
}
