import { Box } from '@mui/material';

type FigmaButtonProps = {
    width?: string | null;
    text: string;
    onClick?: (event?: React.MouseEvent<HTMLElement>) => void;
    type?: 'white' | 'blue';
};

export const FigmaButton: React.FC<FigmaButtonProps> = ({
    width = null,
    text,
    onClick = () => {},
    type = 'blue',
}) => {
    const style =
        type === 'blue'
            ? {
                  width: '144px',
                  height: '63px',
                  radius: '4px',
                  border: '1px none #000000',
                  backgroundColor: '#00448D',
                  fontSize: '28px',
                  fontWeight: '600',
                  color: '#FFFFFF',
                  display: 'flex',
              }
            : {
                  width: '144px',
                  height: '63px',
                  radius: '4px',
                  border: '1px solid #000000',
                  fontSize: '28px',
                  fontWeight: '600',
                  display: 'flex',
              };

    if (width) {
        style.width = width;
    }

    return (
        <Box role="button" sx={style} onClick={(e) => onClick(e)}>
            <Box sx={{ margin: 'auto' }}>{text}</Box>
        </Box>
    );
};
