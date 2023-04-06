import store from "../redux/store/store";
import { ShoppingCart_ActionTypeV2 } from "../redux/action/actionType";
import { ShoppingCartItemV2 } from "../redux/state/stateType";

const AddButtonAdv: React.FC<ShoppingCartItemV2> = ({ name, price, count }) => {

    const addToCart = () => {
        console.log("加入購物車", name, price, count)
        store.dispatch({
            type: ShoppingCart_ActionTypeV2.ADD_TO_CART_V2,
            payload: ({ name, price, count })
        })
    }

    return (
        <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded px-2 py-2"
            onClick={addToCart}
        >
            加入購物車
        </button>
    );
};

export default AddButtonAdv;