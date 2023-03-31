import Head from "next/head"
import Layout from "../components/layout"
import Image from "next/image"

import poster01 from "../public/images/poster-01.jpg"
import poster02 from "../public/images/poster-02.jpg"
import poster03 from "../public/images/poster-03.jpg"
import poster04 from "../public/images/poster-04.jpg"
import poster05 from "../public/images/poster-05.jpg"
import AddButton from "../components/shoppingCart/addButton"
import { useSelector } from "react-redux"
import uuid from "react-uuid"
import { ShoppingCart_ActionType } from "../components/redux/action/actionType"
import store from "../components/redux/store/store"

const ShoppingCart = () => {

    const shoppCartList = useSelector((state: any) => state.shoppingCart_reducer.cartList)
    console.log(shoppCartList)

    const deleteItem = (index: number) => {
        console.log("deleteItem")
        store.dispatch({ type: ShoppingCart_ActionType.DELETE_FROM_CART, payload: index })
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
                    <AddButton name="捍衛任務4" price={1000} />
                </div>
                <div className="box-border text-center w-64">
                    <Image src={poster02} alt="poster02" height={250} className="m-1 inline" />
                    <p>超級瑪利歐兄弟電影版</p>
                    <AddButton name="超級瑪利歐兄弟電影版" price={1000} />
                </div>
                <div className="box-border text-center w-64">
                    <Image src={poster03} alt="poster03" height={250} className="m-1 inline" />
                    <p>鈴芽之旅</p>
                    <AddButton name="鈴芽之旅" price={1000} />
                </div>
                <div className="box-border text-center w-64">
                    <Image src={poster04} alt="poster04" height={250} className="m-1 inline" />
                    <p>名偵探柯南 灰原哀物語~黑鐵的神祕列車~</p>
                    <AddButton name="名偵探柯南 灰原哀物語~黑鐵的神祕列車~" price={1000} />
                </div>
                <div className="box-border text-center w-64">
                    <Image src={poster05} alt="poster05" height={250} className="m-1 inline" />
                    <p>魔女宅急便</p>
                    <AddButton name="魔女宅急便" price={1000} />
                </div>
            </div>

            <div>購物車內容</div>
            <button onClick={() => (store.dispatch({ type: ShoppingCart_ActionType.CLEAR_CART }))} className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded px-2 py-2 mt-2">清空購物車</button>
            {shoppCartList &&
                <div>
                    {shoppCartList.map((item: any, index: number) => {
                        return (
                            <div key={uuid()} className="m-3">
                                <div className="border border-amber-500">
                                    <p>商品名稱：{item.name}</p>
                                    <p>商品價格：{item.price}</p>
                                </div>
                                <button onClick={() => (deleteItem(index))} className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded px-2 py-2 mt-2">刪除</button>
                            </div>
                        )
                    })}
                </div>
            }


        </Layout>
    )
}

export default ShoppingCart