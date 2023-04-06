export type Todo_State = {
    toDoList: string[];
}

export const initialState: Todo_State = {
    toDoList: []
}

// shopping cart
export type ShoppingCartItem = {
    name: string;
    price: number;
}

export type ShoppingCart_State = {
    cartList: ShoppingCartItem[];
}

export const initialShoppingCartState: ShoppingCart_State = {
    cartList: []
}


//////////////////////////////////////////////////////////////// 
// shopping cart V2
export type ShoppingCartItemV2 = {
    name: string;
    price: number;
    count: number;
}

export type ShoppingCart_StateV2 = {
    cartList: ShoppingCartItemV2[];
}

export const initialShoppingCartStateV2: ShoppingCart_StateV2 = {
    cartList: [],
}