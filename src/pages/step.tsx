import React from "react"

import Introduction from "@/components/introduction"
import Body from "@/components/body"  
import { Step1 } from "../library/step"

const StepPage = () => {

    return (
        <div className="p-8">
            <Introduction title={"Step"} />

            <div className="my-12 grid grid-cols-1 gap-4">
                <Body count={"1"} component={<Step1 />} /> 

            </div>
        </div>
    )
}




export default StepPage