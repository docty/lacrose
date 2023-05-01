import React from "react"

import Introduction from "@/components/introduction"
import Body from "@/components/body"  
import { Contact1 } from "../library/contact"

const ContactPage = () => {

    return (
        <div className="p-8">
            <Introduction title={"Contact"} />

            <div className="my-12 grid grid-cols-1 gap-4">
                <Body count={"1"} component={<Contact1 />} /> 

            </div>
        </div>
    )
}




export default ContactPage