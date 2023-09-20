import { Box, Typography } from '@mui/material';

export const FigmaHeader: React.FC<{ children: React.ReactNode; isBorder?: boolean }> = ({
    children,
    isBorder = false,
}) => {
    return (
        <Box
            sx={{
                width: '100%',
                height: '60px',
                borderBottom: isBorder ? '1px solid #A9A9A9' : 'none',
                marginBottom: '40px',
            }}
        >
            <Typography
                sx={{
                    // width: '127px',
                    height: '38px',
                    fontWeight: '700',
                    fontSize: '32px',
                    lineHeight: '37.5px',
                }}
            >
                {children}
            </Typography>
        </Box>
    );
};
