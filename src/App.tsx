import { RouterProvider } from 'react-router-dom';

import { RecoilRoot } from 'recoil';

import { router } from './routers/Router';

export const App = () => {
    return (
        <RecoilRoot>
            <RouterProvider router={router} />
        </RecoilRoot>
    );
};
