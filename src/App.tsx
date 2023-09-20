import { RouterProvider } from 'react-router-dom';

import { CssBaseline } from '@mui/material';

import { router } from './router';

export const App = () => {
    return (
        <>
            <CssBaseline />
            <RouterProvider router={router} />
        </>
    );
};
