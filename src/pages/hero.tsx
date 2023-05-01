import React from "react"

import Introduction from "@/components/introduction"
import Body from "@/components/body"  
import { Hero1 } from "../library/hero"

const HeroPage = () => {

    return (
        <div className="p-8">
            <Introduction title={"Hero"} />

            <div className="my-12 grid grid-cols-1 gap-4">
                <Body count={"1"} component={<Hero1 />} /> 

            </div>
        </div>
    )
}




export default HeroPage