import { ReactNode } from "react"
import Navbar from "../Navbar/navbar"

interface MainContainerProps {
    children?: ReactNode
}

const MainContainer = (props: MainContainerProps) => {
    const { children } = props
    return <div className="w-full h-full flex flex-col sm:flex-row">
        <Navbar />
        <div className="w-full h-full">
            {children}
        </div>
    </div>
}

export default MainContainer