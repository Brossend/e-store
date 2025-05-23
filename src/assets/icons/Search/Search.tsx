import {ISearchProps} from "./types.ts";
import React from "react";

const Search: React.FC<ISearchProps> = ({width = 19, height = 18, className = ''}) => {
    return (
        <svg className={className} width={width} height={height} viewBox="0 0 19 18" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <path
                d="M17.5996 17L13.8219 13.2156M15.9154 8.15789C15.9154 10.0563 15.1613 11.8769 13.8189 13.2193C12.4765 14.5617 10.6559 15.3158 8.7575 15.3158C6.85911 15.3158 5.03847 14.5617 3.69611 13.2193C2.35374 11.8769 1.59961 10.0563 1.59961 8.15789C1.59961 6.2595 2.35374 4.43886 3.69611 3.0965C5.03847 1.75413 6.85911 1 8.7575 1C10.6559 1 12.4765 1.75413 13.8189 3.0965C15.1613 4.43886 15.9154 6.2595 15.9154 8.15789V8.15789Z"
                stroke="#989898" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
    )
}

export default Search;