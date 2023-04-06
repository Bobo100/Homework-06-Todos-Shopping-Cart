import { ShoppingCart_Action, ShoppingCart_ActionType, ShoppingCart_ActionTypeV2, ShoppingCart_ActionV2, Todo_Action, Todo_ActionType } from "../action/actionType";
import { ShoppingCart_State, ShoppingCart_StateV2, Todo_State, initialShoppingCartState, initialShoppingCartStateV2, initialState } from "../state/stateType";

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

// Shopping Cart
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

// Shopping Cart V2
export function shoppingCart_reducerV2(state: ShoppingCart_StateV2 = initialShoppingCartStateV2, action: ShoppingCart_ActionV2) {
    const { type, payload } = action;
    switch (type) {
        case ShoppingCart_ActionTypeV2.ADD_TO_CART_V2:
            // 如果購物車中已經有這個商品了，就把該商品的數量+1
            const index = state.cartList.findIndex(cart => cart.name === payload.name);
            console.log(state.cartList)
            console.log("index", index)
            if (index !== -1) {
                const count = state.cartList[index].count + 1;
                return {
                    ...state,
                    // cartList: state.cartList.map((cart, index) => cart.name === payload.name ? { ...cart, count } : cart)
                    cartList: state.cartList.map((cart, cartIndex) => cartIndex === index ? { ...cart, count } : cart)
                };
            } else {
                return {
                    ...state,
                    cartList: [...state.cartList, payload]
                };
            }
        case ShoppingCart_ActionTypeV2.DELETE_FROM_CART_V2:
            return {
                ...state,
                cartList: state.cartList.filter((cart, index) => index !== payload)
            };
        case ShoppingCart_ActionTypeV2.ADD_ONE_TO_CART_V2:
            return {
                ...state,
                cartList: state.cartList.map((cart, index) => index === payload ? { ...cart, count: cart.count + 1 } : cart)
            };
        case ShoppingCart_ActionTypeV2.MINUS_ONE_TO_CART_V2:

            // 如果減去後的數量為0，就把該商品從購物車中刪除
            if (state.cartList.map((cart, index) => index === payload ? { ...cart, count: cart.count - 1 } : cart)[payload].count === 0) {
                return {
                    ...state,
                    cartList: state.cartList.filter((cart, index) => index !== payload)
                };
            } else {
                return {
                    ...state,
                    cartList: state.cartList.map((cart, index) => index === payload ? { ...cart, count: cart.count - 1 } : cart)
                };
            }

        case ShoppingCart_ActionTypeV2.CLEAR_CART_V2:
            return {
                ...state,
                cartList: []
            };
        default:
            return state;
    }
}