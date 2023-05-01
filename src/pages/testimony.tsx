
import React from "react"

import Introduction from "@/components/introduction"
import Body from "@/components/body"
import { Testimony1, Testimony2 } from "../library/testimony"

const TestimonyPage = () => {

    return (
        <div className="p-8">
            <Introduction title={"Testimonial"} />

            <div className="my-12 grid grid-cols-1 gap-4">
                <Body count={"1"} component={<Testimony1 />} />
                <Body count={"2"} component={<Testimony2 />} />

            </div>
        </div>
    )
}




export default TestimonyPage