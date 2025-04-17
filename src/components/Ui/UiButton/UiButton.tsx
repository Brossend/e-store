import {IButtonProps} from "./Types.ts";
import React from "react";
import styles from './UiButton.module.scss'
import {iconsMap} from "../../../assets/icons";
import styled from "styled-components";

const StylesButton = styled.button<IButtonProps>`
    height: ${({height}) => `${height}px` || '10px'};
    width: ${({width}) => `${width}px` || '10px'};
    cursor: ${({cursor}) => cursor ? 'pointer' : ''};
`;

const UiButton: React.FC<IButtonProps> = (props) => {
    const IconComponent = props.icon ? iconsMap[props.icon] : null;

    return (
        <StylesButton {...props} className={styles.button}>
            {IconComponent && <IconComponent width={props.widthIcon} height={props.heightIcon}/>}
        </StylesButton>
    );
};

export default UiButton;