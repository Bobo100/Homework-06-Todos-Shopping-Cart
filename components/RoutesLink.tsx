import Link from "next/link"
import { useRouter } from "next/router"

const RouterLink = () => {
    const router = useRouter()
    return (
        <>
            <Link href="/" className={`${router.pathname === "/" ? "to-blue-500" : ""} p-3`}>To-Do List</Link>
            <Link href="/shoppingCart" className={`${router.pathname === "/shoppingCart" ? "to-blue-500" : ""} p-3`}>購物車</Link>
        </>
    )
}

export default RouterLink