import { Stack, Typography } from '@mui/material';

type ScheduleCardProps = {
    title: string;
    content: string;
    date: string;
    name: string;
};
export const ScheduleCard = ({ title, content, date, name }: ScheduleCardProps) => {
    return (
        <Stack direction="column" sx={{ width: '100%' }}>
            <Stack direction="row" justifyContent="space-between">
                <Typography>{title}</Typography>
                <Typography>{date}</Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
                <Typography>{content}</Typography>
                <Typography>{name}</Typography>
            </Stack>
        </Stack>
    );
};
