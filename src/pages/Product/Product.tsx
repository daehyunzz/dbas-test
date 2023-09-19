import { Link } from 'react-router-dom';

import { Button, Divider, Stack, Typography } from '@mui/material';

import { MakeProduct } from '@components/MakeGood';

export const Product = () => {
    return (
        <Stack px="60px" py="27px">
            <Stack direction="row" justifyContent="space-between" width="1500px">
                <Typography fontWeight="700" fontSize="32px" lineHeight="37.5px">
                    제품 등록
                </Typography>
                <Stack direction="row" spacing="8px">
                    <Button
                        component={Link}
                        to="/goods"
                        variant="outlined"
                        sx={{
                            bgcolor: 'rgba(255, 255, 255, 1)',
                            color: 'rgba(0, 68, 141, 1)',
                            px: '24px',
                            py: '12px',
                            fontWeight: '500',
                            lineHeight: '32.81px',
                            fontSize: '28px',
                        }}
                    >
                        목록으로
                    </Button>
                    <Button
                        component={Link}
                        to="/goods"
                        variant="contained"
                        sx={{
                            bgcolor: 'rgba(0, 68, 141, 1)',
                            color: 'rgba(255, 255, 255, 1)',
                            px: '24px',
                            py: '12px',
                            fontWeight: '500',
                            lineHeight: '32.81px',
                            fontSize: '28px',
                            boxShadow: 'none',
                        }}
                    >
                        저장
                    </Button>
                </Stack>
            </Stack>
            <Divider sx={{ width: '1500px', borderColor: 'rgba(169, 169, 169, 1)', mt: '7px' }} />
            <MakeProduct />
        </Stack>
    );
};
