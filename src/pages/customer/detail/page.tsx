import { Link } from 'react-router-dom';

import { Button, Divider, Stack, Typography } from '@mui/material';

import { Info } from './Info';
import { Status } from './Status';

export const CustomerDetail = () => {
    return (
        <Stack
            sx={{
                px: '60px',
                py: '27px',
            }}
        >
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography>고객 상세</Typography>
                <Button component={Link} to="/customer" variant="outlined">
                    목록으로
                </Button>
            </Stack>
            <Divider />
            <Stack direction="row">
                <Info />
                <Status />
            </Stack>
        </Stack>
    );
};
