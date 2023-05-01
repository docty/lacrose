import { IBody } from "@/types";
import { IconButton, Tooltip, Typography } from "@mui/material"
import { IoCopyOutline } from "react-icons/io5";

const Body = ({component, count}: IBody) => {
    return (
        <div>
            <div className="flex justify-between">
                <Typography className={'font-bold text-xl'}>Component #{count}</Typography>
                <Tooltip title="Copy">
                    <IconButton>
                        <IoCopyOutline />
                    </IconButton>
                </Tooltip>
            </div>
             {component}
        </div>
    )
}

export default Body

