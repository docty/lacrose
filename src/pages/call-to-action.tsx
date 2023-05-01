import { CallToAction, CallToAction2, CallToAction3 } from "@/library/call_to_action" 
import { Tooltip, IconButton, Typography } from "@mui/material"
import { IoCopyOutline } from "react-icons/io5"

const CallToActionPage = () => {

    return (
        <div className="p-8">
            <Typography variant="h4" className=""> CallToActionPage </Typography>
            <Typography className="w-1/2">
                This collection contains a variety of Tailwind horizontal menu components that can be used in your next project. From components to more complex ones, this collection has everything you need to get started.
            </Typography>
            <div className="my-12 grid grid-cols-1 gap-4">
                <div>
                    <div className="flex justify-between">
                        <Typography className={'font-bold text-xl'}>Component #1</Typography>
                        <Tooltip title="Copy">
                            <IconButton>
                                <IoCopyOutline />
                            </IconButton>
                        </Tooltip>
                    </div>
                    <CallToAction copy={() => null} />
                </div>
                <div>
                    <div className="flex justify-between">
                        <Typography className={'font-bold text-xl'}>Component #2</Typography>
                        <Tooltip title="Copy">
                            <IconButton>
                                <IoCopyOutline />
                            </IconButton>
                        </Tooltip>
                    </div>
                    <CallToAction2 copy={() => null} />
                </div>
                <div>
                    <div className="flex justify-between">
                        <Typography className={'font-bold text-xl'}>Component #3</Typography>
                        <Tooltip title="Copy">
                            <IconButton>
                                <IoCopyOutline />
                            </IconButton>
                        </Tooltip>
                    </div>
                    <CallToAction3 copy={() => null} />
                </div>
            </div>
        </div>
    )
}




export default CallToActionPage