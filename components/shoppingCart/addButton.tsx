import { StaticImageData } from "next/image";
import store from "../redux/store/store";
import { ShoppingCart_ActionType } from "../redux/action/actionType";
import { ShoppingCartItem } from "../redux/state/stateType";

const AddButton: React.FC<ShoppingCartItem> = ({ name, price }) => {

    const addToCart = () => {
        console.log("加入購物車")
        store.dispatch({
            type: ShoppingCart_ActionType.ADD_TO_CART,
            payload: ({ name, price })
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

export default AddButton;