import React from "react"

import Introduction from "@/components/introduction"
import Body from "@/components/body"  
import { Team1 } from "../library/team"

const TeamPage = () => {

    return (
        <div className="p-8">
            <Introduction title={"Team"} />

            <div className="my-12 grid grid-cols-1 gap-4">
                <Body count={"1"} component={<Team1 />} /> 

            </div>
        </div>
    )
}




export default TeamPage