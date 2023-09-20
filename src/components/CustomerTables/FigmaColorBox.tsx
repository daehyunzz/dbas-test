import { Box, Typography } from '@mui/material';

type ColorBoxProps = {
    text: string;
    color?: 'Red' | 'LightBlue' | 'Yellow' | 'Navy' | 'Green';
    height?: '35.2px' | '42px' | '55px' | '100%';
    width?: '88.32px' | '306px' | '214px' | '100%';
};

export const FigmaColorBox: React.FC<ColorBoxProps> = ({
    text,
    color = 'Red',
    height = '100%',
    width = '100%',
}) => {
    let backgroundColor = '#DB3246';
    switch (color) {
        case 'Red':
            backgroundColor = '#DB3246';
            break;
        case 'LightBlue':
            backgroundColor = '#68A5FF';
            break;
        case 'Yellow':
            backgroundColor = '#FFD338';
            break;
        case 'Navy':
            backgroundColor = '#00448D';
            break;
        case 'Green':
            backgroundColor = '#79C85D';
            break;
        default:
    }
    const style = {
        width,
        height,
        backgroundColor,
        display: 'flex',
        borderRadius: `1vh`,
    };
    return (
        <>
            <Box sx={style}>
                <Typography sx={{ color: 'white' }}>{text}</Typography>
            </Box>
        </>
    );
};
