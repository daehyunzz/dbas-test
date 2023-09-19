import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '@pages/Home/Layout';

import { Home } from '../pages/Home/Home';

// lazy import 사용 시 WAPL Shell 배포 불가.

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: '/', element: <Home /> },
            // Add more route configurations as needed
        ],
    },
]);
