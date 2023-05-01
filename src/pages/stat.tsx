import React from "react"

import Introduction from "@/components/introduction"
import Body from "@/components/body" 
import { Stat1 } from "../library/stat"
 

const StatPage = () => {

    return (
        <div className="p-8">
            <Introduction title={"Stat"} />

            <div className="my-12 grid grid-cols-1 gap-4">
                <Body count={"1"} component={<Stat1 />} /> 

            </div>
        </div>
    )
}




export default StatPage