import React from "react"

import Introduction from "@/components/introduction"
import Body from "@/components/body"   
import { Content1 } from "../library/content"

const ContentPage = () => {

    return (
        <div className="p-8">
            <Introduction title={"Content"} />

            <div className="my-12 grid grid-cols-1 gap-4">
                <Body count={"1"} component={<Content1 />} /> 

            </div>
        </div>
    )
}




export default ContentPage