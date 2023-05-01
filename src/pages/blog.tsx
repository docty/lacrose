import React from "react"

import Introduction from "@/components/introduction"
import Body from "@/components/body"   
import { Blog1, Blog2, Blog3, Blog4 } from "../library/blog"

const BlogPage = () => {

    return (
        <div className="p-8">
            <Introduction title={"Blog"} />

            <div className="my-12 grid grid-cols-1 gap-4">
                <Body count={"1"} component={<Blog1 />} /> 
                <Body count={"2"} component={<Blog2 />} />
                <Body count={"3"} component={<Blog3 />} />
                <Body count={"4"} component={<Blog4 />} />
            </div>
        </div>
    )
}




export default BlogPage