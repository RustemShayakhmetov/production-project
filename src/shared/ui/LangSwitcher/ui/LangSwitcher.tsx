import {classNames} from "shared/lib/classNames/classNames";
import cls from './LangSwitcher.module.scss';
import {useTranslation} from "react-i18next";
import React from "react";
import Button, {ThemeButton} from "shared/ui/Button/ui/Button";

interface LangSwitcherProps {
    className?: string,
}

export const LangSwitcher = ({className}: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toogle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    }

    return (
        <div className={classNames(cls.LangSwitcher, {}, [className])}>
            <Button
                theme={ThemeButton.CLEAR}
                onClick={toogle}
            >
                {t('Язык')}
            </Button>
        </div>
    );
};

export default LangSwitcher;
