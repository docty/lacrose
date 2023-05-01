import Body from "@/components/body"
import Introduction from "@/components/introduction" 
import { CallToAction1, CallToAction2, CallToAction3 } from "@/library/call_to_action" 
const CallToActionPage = () => {

    return (
        <div className="p-8">
            <Introduction title={"Call To Action Page"} />

            <div className="my-12 grid grid-cols-1 gap-4">
                <Body count={"1"} component={ <CallToAction1 />} />
                <Body count={"2"} component={ <CallToAction2 />} />
                <Body count={"3"} component={ <CallToAction3 />} />

            </div>
        </div>
    )
}




export default CallToActionPage