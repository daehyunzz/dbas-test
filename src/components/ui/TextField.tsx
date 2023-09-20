import MuiTextField from '@mui/material/TextField';
import { styled } from '@mui/system';

export const TextField = styled(MuiTextField)({
    '& .MuiOutlinedInput-root': {
        'minHeight': '64px',
        '& fieldset': {
            borderColor: '#000',
        },
    },
    '& .MuiInputBase-input': {
        fontWeight: '400',
        fontSize: '28px',
        lineHeight: '32.81px',
        paddingLeft: '25px',
        paddingRight: '25px',
        paddingTop: '0',
        paddingBottom: '0',
    },

    '& .MuiInputBase-multiline': {
        paddingLeft: 0,
        paddingRight: 0,
    },
});
