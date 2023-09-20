import type { ReactNode } from 'react';

import { Edit } from '@mui/icons-material';
import { Avatar, Button, Divider, IconButton, Stack, Typography } from '@mui/material';

import { InfoItem } from './InfoItem';

type IconActionProps = {
    icon: ReactNode;
    text: string;
};
const IconAction = ({ icon, text }: IconActionProps) => {
    return (
        <Stack direction="column" alignItems="center">
            <IconButton
                sx={{
                    width: '50px',
                    height: '50px',
                    bgcolor: 'rgba(243, 243, 243, 1)',
                    border: '1px solid rgba(0, 0, 0, 1)',
                    color: 'rgba(0, 0, 0, 1)',
                }}
            >
                {icon}
            </IconButton>
            <Typography fontSize="16px" lineHeight="36px">
                {text}
            </Typography>
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
    { title: '휴대폰번호', content: '010 1234 1234' },
    { title: '업무 번호', content: '031 1234 1234' },
    { title: '이메일', content: 'tmax_choi@tmaxglobal.com' },
    { title: '소속 기관', content: '널담' },
    { title: '직급', content: '대표이사' },
    { title: '영업 담당자', content: '김영업 영업 팀장' },
];

export const Info = () => {
    return (
        <Stack
            direction="column"
            width="374px"
            sx={{
                border: '1px solid black',
                paddingY: '16px',
                paddingX: '17.5px',
                borderRadius: '10px',
            }}
        >
            <Stack direction="row" justifyContent="space-between">
                <Avatar
                    sx={{
                        width: '90px',
                        height: '90px',
                    }}
                    alt="김민수"
                />
                <Stack direction="column" alignItems="flex-start" justifyContent="center">
                    <Typography fontWeight="700" fontSize="30px" lineHeight="36px">
                        김민수
                    </Typography>
                    <Typography fontWeight="500" fontSize="24px" lineHeight="36px">
                        대표이사
                    </Typography>
                </Stack>
                <Button
                    sx={{
                        mt: '10px',
                        padding: '0px',
                        fontSize: '15px',
                        fontWeight: '600',
                        boxShadow: 'none',
                        width: '115px',
                        height: '36px',
                        bgcolor: 'rgba(104, 165, 255, 1)',
                    }}
                    variant="contained"
                >
                    캠페인 등록
                </Button>
            </Stack>
            <Stack direction="row" justifyContent="space-between" mt="45px">
                {ICON_BUTTONS.map((item) => (
                    <IconAction icon={item.icon} text={item.text} key={item.text} />
                ))}
            </Stack>
            <Divider
                sx={{
                    mt: '17px',
                    mb: '20px',
                    borderColor: 'rgba(0, 0, 0, 1)',
                    mx: '-17.5px',
                }}
            />
            <Stack direction="column">
                <Stack direction="row" justifyContent="space-between">
                    <Typography fontWeight="700" fontSize="26px" lineHeight="36px">
                        고객 정보
                    </Typography>
                    <Button
                        variant="outlined"
                        sx={{
                            width: '73px',
                            height: '33px',
                            borderRadius: '16.71px',
                            borderColor: 'rgba(0, 0, 0, 0.2)',
                            color: 'rgba(0, 0, 0, 1)',
                        }}
                    >
                        편집
                    </Button>
                </Stack>
                <Stack direction="column" mt="20px" spacing="20px">
                    {INFO_ITEMS.map((item) => (
                        <InfoItem title={item.title} content={item.content} key={item.title} />
                    ))}
                </Stack>
            </Stack>
        </Stack>
    );
};
