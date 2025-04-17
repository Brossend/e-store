import {Outlet, useLocation} from "react-router-dom";
import styles from './Default.module.scss'
import Logo from "../../assets/icons/Logo/Logo.tsx";
import UiInput from "../../components/Ui/UiInput/UiInput.tsx";
import {useState} from "react";
import UiText from "../../components/Ui/UiText/UiText.tsx";
import UiButton from "../../components/Ui/UiButton/UiButton.tsx";
import {useMediaQuery} from "../../hooks/useMediaQuery.ts";
import clsx from "clsx";

export default function Default() {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const isMobile = useMediaQuery('(max-width: 1440px)');
    const location = useLocation();

    const nav = [
        {
            text: 'Домашняя',
            link: '/'
        },
        {
            text: 'О нас',
            link: '/about'
        },
        {
            text: 'Контакты',
            link: '/contacts'
        },
        {
            text: 'Блог',
            link: '/blog'
        }
    ];

    return (
        <>
            <header className={
                clsx(styles.header, isMobile && styles["header--mobile"])
            }>
                <Logo/>
                {isMobile ? (<>
                    <UiButton cursor width='25' height='18' widthIcon='40' heightIcon='40' icon='burger'/>
                </>) : (
                    <>
                        <UiInput inputValue={searchQuery} onInputChange={setSearchQuery} placeholder='Поиск'
                                 color='gray-400'
                                 borderRadius='8px' backgroundColor='gray-100'
                                 width='372px'
                                 height='56px'
                                 paddingBottom='16px'
                                 paddingLeft='16px'
                                 paddingRight='16px'
                                 fontSize='14px'
                                 fontWeight='500'
                                 lineHeight="18px"
                                 paddingTop='16px'
                                 showSearchIcon/>
                        <div className={styles.header__nav}>
                            {nav.map((item, index) => (
                                <UiText color={location.pathname === item.link ? 'black' : 'gray-200'} key={index}
                                        text={item.text}
                                        noWrap fontWeight={500} link={item.link}/>
                            ))}
                        </div>
                        <div className={styles.header__buttons}>
                            <UiButton cursor width='32' height='32' icon='heart'/>
                            <UiButton cursor width='32' height='32' icon='cart'/>
                            <UiButton cursor width='32' height='32' icon='profile'/>
                        </div>
                    </>
                )}
            </header>
            <Outlet/>
        </>
    )
}