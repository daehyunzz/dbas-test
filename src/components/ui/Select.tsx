import MuiSelect from '@mui/material/Select';
import { styled } from '@mui/system';

export const Select = styled(MuiSelect)({
    'paddingLeft': '25px',
    'paddingRight': '25px',
    'paddingTop': '0',
    'paddingBottom': '0',
    '&.MuiOutlinedInput-root': {
        'height': '64px',
        '& fieldset': {
            borderColor: '#000',
        },
    },
    '& .MuiInputBase-input.MuiSelect-select': {
        fontWeight: '400',
        fontSize: '28px',
        minHeight: 'auto',
        paddingLeft: 0,
        paddingRight: 0,
    },
});
