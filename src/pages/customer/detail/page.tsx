import { Link } from 'react-router-dom';

import { Button, Divider, Stack, Typography } from '@mui/material';

import { AddCampaignDialog } from '@pages/customer/detail/AddCampaignDialog';

import { Info } from './Info';
import { Status } from './Status';

export const CustomerDetail = () => {
    return (
        <>
            <AddCampaignDialog />
            <Stack
                sx={{
                    px: '60px',
                    py: '27px',
                }}
            >
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography fontSize="32px" fontWeight="700" lineHeight="37.5px">
                        고객 상세
                    </Typography>
                    <Button
                        component={Link}
                        to="/customer"
                        variant="outlined"
                        sx={{
                            borderColor: 'rgba(0, 68, 141, 1)',
                            fontSize: '28px',
                            lineHeight: '32.81px',
                            paddingX: '24px',
                            paddingY: '12px',
                        }}
                    >
                        목록으로
                    </Button>
                </Stack>{' '}
                <Divider sx={{ mt: '7px', mb: '26px', borderColor: 'rgba(169, 169, 169, 1)' }} />
                <Stack direction="row">
                    <Info />
                    <Status />
                </Stack>
            </Stack>
        </>
    );
};
