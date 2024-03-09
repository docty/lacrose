import Body from "@/components/body"
import Introduction from "@/components/introduction"
import { Navbar1 } from "@/library/navbar"
import { useState } from "react"


const NavbarPage = () => {

    const [code, setCode] = useState('')

    return (
        <div className="p-8">
            <Introduction title={"Header"} />

            <div className="my-12 grid grid-cols-1 gap-4">
                <Body
                    count={"1"}
                    component={<Navbar1 copyCode={(text: string) => setCode(text)} />}
                    copyCode={code}
                />
            </div>
        </div>
    )
}




export default NavbarPage