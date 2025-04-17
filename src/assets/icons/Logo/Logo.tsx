import {ILogoProps} from "./types.ts";
import React from "react";

const Logo: React.FC<ILogoProps> = ({width = 96, height = 29}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 96 29" fill="none">
            <path
                d="M5.42812 9.39935L8.91177 7.39026L6.96725 4.02409H25.2549L16.114 19.862L14.1695 16.49L10.6859 18.505L16.114 27.9044L32.2221 0H0L5.42812 9.39935Z"
                fill="black"/>
            <path
                d="M44.736 21.488C43.68 22.76 42.072 23.408 40.152 23.408C36.36 23.408 34.056 20.96 34.056 17.408C34.056 13.88 36.384 11.432 40.152 11.432C41.976 11.432 43.728 12.128 44.784 13.4L42.888 15.392C42.12 14.552 41.28 14.216 40.152 14.216C38.544 14.216 37.152 15.512 37.152 17.408C37.152 19.472 38.448 20.624 40.152 20.624C41.16 20.624 42.312 20.24 42.936 19.448L44.736 21.488Z"
                fill="black"/>
            <path
                d="M59.3568 11.72L52.3728 28.28H48.9408L51.1728 23.12L46.3488 11.72H49.7568L52.1568 17.816L52.8528 20L53.5248 17.816L55.9249 11.72H59.3568Z"
                fill="black"/>
            <path
                d="M67.2028 14.264C65.4748 14.264 64.2268 15.584 64.2268 17.384C64.2268 19.16 65.4748 20.48 67.2028 20.48C68.8828 20.48 70.0348 19.232 70.0348 17.384C70.0348 15.512 68.8828 14.264 67.2028 14.264ZM61.2268 23V5.408H64.2748V11.672L64.2268 12.488C64.7308 11.816 66.2668 11.432 67.3228 11.432C71.0908 11.432 73.2028 14.192 73.2028 17.384C73.2028 20.984 71.0428 23.312 67.3228 23.312C66.4108 23.312 64.9468 22.88 64.3468 22.16L64.3708 22.808V23H61.2268Z"
                fill="black"/>
            <path
                d="M85.8911 21.56C85.0031 22.712 82.9631 23.408 81.2111 23.408C77.3951 23.408 75.2591 20.792 75.2591 17.408C75.2591 13.952 77.3711 11.432 81.0911 11.432C84.7871 11.432 86.8991 13.952 86.8991 17.408C86.8991 17.792 86.8991 18.032 86.8751 18.368H78.3791C78.5471 19.784 79.6031 20.672 81.2111 20.672C82.3631 20.672 83.4431 20.288 84.1151 19.544L85.8911 21.56ZM78.4271 16.304H83.7071C83.5631 15.032 82.5071 14.168 81.0911 14.168C79.6751 14.168 78.5471 15.032 78.4271 16.304Z"
                fill="black"/>
            <path
                d="M95.3049 14.552C94.6809 14.336 94.1289 14.264 93.4809 14.264C93.0489 14.264 92.6889 14.288 92.3529 14.432V23H89.2569V12.224C90.1929 11.744 91.8009 11.408 93.3609 11.408C94.0329 11.408 95.2329 11.48 95.9529 11.744L95.3049 14.552Z"
                fill="black"/>
        </svg>
    );
};

export default Logo;