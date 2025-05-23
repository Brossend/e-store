import React from "react";
import {IChevronRightProps} from "./Types.ts";

const ChevronRight: React.FC<IChevronRightProps> = ({width = 14, height = 24}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 14 24" fill="none">
            <path
                d="M1.66673 0.333332C1.93215 0.332079 2.18689 0.43782 2.3734 0.626667L13.0401 11.2933C13.43 11.6838 13.43 12.3162 13.0401 12.7067L2.3734 23.3733C1.97939 23.7405 1.36539 23.7296 0.984571 23.3488C0.603755 22.968 0.592921 22.354 0.960067 21.96L10.9201 12L0.960067 2.04C0.570128 1.64958 0.570128 1.01709 0.960067 0.626667C1.14658 0.43782 1.40131 0.332079 1.66673 0.333332Z"
                fill="black"/>
        </svg>
    )
};

export default ChevronRight;