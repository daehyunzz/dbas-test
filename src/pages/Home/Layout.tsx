import { Outlet, useNavigate } from 'react-router-dom';

import { Box, Typography } from '@mui/material';

import logo from '../../assets/Logo_FOUCS.png';

export const Layout: React.FC = () => {
    const navigate = useNavigate();

    const SNBList = [
        { name: '제품 관리', children: false },
        { name: '상품 관리', children: false },
        { name: '판매/주문 관리', children: true },
        { name: '견적/청구 관리', children: true },
        { name: '매출 관리', children: true },
        { name: '고객 관리', children: true },
        { name: '마케팅 관리', children: true },
    ];

    return (
        <Box sx={{ width: '100%', height: '100%' }}>
            <Box
                sx={{
                    display: 'flex',
                    position: 'relative',
                    top: 0,
                    width: '100%',
                    height: '68px',
                    backgroundColor: '#FAFAFA',
                    paddingX: '40px',
                }}
            >
                <Box sx={{ marginY: 'auto' }}>
                    <img src={logo} onClick={() => navigate('/')} />
                </Box>
            </Box>
            <Box sx={{ display: 'flex' }}>
                <Box
                    sx={{
                        dixplay: 'flex',
                        flexFlow: 'column',
                        width: '300px',
                        height: 'full',
                        backgroundColor: '#FAFAFA',
                    }}
                >
                    <Box
                        sx={{ width: 'full', height: '54px', cursor: 'pointer' }}
                        onClick={() => navigate('/')}
                    >
                        홈<hr></hr>
                    </Box>
                    {SNBList.map((e) => {
                        return (
                            <Box
                                onClick={() => navigate(`/`)}
                                sx={{
                                    display: 'flex',
                                    width: 'full',
                                    height: '54px',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderTop: 'solid 1px black',
                                    paddingX: '40px',
                                    cursor: 'pointer',
                                }}
                            >
                                <Typography sx={{ boxSizing: 'border-box', marginRight: 'auto' }}>
                                    {e.name}
                                </Typography>
                                {e.children ? <Box sx={{}}>▼</Box> : <></>}
                            </Box>
                        );
                    })}
                </Box>
                <Outlet />
            </Box>
        </Box>
    );
};
