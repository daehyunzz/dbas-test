import { Box } from '@mui/material';

export const Header = ({ title }: { title: string }) => {
    return (
        <Box
            sx={{
                height: '85px',
                width: '100%',
                fontSize: '32px',
                fontWeight: 700,
                borderBottom: '1px solid black',
            }}
        >
            {title}
        </Box>
    );
};
