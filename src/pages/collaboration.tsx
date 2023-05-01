import React from "react"

import Introduction from "@/components/introduction"
import Body from "@/components/body"  
import { Collaboration1 } from "../library/collaboration"

const CollaborationPage = () => {

    return (
        <div className="p-8">
            <Introduction title={"Collaboration"} />

            <div className="my-12 grid grid-cols-1 gap-4">
                <Body count={"1"} component={<Collaboration1 />} /> 

            </div>
        </div>
    )
}




export default CollaborationPage