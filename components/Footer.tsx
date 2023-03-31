import { useRouter } from "next/router"
import RouterLink from "./RoutesLink"

const Footer = () => {
    const router = useRouter()
    return (
        <div className="flex">
            <RouterLink />
        </div>
    )
}

export default Footer