import { IIntroduction } from "@/types"
import { Typography } from "@mui/material"

const Introduction = ({ title }: IIntroduction) => {
    return (
        <>
            <Typography variant="h4" className=""> {title} </Typography>
            <Typography className="w-1/2">
            This collection contains a variety of {title}  that can be used in your next project. From components to more complex ones, this collection has everything you need to get started.
            </Typography>
        </>
    )
}

export default Introduction