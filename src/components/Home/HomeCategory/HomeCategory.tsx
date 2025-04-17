import {IProps} from "./Types.ts";
import React from "react";
import styles from './HomeCategory.module.scss';
import UiText from "../../Ui/UiText/UiText.tsx";
import UiButton from "../../Ui/UiButton/UiButton.tsx";
import Banner1 from "../../../assets/images/Banner1.png";

const HomeCategory: React.FC<IProps> = () => {
    const items = new Array(6).fill("Элемент");

    return (
        <div className={styles.category}>
            <div className={styles.category__container}>
                <div className={styles.category__header}>
                    <UiText fontSize='24' fontWeight='500' lineHeight='32' text='Просмотр по Категориям'/>
                    <div className={styles.category__control}>
                        <UiButton icon='chevronLeft' cursor width='32' height='32'/>
                        <UiButton icon='chevronRight' cursor width='32' height='32'/>
                    </div>
                </div>
                <div className={styles.category__body}>
                    {items.map((item, index) => (
                        <div key={index} className={styles.category__card}>
                            <img className={styles.category__icon} src={Banner1} alt='Banner1'/>
                            <UiText lineHeight='24' fontWeight='500' fontSize='16' text={item}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomeCategory;