import {IProps} from "./Types.ts";
import React from "react";
import Banner1 from "../../../assets/images/Banner1.png";
import Banner2 from "../../../assets/images/Banner2.png";
import Banner3 from "../../../assets/images/Banner3.png";
import Banner4 from "../../../assets/images/Banner4.png";
import Banner5 from "../../../assets/images/Banner5.png";
import styles from "./HomeBanner.module.scss";

const HomeBanner: React.FC<IProps> = () => {
    return (
        <div className={styles.grid}>
            <div className={styles.grid__item}>
                <img src={Banner1} alt='Banner1'/>
                <div style={{position: 'absolute', top: '50%', left: '15%'}}>
                    <span>Pro.Beyond</span>
                    <div>
                        <span>IPhone 14</span>
                        <span>Pro</span>
                    </div>
                    <span>Будет приходить с бэка</span>
                    <button>
                        Shop Now
                    </button>
                </div>
            </div>
            <div className={styles.grid__item}>
                <img src={Banner2} alt='Banner1'/>
                <div style={{position: 'absolute', top: '50%', left: '46%'}}>
                    <span>Playstation 5</span>
                    <span>Будет приходить с бэка</span>
                </div>
            </div>
            <div className={styles.grid__item}>
                <img src={Banner4} alt='Banner1'/>
                <div style={{position: 'absolute', top: '50%', left: '42%'}}>
                    <span>Apple</span>
                    <span>AirPods</span>
                    <span>Max</span>
                    <span>Будет приходить с бэка</span>
                </div>
            </div>
            <div className={styles.grid__item}>
                <img src={Banner3} alt='Banner1'/>
                <div style={{position: 'absolute', top: '50%', left: '42%'}}>
                    <span>Apple</span>
                    <div>
                        <span>AirPods</span>
                        <span>Max</span>
                    </div>
                    <span>Будет приходить с бэка</span>
                </div>
            </div>
            <div className={styles.grid__item}>
                <img src={Banner5} alt='Banner1'/>
                <div style={{position: 'absolute', top: '50%', left: '15%'}}>
                    <span>Macbook</span>
                    <span>Air</span>
                    <span>Будет приходить с бэка</span>
                    <button>
                        Shop Now
                    </button>
                </div>
            </div>
        </div>
    )
};

export default HomeBanner;