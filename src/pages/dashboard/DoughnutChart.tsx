import { useRef } from 'react';

import { Doughnut } from 'react-chartjs-2';

import { Box, Stack, Typography } from '@mui/material';

const list = [
    [
        {
            data: 60,
            color: '#FF6384',
            text: '잠재 고객(60%)',
        },
        {
            data: 30,
            color: '#36A2EB',
            text: '일반 고객(30%)',
        },
        {
            data: 10,
            color: '#FFCE56',
            text: '충성 고객(10%)',
        },
    ],
];

const Label = ({ color, text }: { color: string; text: string }) => {
    return (
        <Stack direction="row" alignItems="center" gap="17.04px">
            <Box
                sx={{ width: '11.21px', height: '11.21px', borderRadius: '50%', background: color }}
            />
            <Typography
                sx={{
                    fontSize: '17px',
                    fontWeight: '400',
                    lineHeight: '20px',
                    letterSpacing: '0.01em',
                    textAlign: 'left',
                }}
            >
                {text}
            </Typography>
        </Stack>
    );
};

const Labels = ({ list }: { list: { data: number; color: string; text: string }[] }) => {
    return (
        <Stack sx={{ position: 'absolute', top: '35.4px', right: '30.51px' }} gap="16.84px">
            {list.map(({ color, text }) => (
                <Label key={text} color={color} text={text} />
            ))}
        </Stack>
    );
};

export const DoughnutChart = () => {
    const ref = useRef();
    const randomIndex = Math.floor(Math.random() * list.length);
    const selectedData: { data: number; color: string; text: string }[] = list[randomIndex];
    const data = {
        datasets: [
            {
                data: selectedData.map(({ data }) => data),
                backgroundColor: selectedData.map(({ color }) => color),
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                borderWidth: [1, 3, 6],
            },
        ],
    };

    // const most = Math.max(...selectedData.map(({ data }) => data));

    return (
        <Stack
            alignSelf="center"
            justifyContent="center"
            sx={{ height: '475.81px', padding: '76.23px' }}
        >
            <Doughnut
                ref={ref}
                width={315}
                height={315}
                data={data}
                options={{
                    responsive: false,
                    cutout: '70%',
                }}
            />
            <Labels list={list[randomIndex]} />
            <Stack
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, 0)',
                }}
                justifyContent="center"
                alignItems="center"
            >
                <Typography
                    sx={{
                        fontSize: '21px',
                        fontWeight: '400',
                        lineHeight: '25px',
                        letterSpacing: '-0.01em',
                        textAlign: 'left',
                        color: '#2D2D2D',
                    }}
                >
                    잠재고객
                </Typography>
                <Typography
                    sx={{
                        fontSize: '45px',
                        fontWeight: '700',
                        lineHeight: '53px',
                        letterSpacing: '-0.01em',
                        textAlign: 'left',
                        color: '#2D2D2D',
                    }}
                >
                    60%
                </Typography>
            </Stack>
        </Stack>
    );
};
