import Head from "next/head"
import Layout from "../components/layout"
import Image from "next/image"

import poster01 from "../public/images/poster-01.jpg"
import poster02 from "../public/images/poster-02.jpg"
import poster03 from "../public/images/poster-03.jpg"
import poster04 from "../public/images/poster-04.jpg"
import poster05 from "../public/images/poster-05.jpg"
import AddButtonAdv from "../components/shoppingCartAdv/addButtonAdv"
import { useDispatch, useSelector } from "react-redux"
import uuid from "react-uuid"
import { ShoppingCart_ActionTypeV2 } from "../components/redux/action/actionType"
import store from "../components/redux/store/store"


const shoppingCartAdv = () => {

    const shoppCartList = useSelector((state: any) => state.shoppingCart_reducerV2.cartList)

    const dispatch = useDispatch();

    const add_one = (index: number) => {
        console.log("add_one")
        dispatch({ type: ShoppingCart_ActionTypeV2.ADD_ONE_TO_CART_V2, payload: index })
    }

    const minus_one = (index: number) => {
        console.log("minus_one")
        dispatch({ type: ShoppingCart_ActionTypeV2.MINUS_ONE_TO_CART_V2, payload: index })
    }
    // DELETE_FROM_CART_V2
    const delete_from_cart = (index: number) => {
        console.log("delete_from_cart")
        dispatch({ type: ShoppingCart_ActionTypeV2.DELETE_FROM_CART_V2, payload: index })
    }

    return (
        <Layout>
            <Head>
                <title>購物車</title>
            </Head>
            <h1 className="text-3xl font-bold">商品目錄</h1>
            <div className="flex">
                <div className="box-border text-center w-64">
                    <Image src={poster01} alt="poster01" height={250} className="m-1 inline" />
                    <p>捍衛任務4</p>
                    <p>售價：680</p>
                    <AddButtonAdv name="捍衛任務4" price={680} count={1} />
                </div>
                <div className="box-border text-center w-64">
                    <Image src={poster02} alt="poster02" height={250} className="m-1 inline" />
                    <p>超級瑪利歐兄弟電影版</p>
                    <p>售價：550</p>
                    <AddButtonAdv name="超級瑪利歐兄弟電影版" price={550} count={1} />
                </div>
                <div className="box-border text-center w-64">
                    <Image src={poster03} alt="poster03" height={250} className="m-1 inline" />
                    <p>鈴芽之旅</p>
                    <p>售價：650</p>
                    <AddButtonAdv name="鈴芽之旅" price={650} count={1} />
                </div>
                <div className="box-border text-center w-64">
                    <Image src={poster04} alt="poster04" height={250} className="m-1 inline" />
                    <p>名偵探柯南 灰原哀物語~黑鐵的神祕列車~</p>
                    <p>售價：580</p>
                    <AddButtonAdv name="名偵探柯南 灰原哀物語~黑鐵的神祕列車~" price={580} count={1} />
                </div>
                <div className="box-border text-center w-64">
                    <Image src={poster05} alt="poster05" height={250} className="m-1 inline" />
                    <p>魔女宅急便</p>
                    <p>售價：350</p>
                    <AddButtonAdv name="魔女宅急便" price={350} count={1} />
                </div>
            </div>

            <div className="flex">
                <div>購物車內容</div>
                <div className="border border-amber-500 ml-2 px-2">總金額：{shoppCartList && shoppCartList.reduce((total: number, item: any) => total + item.price * item.count, 0)}</div>
            </div>
            <button onClick={() => (store.dispatch({ type: ShoppingCart_ActionTypeV2.CLEAR_CART_V2 }))} className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded px-2 py-2 mt-2">清空購物車</button>
            {shoppCartList && shoppCartList.map((item: any, index: number) => {
                return (
                    <div key={uuid()} className="m-3">
                        <div className="border border-amber-500">
                            <div>{item.name}</div>
                            <div>價格(單價)：{item.price}</div>
                            <div>數量：{item.count}</div>
                            <div>小計：{item.price * item.count}</div>
                        </div>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded px-5 py-2 mt-2 mx-2" onClick={() => add_one(index)}>+</button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded px-5 py-2 mt-2 mx-2" onClick={() => minus_one(index)}>-</button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded px-5 py-2 mt-2 mx-2" onClick={() => delete_from_cart(index)}>刪除</button>
                    </div>
                )
            })}
        </Layout>
    )
}

export default shoppingCartAdv