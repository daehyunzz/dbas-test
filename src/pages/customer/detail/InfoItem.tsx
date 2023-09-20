import { Stack, Typography } from '@mui/material';

type InfoItemProps = {
    title: string;
    content: string;
};
export const InfoItem = ({ title, content }: InfoItemProps) => {
    return (
        <Stack direction="column">
            <Typography>{title}</Typography>
            <Typography>{content}</Typography>
        </Stack>
    );
};
