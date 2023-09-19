import { useNavigate } from 'react-router-dom';

import { Box, Typography } from '@mui/material';

import { Tables } from './Tables';

export const Goods = () => {
    const navigate = useNavigate();
    return (
        <Box
            sx={{
                width: '100%',
                height: '90%',
                overFlow: 'auto',
                paddingX: '50px',
                paddingY: '20px',
                display: 'flex',
                flexFlow: 'column',
            }}
        >
            <Typography sx={{ fontSize: '32px', lineHeight: '37.5px', fontWeight: '700' }}>
                상품 관리
            </Typography>
            <hr />
            <Box
                sx={{
                    borderTop: '1px solid #A9A9A9',
                    width: '1500px',
                    height: '130px',
                    display: 'flex',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        gap: '6px',
                        marginLeft: 'auto',
                        marginTop: 'auto',
                        marginBottom: '20px',
                    }}
                >
                    <Box
                        role="button"
                        sx={{
                            width: '269px',
                            height: '63px',
                            radius: '4px',
                            border: '1px solid #000000',
                            fontSize: '28px',
                            fontWeight: '600',
                            display: 'flex',
                        }}
                    >
                        <Box sx={{ margin: 'auto' }}>대량 등록 템플릿</Box>
                    </Box>
                    <Box
                        role="button"
                        sx={{
                            width: '144px',
                            height: '63px',
                            radius: '4px',
                            border: '1px none #000000',
                            backgroundColor: '#00448D',
                            fontSize: '28px',
                            fontWeight: '600',
                            color: '#FFFFFF',
                            display: 'flex',
                        }}
                    >
                        <Box sx={{ margin: 'auto' }}>대량 등록</Box>
                    </Box>
                    <Box
                        role="button"
                        sx={{
                            width: '144px',
                            height: '63px',
                            radius: '4px',
                            border: '1px none #000000',
                            backgroundColor: '#00448D',
                            fontSize: '28px',
                            fontWeight: '600',
                            color: '#FFFFFF',
                            display: 'flex',
                        }}
                    >
                        <Box
                            sx={{ margin: 'auto' }}
                            role="button"
                            onClick={() => navigate('/goods/new')}
                        >
                            개별 등록
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Tables />
        </Box>
    );
};
