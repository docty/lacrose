import React from "react"

import Introduction from "@/components/introduction"
import Body from "@/components/body"   
import { Integration1 } from "../library/integration"

const IntegrationPage = () => {

    return (
        <div className="p-8">
            <Introduction title={"Integration"} />

            <div className="my-12 grid grid-cols-1 gap-4">
                <Body count={"1"} component={<Integration1 />} /> 

            </div>
        </div>
    )
}




export default IntegrationPage