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