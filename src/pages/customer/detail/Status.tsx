import { type SyntheticEvent, useState } from 'react';

import { Box, MenuItem, Select, Stack, Tab, Tabs, Typography } from '@mui/material';

import { InfoItem } from '@pages/customer/detail/InfoItem';
import { ScheduleCard } from '@pages/customer/detail/ScheduleCard';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel({ children, value, index, ...props }: TabPanelProps) {
    return (
        <Box role="tabpanel" hidden={value !== index} {...props}>
            {value === index && children}
        </Box>
    );
}

const INFO_ITEMS = [
    { title: '마지막 연락일', content: '2023.09.03' },
    { title: '담당자', content: '김영업' },
    { title: '연락 방법', content: '메세지' },
    { title: '내용', content: '[이벤트 당첨 안내: 축하드립니다! 🎉]' },
];

// WAPL 미팅
// 김영업 | 2023-10-04 13:00
// 티맥 글로벌에 제안할 티베로 제품 소개 PT
const SCHEDULE_ITEMS = [
    {
        header: '다가오는 일정',
        items: [
            {
                title: 'WAPL 미팅',
                content: '티맥 글로벌에 제안할 티베로 제품 소개 PT',
                date: '2023-10-04 13:00',
                name: '김영업',
            },
        ],
    },
    {
        header: '2023년 9월',
        items: [
            {
                title: '크레딧 발행',
                content: '이벤트 당첨 안내 메세지 전송 및 티베로 무료 체험 안내 팔로업',
                date: '2023-09-03 15:30',
                name: '김영업',
            },
            {
                title: 'WAPL Talk',
                content: '이벤트 안내 메세지 전송',
                date: '2023-08-24 11:00',
                name: '김영업',
            },
        ],
    },
];

export const Status = () => {
    const [currentTab, setCurrentTab] = useState(0);

    const handleChange = (_: SyntheticEvent, newValue: number) => {
        setCurrentTab(newValue);
    };

    return (
        <Stack direction="column" width="100%" px="37px">
            <Stack
                direction="row"
                justifyContent="space-between"
                sx={{
                    'height': '61px',
                    'overflow': 'hidden',
                    'borderRadius': '9999px',
                    '& > *': {
                        flexGrow: 1,
                        fontSize: '24px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    },
                }}
            >
                <Box
                    sx={{
                        'bgcolor': 'rgba(0, 68, 141, 1)',
                        'color': 'rgba(255, 255, 255, 1)',
                        'fontWeight': '700',
                        'position': 'relative',
                        '&:after': {
                            content: '""',
                            zIndex: 1,
                            position: 'absolute',
                            top: '0',
                            left: 'calc(100% - 10px)',
                            height: '100%',
                            borderTop: '30px solid #fff',
                            borderBottom: '30px solid #fff',
                            borderLeft: '15px solid rgba(0, 68, 141, 1)',
                        },
                    }}
                >
                    잠재 고객
                </Box>
                <Box
                    sx={{
                        'bgcolor': 'rgba(243, 243, 243, 1)',
                        'color': 'rgba(0, 0, 0, 1)',
                        'fontWeight': '500',
                        'position': 'relative',
                        '&:before': {
                            content: '""',
                            position: 'absolute',
                            top: '0',
                            left: '3px',
                            height: '100%',
                            borderTop: '30px solid rgba(243, 243, 243, 1)',
                            borderBottom: '30px solid rgba(243, 243, 243, 1)',
                            borderLeft: '15px solid #fff',
                        },
                        '&:after': {
                            content: '""',
                            position: 'absolute',
                            zIndex: 1,
                            top: '0',
                            left: 'calc(100% - 10px)',
                            height: '100%',
                            borderTop: '30px solid #fff',
                            borderBottom: '30px solid #fff',
                            borderLeft: '15px solid rgba(243, 243, 243, 1)',
                        },
                    }}
                >
                    일반 고객
                </Box>
                <Box
                    sx={{
                        'bgcolor': 'rgba(243, 243, 243, 1)',
                        'color': 'rgba(0, 0, 0, 1)',
                        'fontWeight': '500',
                        'position': 'relative',
                        '&:before': {
                            content: '""',
                            position: 'absolute',
                            top: '0',
                            left: '3px',
                            height: '100%',
                            borderTop: '30px solid rgba(243, 243, 243, 1)',
                            borderBottom: '30px solid rgba(243, 243, 243, 1)',
                            borderLeft: '15px solid #fff',
                        },
                    }}
                >
                    충성 고객
                </Box>
            </Stack>
            <Stack direction="row" mt="34px" px="29px" spacing="96px">
                {INFO_ITEMS.map((item) => (
                    <InfoItem title={item.title} content={item.content} key={item.title} />
                ))}
            </Stack>
            <Tabs
                value={currentTab}
                onChange={handleChange}
                sx={{
                    'mt': '59px',
                    'borderBottom': '1px solid rgba(0, 0, 0, 0.3)',

                    '& .MuiTabs-indicator': {
                        backgroundColor: 'rgba(0, 68, 141, 1)',
                        height: '4px',
                    },
                    '& .MuiTab-root': {
                        paddingX: '23px',
                        paddingY: '10px',
                        minWidth: '0',
                        fontSize: '26px',
                        opacity: '0.3',
                        fontWeight: '400',
                        color: 'rgba(0, 0, 0, 1)',
                    },
                    '& .Mui-selected': {
                        fontWeight: '700',
                        opacity: '1',
                    },
                }}
            >
                <Tab label="활동" />
                <Tab label="세부 사항" />
                <Tab label="일정" />
                <Tab label="노트" />
            </Tabs>
            <CustomTabPanel value={currentTab} index={0}>
                <Stack direction="column" pt="40px">
                    <Select
                        value="전체"
                        sx={{
                            'paddingLeft': '25px',
                            'paddingRight': '25px',
                            'paddingTop': '0',
                            'paddingBottom': '0',
                            'width': '149px',
                            'alignSelf': 'flex-start',
                            '&.MuiOutlinedInput-root': {
                                'height': '55px',
                                '& fieldset': {
                                    borderColor: '#000',
                                },
                            },
                            '& .MuiInputBase-input.MuiSelect-select': {
                                fontWeight: '400',
                                fontSize: '28px',
                                minHeight: 'auto',
                                paddingLeft: 0,
                                paddingRight: 0,
                            },
                        }}
                    >
                        <MenuItem value="전체">전체</MenuItem>
                    </Select>
                    <Stack direction="column" mt="23px" spacing="7px">
                        {SCHEDULE_ITEMS.map(({ header, items }) => (
                            <Stack direction="column" key={header}>
                                <Typography fontWeight="500" fontSize="24px" lineHeight="36px">
                                    {header}
                                </Typography>
                                <Stack direction="column" mt="9px" spacing="12px">
                                    {items.map((item) => (
                                        <ScheduleCard
                                            title={item.title}
                                            content={item.content}
                                            date={item.date}
                                            name={item.name}
                                            key={item.title}
                                        />
                                    ))}
                                </Stack>
                            </Stack>
                        ))}
                    </Stack>
                </Stack>
            </CustomTabPanel>
        </Stack>
    );
};
