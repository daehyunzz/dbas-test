import type { ReactNode } from 'react';

import { Edit } from '@mui/icons-material';
import { Avatar, Button, Divider, Stack, Typography } from '@mui/material';

import { InfoItem } from './InfoItem';

type IconButtonProps = {
    icon: ReactNode;
    text: string;
};
const IconButton = ({ icon, text }: IconButtonProps) => {
    return (
        <Stack direction="column" alignItems="center">
            {icon}
            <Typography>{text}</Typography>
        </Stack>
    );
};

const ICON_BUTTONS = [
    { icon: <Edit />, text: '수정1' },
    { icon: <Edit />, text: '수정2' },
    { icon: <Edit />, text: '수정3' },
    { icon: <Edit />, text: '수정4' },
    { icon: <Edit />, text: '수정5' },
];

const INFO_ITEMS = [
    { title: '고객명1', content: '김민수' },
    { title: '고객명2', content: '김민수' },
    { title: '고객명3', content: '김민수' },
    { title: '고객명4', content: '김민수' },
    { title: '고객명5', content: '김민수' },
    { title: '고객명6', content: '김민수' },
];

export const Info = () => {
    return (
        <Stack direction="column" width="374px">
            <Stack direction="row">
                <Avatar
                    sx={{
                        width: '90px',
                        height: '90px',
                    }}
                    alt="김민수"
                />
                <Stack direction="column">
                    <Typography>김민수</Typography>
                    <Typography>대표이사</Typography>
                </Stack>
                <Stack>
                    <Button variant="outlined">캠페인 등록</Button>
                </Stack>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
                {ICON_BUTTONS.map((item) => (
                    <IconButton icon={item.icon} text={item.text} key={item.text} />
                ))}
            </Stack>
            <Divider />
            <Stack direction="column">
                <Stack direction="row">
                    <Typography>고객 정보</Typography>
                    <Button variant="outlined">수정</Button>
                </Stack>
                {INFO_ITEMS.map((item) => (
                    <InfoItem title={item.title} content={item.content} key={item.title} />
                ))}
            </Stack>
        </Stack>
    );
};
