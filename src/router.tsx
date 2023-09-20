import { createBrowserRouter } from 'react-router-dom';

import { New } from '@pages/goods/new/page';
import { Goods } from '@pages/goods/page';
import { NewProduct } from '@pages/product/new/page';
import { Product } from '@pages/product/page';

import { Layout } from '@/layout';

import { Home } from './pages/home/page';

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