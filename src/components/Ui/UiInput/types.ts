export interface IInputProps {
    inputValue: string;
    onInputChange: (e: string) => void;

    placeholder?: string;

    showSearchIcon?: boolean;

    backgroundColor?: string;
    color?: string;
    fontSize?: string | number;
    fontWeight?: string | number;
    lineHeight?: string | number;
    width?: string | number;
    height?: string | number;
    paddingTop?: string | number;
    paddingBottom?: string | number;
    paddingLeft?: string | number;
    paddingRight?: string | number;
    marginTop?: string | number;
    marginBottom?: string | number;
    marginLeft?: string | number;
    marginRight?: string | number;
    borderRadius?: string | number;
    borderColor?: string | number;
}