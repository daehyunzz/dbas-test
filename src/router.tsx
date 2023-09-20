import { createBrowserRouter } from 'react-router-dom';

import { Customer } from '@pages/customer/page';
import { New } from '@pages/goods/new/page';
import { Goods } from '@pages/goods/page';
import { CustomerManagement } from '@pages/marketing/contentsManagement/messages/customerManagement/page';
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
            { path: '/customer', element: <Customer /> },
            { path: '/marketing/customer-management', element: <CustomerManagement /> },
            // Add more route configurations as needed
        ],
    },
]);
