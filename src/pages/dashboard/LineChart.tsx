import { useRef, useState } from 'react';

import { Line } from 'react-chartjs-2';

import { Stack } from '@mui/material';
import 'chart.js/auto';

import { MenuItem } from '@components/ui/MenuItem';
import { Select } from '@components/ui/Select';

const Label = ({ text }: { text: string }) => {
    return (
        <Stack
            sx={{
                position: 'absolute',
                top: '88px',
                right: '43.3px',

                fontSize: '50px',
                fontWeight: '700',
                lineHeight: '70px',
                letterSpacing: '0em',
                textAlign: 'left',
            }}
        >
            {text}
        </Stack>
    );
};

const data = {
    labels: ['월', '화', '수', '목', '금', '토', '일'],
    datasets: [
        {
            data: [33, 53, 85, 41, 44, 65, 55],
            fill: false,
            borderColor: '#FF6384',
        },
        {
            data: [40, 25, 35, 51, 54, 76, 70],
            fill: false,
            borderColor: '#36A2EB',
        },
        {
            data: [20, 38, 25, 15, 42, 20, 40],
            fill: false,
            borderColor: '#FFCE56',
        },
    ],
};

const 날짜간격 = ['일간', '주간', '월간'];

export const LineChart = () => {
    const ref = useRef();
    const [간격, set간격] = useState<(typeof 날짜간격)[number]>('일간');

    const today = new Date();
    const year = today.getFullYear();
    const week = Math.floor(today.getDate() / 7);

    return (
        <Stack alignSelf="center" justifyContent="center" sx={{ marginTop: '79.248px' }}>
            <Line
                ref={ref}
                data={data}
                width="791.41px"
                height="328.32px"
                options={{
                    plugins: {
                        legend: {
                            display: false,
                        },
                    },
                }}
            />
            <Label text={`${year}년 ${week}주차`} />
            <Stack
                sx={{ position: 'absolute', top: 22, right: 23 }}
                direction="row"
                alignItems="center"
                gap="64px"
            >
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
        </Stack>
    );
};
