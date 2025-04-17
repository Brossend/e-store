import {ITextProps} from "./Types.ts";
import styles from './UiText.module.scss';
import styled from 'styled-components';
import React from "react";

const StyledA = styled.a<ITextProps>`
    color: ${({color}) => (color ? `var(--${color})` : 'black')};
    font-weight: ${({fontWeight}) => (fontWeight ? fontWeight : 'black')};
    cursor: ${({cursorPointer}) => (cursorPointer ? 'pointer' : '')};
    white-space: ${({noWrap}) => (noWrap ? 'nowrap' : '')};

    &:hover {
        color: ${({hoverColor, color}) => hoverColor ? `var(--${hoverColor})` : color ? `var(--${color})` : 'black'};
    }
`;

const UiText: React.FC<ITextProps> = (props) => {

    return (
        <StyledA className={styles.text} href={props.link || '#'} {...props}>
            {props.text}
        </StyledA>
    )
};

export default UiText;