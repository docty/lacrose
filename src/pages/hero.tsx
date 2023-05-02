import React from "react"

import Introduction from "@/components/introduction"
import Body from "@/components/body"
import { Hero1, Hero2, Hero3, Hero4 } from "../library/hero"

const HeroPage = () => {

    return (
        <div className="p-8">
            <Introduction title={"Hero"} />

            <div className="my-12 grid grid-cols-1 gap-4">
                <Body count={"1"} component={<Hero1 />} />
                <Body count={"2"} component={<Hero2 />} />
                <Body count={"3"} component={<Hero3 />} />
                <Body count={"4"} component={<Hero4 />} />
            </div>
        </div>
    )
}




export default HeroPage