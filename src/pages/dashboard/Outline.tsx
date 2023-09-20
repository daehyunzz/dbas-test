import { ReactNode, useState } from 'react';

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import PercentOutlinedIcon from '@mui/icons-material/PercentOutlined';
import { Box, Stack, Typography, styled } from '@mui/material';

import { MenuItem } from '@components/ui/MenuItem';
import { Select } from '@components/ui/Select';
import { Spacing } from '@components/ui/Spacing';

interface CardProps {
    top: ReactNode;
    title: string;
    content: string;
    sub: string;
}

const StyledCard = styled('div')`
    display: flex;
    flex-direction: column;

    width: 416.4px;
    height: 271.2px;
    border-radius: 15.84px;
    border: 1.2px;

    padding: 26.4px;

    border: 1.2px solid #e2e8f0;
    box-shadow: 0px 1.584000825881958px 4.752002716064453px 0px #0051af1a;
`;

const Card = ({ top, title, content, sub }: CardProps) => {
    return (
        <StyledCard>
            <Box
                sx={{
                    background: '#EBF1FC',
                    width: '66px',
                    height: '66px',
                    padding: '19.01px',
                    borderRadius: '6.34px',
                    gap: '6.34px',
                }}
            >
                {top}
            </Box>
            <Spacing gap="19.2px" />
            <Typography
                sx={{
                    fontSize: '24px',
                    fontWeight: '600',
                    lineHeight: '32px',
                    letterSpacing: '0em',
                    textAlign: 'left',
                }}
            >
                {title}
            </Typography>
            <Spacing gap="28px" />
            <Typography
                sx={{
                    fontSize: '48px',
                    fontWeight: '500',
                    lineHeight: '57px',
                    letterSpacing: '0em',
                    textAlign: 'left',
                }}
            >
                {content}
            </Typography>
            <Typography
                sx={{
                    fontSize: '18px',
                    fontWeight: '300',
                    lineHeight: '21px',
                    letterSpacing: '0em',
                    textAlign: 'left',
                }}
            >
                {sub}
            </Typography>
        </StyledCard>
    );
};

const 날짜간격 = ['일간', '주간', '월간'];
const formatDate = (간격: (typeof 날짜간격)[number]) => {
    const today = new Date();
    const targetDate = new Date();

    if (간격 === '일간') {
        targetDate.setDate(today.getDate() + 1);
    } else if (간격 === '주간') {
        targetDate.setDate(today.getDate() + 7);
    } else {
        targetDate.setMonth(today.getMonth() + 1);
    }
    return targetDate.toLocaleDateString().slice(2, -1).replace(/. /g, '.');
};
export const Outline = () => {
    const [간격, set간격] = useState<(typeof 날짜간격)[number]>('일간');
    return (
        <>
            <Stack direction="row" gap="24px" pt="36px">
                <Card
                    top={<AccountCircleOutlinedIcon sx={{ width: '30px', height: '30px' }} />}
                    title="방문수"
                    content="124,962회"
                    sub="85,630회"
                />
                <Card
                    top={<PercentOutlinedIcon sx={{ width: '30px', height: '30px' }} />}
                    title="구매 전환율"
                    content="3.46%"
                    sub="2.94%"
                />
                <Card
                    top={<PaidOutlinedIcon sx={{ width: '30px', height: '30px' }} />}
                    title="방문수"
                    content="₩1,004억"
                    sub="₩ 60억"
                />
            </Stack>
            <Stack
                sx={{ position: 'absolute', top: 22, right: 23 }}
                direction="row"
                alignItems="center"
                gap="64px"
            >
                <Stack direction="row" gap="19px">
                    <Typography
                        sx={{
                            width: '92px',
                            height: '18px',

                            fontFamily: 'Inter',
                            fontSize: '15px',
                            fontWeight: '700',
                            lineHeight: '18px',
                            letterSpacing: '0em',
                            textAlign: 'left',
                        }}
                    >
                        기준 {new Date().toLocaleDateString().slice(2, -1).replace(/. /g, '.')}
                    </Typography>
                    <Typography
                        sx={{
                            width: '92px',
                            height: '18px',

                            fontFamily: 'Inter',
                            fontSize: '15px',
                            fontWeight: '700',
                            lineHeight: '18px',
                            letterSpacing: '0em',
                            textAlign: 'left',
                            color: '#2D2D2D80',
                        }}
                    >
                        비교 {formatDate(간격)}
                    </Typography>
                </Stack>
                <Select
                    value={간격}
                    onChange={(e) => {
                        set간격(e.target.value as string);
                    }}
                    sx={{
                        'width': '151px',
                        'height': '43px',
                        'padding': '10px, 12px, 10px, 12px',
                        'borderRadius': '4px',
                        'gap': '67px',
                        'border': '1px solid #E2E8F0',
                        'boxShadow':
                            '2.000000476837158px 4.000000953674316px 10.000001907348633px 0px #B4BFCD33',

                        '&.MuiOutlinedInput-root': {
                            height: '43px',
                        },

                        '& .MuiInputBase-input.MuiSelect-select': {
                            fontFamily: 'Inter',
                            fontSize: '18px',
                            fontWeight: '400',
                            lineHeight: '22px',
                            letterSpacing: '0em',
                            textAlign: 'left',
                        },
                    }}
                >
                    {날짜간격.map((item) => (
                        <MenuItem
                            key={item}
                            value={item}
                            sx={{
                                fontFamily: 'Inter',
                                fontSize: '18px',
                                fontWeight: '400',
                                lineHeight: '22px',
                                letterSpacing: '0em',
                                textAlign: 'left',
                            }}
                        >
                            {item}
                        </MenuItem>
                    ))}
                </Select>
            </Stack>
        </>
    );
};
