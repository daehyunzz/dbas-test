import { Stack, Typography } from '@mui/material';

type InfoItemProps = {
    title: string;
    content: string;
};
export const InfoItem = ({ title, content }: InfoItemProps) => {
    return (
        <Stack direction="column">
            <Typography
                fontWeight="500"
                fontSize="24px"
                lineHeight="36px"
                color="rgba(0, 0, 0, 0.6)"
            >
                {title}
            </Typography>
            <Typography fontWeight="500" fontSize="24px" lineHeight="36px" color="rgba(0, 0, 0, 1)">
                {content}
            </Typography>
        </Stack>
    );
};
