import {IInputProps} from "./types.ts";
import styles from './UiInput.module.scss';
import styled from 'styled-components';
import React from "react";
import Search from "../../../assets/icons/Search/Search.tsx";

const StyledInput = styled.input<IInputProps>`
    color: ${({color}) => color ? `var(--${color})` : 'black'};
    font-size: ${({fontSize}) => fontSize || '14px'};
    font-weight: ${({fontWeight}) => fontWeight || '400'};
    line-height: ${({lineHeight}) => lineHeight || ''};
`;

const StylesDiv = styled.div<IInputProps>`
    background-color: ${({backgroundColor}) => backgroundColor ? `var(--${backgroundColor})` : 'transparent'};
    width: ${({width}) => width || '100%'};
    height: ${({height}) => height || '40px'};
    padding-top: ${({paddingTop}) => paddingTop || ''};
    padding-bottom: ${({paddingBottom}) => paddingBottom || ''};
    padding-left: ${({paddingLeft}) => paddingLeft || ''};
    padding-right: ${({paddingRight}) => paddingRight || ''};
    margin-top: ${({marginTop}) => marginTop || ''};
    margin-bottom: ${({marginBottom}) => marginBottom || ''};
    margin-left: ${({marginLeft}) => marginLeft || ''};
    margin-right: ${({marginRight}) => marginRight || ''};
    border-radius: ${({borderRadius}) => borderRadius || '4px'};
    border: ${({borderColor}) => borderColor ? `1px solid ${borderColor}` : ''};
`

const UiInput: React.FC<IInputProps> = (props) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.onInputChange(e.target.value);
    }

    return (
        <StylesDiv className={styles.input__container} {...props}>
            {props.showSearchIcon && <Search className={styles.input__icon}/>}
            <StyledInput onChange={handleInputChange} value={props.inputValue} placeholder={props.placeholder}
                         className={styles.input} {...props} />
        </StylesDiv>
    );
}

export default UiInput;