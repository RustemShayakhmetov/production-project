import { lazy } from 'react';

export const AboutPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // Только для ТЕСТА!
    setTimeout(() => resolve(import('./AboutPage')), 1500);
}));
