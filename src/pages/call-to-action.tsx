import Body from "@/components/body"
import Introduction from "@/components/introduction"
import {
    CallToAction1, CallToAction10, CallToAction11, CallToAction12, CallToAction2,
    CallToAction3, CallToAction4, CallToAction5, CallToAction6, CallToAction7,
    CallToAction8, CallToAction9
} from "@/library/call_to_action"


const CallToActionPage = () => {

    return (
        <div className="p-8">
            <Introduction title={"Call To Action Page"} />

            <div className="my-12 grid grid-cols-1 gap-4">
                <Body count={"1"} component={<CallToAction1 />} />
                <Body count={"2"} component={<CallToAction2 />} />
                <Body count={"3"} component={<CallToAction3 />} />
                <Body count={"4"} component={<CallToAction4 />} />
                <Body count={"5"} component={<CallToAction5 />} />
                <Body count={"6"} component={<CallToAction6 />} />
                <Body count={"7"} component={<CallToAction7 />} />
                <Body count={"8"} component={<CallToAction8 />} />
                <Body count={"9"} component={<CallToAction9 />} />
                <Body count={"10"} component={<CallToAction10 />} />
                <Body count={"11"} component={<CallToAction11 />} />
                <Body count={"12"} component={<CallToAction12 />} />
            </div>
        </div>
    )
}




export default CallToActionPage