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
        <Stack direction="column">
            <Stack direction="row">
                <Typography>잠재 고객</Typography>
                <Typography>잠재 고객</Typography>
                <Typography>잠재 고객</Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
                {INFO_ITEMS.map((item) => (
                    <InfoItem title={item.title} content={item.content} key={item.title} />
                ))}
            </Stack>
            <Tabs value={currentTab} onChange={handleChange}>
                <Tab label="활동" />
                <Tab label="세부 사항" />
                <Tab label="일정" />
                <Tab label="노트" />
            </Tabs>
            <CustomTabPanel value={currentTab} index={0}>
                <Select value="전체">
                    <MenuItem value="전체">전체</MenuItem>
                </Select>
                {SCHEDULE_ITEMS.map(({ header, items }) => (
                    <Stack direction="column">
                        <Typography>{header}</Typography>
                        {items.map((item) => (
                            <ScheduleCard
                                title={item.title}
                                content={item.content}
                                date={item.date}
                                name={item.name}
                            />
                        ))}
                    </Stack>
                ))}
            </CustomTabPanel>
        </Stack>
    );
};
