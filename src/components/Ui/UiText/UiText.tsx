import {ITextProps} from "./Types.ts";
import styles from './UiText.module.scss';
import styled, {css} from 'styled-components';
import React from "react";

const commonStyles = css<ITextProps>`
    color: ${({color}) => (color ? `var(--${color})` : 'black')};
    font-weight: ${({fontWeight}) => (fontWeight ? fontWeight : 'black')};
    font-size: ${({fontSize}) => (fontSize ? `${fontSize}px` : '')};
    line-height: ${({lineHeight}) => (lineHeight ? `${lineHeight}px` : '')};
    cursor: ${({cursorPointer}) => (cursorPointer ? 'pointer' : '')};
    white-space: ${({noWrap}) => (noWrap ? 'nowrap' : '')};

    &:hover {
        color: ${({hoverColor, color}) => hoverColor ? `var(--${hoverColor})` : color ? `var(--${color})` : 'black'};
    }
`;

const StyledA = styled.a<ITextProps>`
    ${commonStyles}
`;

const StyledSpan = styled.span<ITextProps>`
    ${commonStyles}
`;

const UiText: React.FC<ITextProps> = (props) => {
    const Tag = props.link ? StyledA : StyledSpan;

    return (
        <Tag className={styles.text} href={props.link || '#'} {...props}>
            {props.text}
        </Tag>
    )
};

export default UiText;