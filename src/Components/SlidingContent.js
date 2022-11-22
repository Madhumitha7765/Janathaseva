import React from "react";
export default function SlidingContent(props){
    return(
        <>
            <marquee>{props.message}</marquee>
        </>
    );
}