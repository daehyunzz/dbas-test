import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Stack, Typography } from '@mui/material';

type ScheduleCardProps = {
    title: string;
    content: string;
    date: string;
    name: string;
};
export const ScheduleCard = ({ title, content, date, name }: ScheduleCardProps) => {
    return (
        <Stack
            direction="column"
            width="100%"
            sx={{
                borderRadius: '10px',
                padding: '26px',
                border: '1px solid rgba(0, 0, 0, 1)',
            }}
        >
            <Stack direction="row" width="100%">
                <ChevronRightIcon sx={{ width: '32px', height: '32px' }} />
                <Stack
                    direction="column"
                    ml="21px"
                    sx={{
                        'flexGrow': 1,
                        '& p': {
                            fontSize: '24px',
                            lineHeight: '36px',
                        },
                    }}
                >
                    <Stack direction="row" justifyContent="space-between" width="100%">
                        <Typography fontWeight="700">{title}</Typography>
                        <Typography
                            fontWeight="500"
                            sx={{
                                opacity: '0.6',
                            }}
                            textAlign="right"
                        >
                            {name} | {date}
                        </Typography>
                    </Stack>
                    <Typography fontWeight="500">{content}</Typography>
                </Stack>
            </Stack>
        </Stack>
    );
};
