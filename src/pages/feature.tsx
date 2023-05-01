
import { Tooltip, IconButton, Typography } from "@mui/material"
import React from "react"
import { IoCopyOutline } from "react-icons/io5"
import { Feature1 } from "../library/feature"
import Introduction from "@/components/introduction"
import Body from "@/components/body"

const FeaturePage = () => {

    return (
        <div className="p-8">
            <Introduction title={"Feature"} />

            <div className="my-12 grid grid-cols-1 gap-4">
                <Body count={"1"} component={<Feature1 />} />


            </div>
        </div>
    )
}




export default FeaturePage