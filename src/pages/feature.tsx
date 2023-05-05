
import { Tooltip, IconButton, Typography } from "@mui/material"
import React from "react"
import { IoCopyOutline } from "react-icons/io5"
import {
    Feature1, Feature10, Feature11, Feature2, Feature3, Feature4,
    Feature5, Feature6, Feature7, Feature8, Feature9
} from "../library/feature"
import Introduction from "@/components/introduction"
import Body from "@/components/body"

const FeaturePage = () => {

    return (
        <div className="p-8">
            <Introduction title={"Feature"} />

            <div className="my-12 grid grid-cols-1 gap-4">
                <Body count={"1"} component={<Feature1 />} />
                <Body count={"2"} component={<Feature2 />} />
                <Body count={"3"} component={<Feature3 />} />
                <Body count={"4"} component={<Feature4 />} />
                <Body count={"5"} component={<Feature5 />} />
                <Body count={"6"} component={<Feature6 />} />
                <Body count={"7"} component={<Feature7 />} />
                <Body count={"8"} component={<Feature8 />} />
                <Body count={"9"} component={<Feature9 />} />
                <Body count={"10"} component={<Feature10 />} />
                <Body count={"11"} component={<Feature11 />} /> 
            </div>
        </div>
    )
}




export default FeaturePage