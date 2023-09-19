import { RouterProvider } from 'react-router-dom';

import { router } from './routers/Router';

export const App = () => {
    return <RouterProvider router={router} />;
};
