import Button from 'shared/ui/Button/ui/Button';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

// Тестовый компонент для проверки ErrorBoundary
export const BugButton = () => {
    const [error, setError] = useState(false);
    const { t } = useTranslation();
    const onThrow = () => setError(true);

    useEffect(() => {
        console.log(error);
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button
            onClick={onThrow}
        >
            {t('throw error')}
        </Button>
    );
};

export default BugButton;
