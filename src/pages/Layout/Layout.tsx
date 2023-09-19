import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { Box, Typography } from '@mui/material';

import logo from '../../assets/Logo_FOUCS.png';

export const Layout: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const SNBList = [
        { name: '제품 관리', children: false, url: '/product' },
        { name: '상품 관리', children: false, url: '/goods' },
        { name: '판매/주문 관리', children: true },
        { name: '견적/청구 관리', children: true },
        { name: '매출 관리', children: true },
        { name: '고객 관리', children: true },
        { name: '마케팅 관리', children: true },
    ];

    return (
        <Box sx={{ width: '100%', height: '100%', overflow: 'hidden' }}>
            <Box
                sx={{
                    boxSizing: 'border-box',
                    display: 'flex',
                    position: 'relative',
                    top: 0,
                    width: '100%',
                    height: '68px',
                    backgroundColor: '#FAFAFA',
                    paddingX: '40px',
                }}
            >
                <Box sx={{ marginY: 'auto', cursor: 'pointer' }}>
                    <img src={logo} onClick={() => navigate('/')} />
                </Box>
            </Box>
            <Box sx={{ display: 'flex', height: '100%' }}>
                <Box
                    sx={{
                        dixplay: 'flex',
                        flexFlow: 'column',
                        width: '300px',
                        height: 'full',
                    }}
                >
                    <Box
                        sx={{ width: 'full', height: '54px', cursor: 'pointer' }}
                        onClick={() => navigate('/')}
                    >
                        홈<hr></hr>
                    </Box>
                    {SNBList.map((e) => {
                        const typographStyle = {
                            'display': 'flex',
                            'alignItems': 'center',
                            'boxSizing': 'border-box',
                            'width': '260px',
                            'height': '42px',
                            'paddingX': '20px',
                            'backgroundColor': 'none',
                            '&:hover': {
                                fontWeight: 'bold',
                            },
                        };

                        if (e.url && location.pathname.startsWith(e.url)) {
                            typographStyle.backgroundColor = '#E1E8Ef';
                        }
                        return (
                            <Box
                                onClick={() => {
                                    navigate(e.url || '/');
                                }}
                                sx={{
                                    display: 'flex',
                                    width: 'full',
                                    height: '54px',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderTop: 'solid 1px black',
                                    paddingX: '20px',
                                    cursor: 'pointer',
                                }}
                            >
                                <Typography sx={typographStyle}>
                                    {e.name}
                                    {e.children ? <Box sx={{ marginLeft: 'auto' }}>▼</Box> : <></>}
                                </Typography>
                            </Box>
                        );
                    })}
                </Box>
                <Box sx={{ width: '100%', height: '100%', overflow: 'auto' }}>
                    <Outlet />
                </Box>
            </Box>
        </Box>
    );
};
