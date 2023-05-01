import React from "react"

import Introduction from "@/components/introduction"
import Body from "@/components/body"  
import { Login1 } from "../library/login"

const LoginPage = () => {

    return (
        <div className="p-8">
            <Introduction title={"Login"} />

            <div className="my-12 grid grid-cols-1 gap-4">
                <Body count={"1"} component={<Login1 />} /> 

            </div>
        </div>
    )
}




export default LoginPage