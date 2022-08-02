
import './Header.css'
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useCookies } from 'react-cookie';
import { countries } from 'country-flag-icons'
import { US, TH, JP } from 'country-flag-icons/react/3x2'
console.log(countries);
export default function Footer() {
    const { t, i18n } = useTranslation();
    const [lng, setLng] = useState(i18n.language);
    const [cookies, setCookie] = useCookies(['lng']);

    useEffect(() => {
        i18n.changeLanguage(lng);
        setCookie('lng', lng, { path: '/', sameSite: 'strict' });
    }, [lng]);

    const setLanguage = () => {
        const data = document.getElementById("selectLanguage").value;
        setLng(data);
    }

    return (
        <div className={"styles"}>
            <US title="United States" style={{ width: "15px", height: "15px" }} />
            <JP title="United States" style={{ width: "15px", height: "15px" }} />

            <TH title="Thailand" style={{ width: "15px", height: "15px" }} onClick={e => alert('casdasd')} />

            <div className={""}>Copyright &copy; Donuts. All Rights Reserved. {t("text")}</div>
        </div>
    );
} 
