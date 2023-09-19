import { createBrowserRouter } from 'react-router-dom';

import { Goods } from '@pages/Goods/Goods';
import { New } from '@pages/Goods/New';
import { Layout } from '@pages/Layout/Layout';
import { NewProduct } from '@pages/Product/New';
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
            { path: '/product/new', element: <NewProduct /> },
            { path: '/goods', element: <Goods /> },
            { path: '/goods/new', element: <New /> },
            // Add more route configurations as needed
        ],
    },
]);
