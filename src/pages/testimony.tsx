
import React from "react"

import Introduction from "@/components/introduction"
import Body from "@/components/body"
import { Testimony1, Testimony2, Testimony3, Testimony4, Testimony5, Testimony6, Testimony7, Testimony8, Testimony9 } from "../library/testimony"

const TestimonyPage = () => {

    return (
        <div className="p-8">
            <Introduction title={"Testimonial"} />

            <div className="my-12 grid grid-cols-1 gap-4">
                <Body count={"1"} component={<Testimony1 />} />
                <Body count={"2"} component={<Testimony2 />} />
                <Body count={"3"} component={<Testimony3 />} />
                <Body count={"4"} component={<Testimony4 />} />
                <Body count={"5"} component={<Testimony5 />} />
                <Body count={"6"} component={<Testimony6 />} />
                <Body count={"7"} component={<Testimony7 />} />
                <Body count={"8"} component={<Testimony8 />} />
                <Body count={"9"} component={<Testimony9 />} />
            </div>
        </div>
    )
}




export default TestimonyPage