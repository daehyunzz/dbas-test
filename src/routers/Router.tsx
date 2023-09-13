import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages/Home/Home';

// lazy import 사용 시 WAPL Shell 배포 불가.

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
]);
