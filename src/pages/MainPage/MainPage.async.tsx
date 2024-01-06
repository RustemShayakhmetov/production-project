import { lazy } from 'react';

export const MainPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    // Только для тестирования
  setTimeout(() => resolve(import('./MainPage')), 1500);
}));