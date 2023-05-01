import React from "react"

import Introduction from "@/components/introduction"
import Body from "@/components/body"  
import { Signup1 } from "../library/signup"

const SignupPage = () => {

    return (
        <div className="p-8">
            <Introduction title={"Signup"} />

            <div className="my-12 grid grid-cols-1 gap-4">
                <Body count={"1"} component={<Signup1 />} /> 

            </div>
        </div>
    )
}




export default SignupPage