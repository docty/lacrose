import React from "react"

import Introduction from "@/components/introduction"
import Body from "@/components/body"  
import { Footer1 } from "../library/footer"

const FooterPage = () => {

    return (
        <div className="p-8">
            <Introduction title={"Footer"} />

            <div className="my-12 grid grid-cols-1 gap-4">
                <Body count={"1"} component={<Footer1 />} /> 

            </div>
        </div>
    )
}




export default FooterPage