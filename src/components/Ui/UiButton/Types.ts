export interface IButtonProps {
    height?: string | number;
    width?: string | number;
    heightIcon?: string | number;
    widthIcon?: string | number;
    cursor?: boolean;
    hoverColorIcon?: string | number;
    icon?: keyof typeof import('../../../assets/icons/index.ts').iconsMap;
}