import { IBody } from "@/types";
import { IconButton, Tooltip } from "@mui/material"
import { IoCopyOutline, IoDesktopOutline, IoPhonePortraitOutline } from "react-icons/io5";
import ReactDOMServer from 'react-dom/server';
import { useEffect, useRef } from "react";
const Body = ({ component, count, copyCode }: IBody) => {

    const iframeRef = useRef(null)
    const copyToClipBoard = () => {
        navigator.clipboard.writeText(ReactDOMServer.renderToStaticMarkup(component))
    }

    const mobileView = () => {
        window.open('http://localhost:3001/hero', '_blank', 'width=375,height=667')
    }

    useEffect(() => {

    }, [])
    return (
        <div className="">
            <div className="flex justify-between">
                <p className={'font-bold text-xl'}>Component #{count}</p>
                <div>
                    <Tooltip title="Copy">
                        <IconButton onClick={copyToClipBoard}>
                            <IoDesktopOutline />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Mobile">
                        <IconButton onClick={mobileView}>
                            <IoPhonePortraitOutline />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Copy">
                        <IconButton onClick={copyToClipBoard}>
                            <IoCopyOutline />
                        </IconButton>
                    </Tooltip>
                </div>


            </div>
            <iframe ref={iframeRef}>

            </iframe>
            {component}


        </div>
    )
}

export default Body

