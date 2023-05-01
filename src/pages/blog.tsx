import React from "react"

import Introduction from "@/components/introduction"
import Body from "@/components/body"   
import { Blog1 } from "../library/blog"

const BlogPage = () => {

    return (
        <div className="p-8">
            <Introduction title={"Blog"} />

            <div className="my-12 grid grid-cols-1 gap-4">
                <Body count={"1"} component={<Blog1 />} /> 

            </div>
        </div>
    )
}




export default BlogPage