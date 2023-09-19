import { createBrowserRouter } from 'react-router-dom';

import { Goods } from '@pages/Goods/Goods';
import { Layout } from '@pages/Layout/Layout';
import { Product } from '@pages/Product/Product';

import { Home } from '../pages/Home/Home';

// lazy import 사용 시 WAPL Shell 배포 불가.

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/product', element: <Product /> },
            { path: '/goods', element: <Goods /> },
            // Add more route configurations as needed
        ],
    },
]);
