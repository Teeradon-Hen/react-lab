
import './Footer.css'
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useCookies } from 'react-cookie';
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
   
            <div className={""}>
                <select id="selectLanguage" onChange={setLanguage}>
                    <option value=''>Select language</option>
                    <option value='ja'>Japanese</option>
                    <option value='en'>English</option>
                    <option value='th'>Thai</option>
                </select>
            </div>
            <div className={""}>Copyright &copy; Donuts. All Rights Reserved. {t("text")}</div>
        </div>
    );
}
