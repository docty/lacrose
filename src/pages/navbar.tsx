import Body from "@/components/body"
import Introduction from "@/components/introduction"
import { Navbar1, Navbar2, Navbar3 } from "@/library/navbar"
 

const NavbarPage = () => {

    return (
        <div className="p-8">
            <Introduction title={"Header"} />

            <div className="my-12 grid grid-cols-1 gap-4">
                <Body count={"1"} component={<Navbar1 />} />
                <Body count={"2"} component={<Navbar2 />} />
                <Body count={"3"} component={<Navbar3 />} />
            </div>
         </div>
    )
}




export default NavbarPage