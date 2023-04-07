export type Todo_State = {
    id: number;
    toDoItem: string;
    isDone: boolean;
}

export type Todo_State_List = {
    toDoList: Todo_State[];
}

export const initialState: Todo_State_List = {
    toDoList: [
        { id: 0, toDoItem: "Learn React", isDone: true },
        { id: 1, toDoItem: "Learn Redux", isDone: false },
        { id: 2, toDoItem: "Learn Redux-Toolkit", isDone: false },
    ],
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