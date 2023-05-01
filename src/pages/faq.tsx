import React from "react"

import Introduction from "@/components/introduction"
import Body from "@/components/body"  
import { Faq1 } from "../library/faq"

const FaqPage = () => {

    return (
        <div className="p-8">
            <Introduction title={"Faq"} />

            <div className="my-12 grid grid-cols-1 gap-4">
                <Body count={"1"} component={<Faq1 />} /> 

            </div>
        </div>
    )
}




export default FaqPage