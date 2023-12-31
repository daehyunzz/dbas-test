import { useState } from 'react';

import { Link, Outlet, useLocation } from 'react-router-dom';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {
    Box,
    Button,
    Collapse,
    Divider,
    List,
    ListItem,
    ListItemButton,
    Stack,
} from '@mui/material';

import logo from '@/assets/focusLogo.svg';

type NavLink = {
    name: string;
    children: false;
    url: string;
};

type LinkWithChildren = {
    name: string;
    children: NavLink[];
};

const LINKS: (NavLink | LinkWithChildren)[] = [
    { name: '제품 관리', children: false, url: '/product' },
    { name: '상품 관리', children: false, url: '/goods' },
    {
        name: '판매/주문 관리',
        children: [
            { name: '고객 등록', children: false, url: '/customer/new' },
            { name: '고객 조회', children: false, url: '/customer' },
            { name: '고객 대시보드', children: false, url: '/customer/dashboard' },
        ],
    },
    {
        name: '견적/청구 관리',
        children: [
            { name: '고객 등록', children: false, url: '/customer/new' },
            { name: '고객 조회', children: false, url: '/customer' },
            { name: '고객 대시보드', children: false, url: '/customer/dashboard' },
        ],
    },
    {
        name: '매출 관리',
        children: [
            { name: '고객 등록', children: false, url: '/customer/new' },
            { name: '고객 조회', children: false, url: '/customer' },
            { name: '고객 대시보드', children: false, url: '/customer/dashboard' },
        ],
    },
    {
        name: '고객 관리',
        children: [
            { name: '고객 등록', children: false, url: '/customer/new' },
            { name: '고객 조회', children: false, url: '/customer' },
            { name: '고객 대시보드', children: false, url: '/customer/dashboard' },
        ],
    },
    {
        name: '마케팅 관리',
        children: [
            { name: '타겟 고객 관리', children: false, url: '/marketing/customer-management' },
            { name: '마케팅 콘텐츠 관리 ', children: false, url: '/marketing/contents-management' },
        ],
    },
];

const Header = () => {
    return (
        <Stack
            direction="row"
            sx={{
                width: '100%',
                bgcolor: '#FAFAFA',
                height: '68px',
                borderBottom: '1px solid rgba(188, 188, 188, 1)',
            }}
            justifyContent="space-between"
            alignItems="center"
            px="40px"
        >
            <img src={logo} />
            <NotificationsIcon />
        </Stack>
    );
};

export const Layout: React.FC = () => {
    const location = useLocation();
    const [isOpenedNames, setIsOpenedNames] = useState<string[]>([]);

    return (
        <Box sx={{ width: '100%', height: '100%', overflow: 'hidden' }}>
            <Header />
            <Box sx={{ display: 'flex', height: '100%' }}>
                <Stack
                    width="300px"
                    height="100%"
                    sx={{
                        borderRight: '1px solid rgba(188, 188, 188, 1)',
                        flexShrink: 0,
                    }}
                >
                    <Button
                        component={Link}
                        to="/"
                        variant="text"
                        sx={{
                            height: '54px',
                            fontSize: '20px',
                            justifyContent: 'flex-start',
                            px: '20px',
                            py: '15px',
                            mt: '40px',
                            mx: '20px',
                            color: 'black',
                        }}
                        startIcon={<HomeOutlinedIcon sx={{ mr: '8px' }} />}
                    >
                        홈
                    </Button>
                    <Divider
                        sx={{
                            mt: '10px',
                            mb: '20px',
                            mx: '20px',
                            borderColor: 'rgba(169, 169, 169, 1)',
                        }}
                    />
                    <List>
                        {LINKS.map((link) => {
                            const isActive = 'url' in link ? link.url === location.pathname : false;
                            return (
                                <ListItem
                                    key={link.name}
                                    disablePadding
                                    sx={{
                                        borderTop: '1px solid #000',
                                        px: '20px',
                                        py: '6px',
                                        display: 'flex',
                                    }}
                                >
                                    {link.children ? (
                                        <Stack width="100%">
                                            <Stack
                                                component={Button}
                                                direction="row"
                                                alignItems="center"
                                                justifyContent="space-between"
                                                width="100%"
                                                height="42px"
                                                px="20px"
                                                py="10px"
                                                sx={{
                                                    border: 'unset',
                                                    font: 'inherit',
                                                    cursor: 'pointer',
                                                    borderRadius: '8px',
                                                    backgroundColor: isActive
                                                        ? 'rgba(0, 68, 141, 0.1)'
                                                        : 'white',
                                                    textDecoration: 'none',
                                                    color: 'black',
                                                }}
                                                onClick={() => {
                                                    if (isOpenedNames.includes(link.name)) {
                                                        setIsOpenedNames(
                                                            isOpenedNames.filter(
                                                                (name) => name !== link.name
                                                            )
                                                        );
                                                    } else {
                                                        setIsOpenedNames([
                                                            ...isOpenedNames,
                                                            link.name,
                                                        ]);
                                                    }
                                                }}
                                            >
                                                {link.name}
                                                {
                                                    <ExpandMoreIcon
                                                        width="24px"
                                                        height="24px"
                                                        sx={{
                                                            transform: isOpenedNames.includes(
                                                                link.name
                                                            )
                                                                ? 'rotate(180deg)'
                                                                : 'rotate(0deg)',
                                                            transition: 'transform 0.3s',
                                                        }}
                                                    />
                                                }
                                            </Stack>
                                            <Collapse
                                                in={isOpenedNames.includes(link.name)}
                                                timeout="auto"
                                                unmountOnExit
                                            >
                                                <List
                                                    disablePadding
                                                    sx={{
                                                        paddingLeft: '20px',
                                                    }}
                                                >
                                                    {link.children.map((child) => {
                                                        return (
                                                            <ListItemButton
                                                                key={child.name}
                                                                component={Link}
                                                                to={child.url}
                                                            >
                                                                {child.name}
                                                            </ListItemButton>
                                                        );
                                                    })}
                                                </List>
                                            </Collapse>
                                        </Stack>
                                    ) : (
                                        <Stack
                                            component={Link}
                                            to={link.url}
                                            direction="row"
                                            alignItems="center"
                                            width="100%"
                                            height="42px"
                                            px="20px"
                                            py="10px"
                                            sx={{
                                                borderRadius: '8px',
                                                backgroundColor: isActive
                                                    ? 'rgba(0, 68, 141, 0.1)'
                                                    : 'white',
                                                textDecoration: 'none',
                                                color: 'black',
                                            }}
                                        >
                                            {link.name}
                                        </Stack>
                                    )}
                                </ListItem>
                            );
                        })}
                    </List>
                </Stack>

                <Box sx={{ width: '100%', height: '100%', overflow: 'auto' }}>
                    <Outlet />
                </Box>
            </Box>
        </Box>
    );
};
