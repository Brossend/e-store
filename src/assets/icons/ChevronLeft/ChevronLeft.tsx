import React from "react";
import {IChevronLeftProps} from "./Types.ts";

const ChevronLeft: React.FC<IChevronLeftProps> = ({width = 14, height = 24}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 14 24" fill="none">
            <path
                d="M12.3333 23.6667C12.0678 23.6679 11.8131 23.5622 11.6266 23.3733L0.959934 12.7067C0.569996 12.3162 0.569996 11.6838 0.959934 11.2933L11.6266 0.626666C12.0206 0.259521 12.6346 0.270354 13.0154 0.65117C13.3962 1.03199 13.4071 1.64599 13.0399 2.04L3.07993 12L13.0399 21.96C13.4299 22.3504 13.4299 22.9829 13.0399 23.3733C12.8534 23.5622 12.5987 23.6679 12.3333 23.6667Z"
                fill="black"/>
        </svg>
    )
};

export default ChevronLeft;