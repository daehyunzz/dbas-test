import { Stack, Typography } from '@mui/material';

export const Header = ({ title }: { title: string }) => {
    return (
        <Stack
            direction="row"
            sx={{
                borderBottom: '1px solid black',
            }}
        >
            <Typography sx={{ height: '85px', width: '100%', fontSize: '32px', fontWeight: 700 }}>
                {title}
            </Typography>
        </Stack>
    );
};
