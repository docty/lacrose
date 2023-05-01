import React from "react"

import Introduction from "@/components/introduction"
import Body from "@/components/body" 
import { Price1 } from "../library/price"

const PricePage = () => {

    return (
        <div className="p-8">
            <Introduction title={"Price"} />

            <div className="my-12 grid grid-cols-1 gap-4">
                <Body count={"1"} component={<Price1 />} /> 

            </div>
        </div>
    )
}




export default PricePage