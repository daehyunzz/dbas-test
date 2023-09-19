import MuiButton from '@mui/material/Button';
import MuiMenuItem from '@mui/material/MenuItem';
import MuiSelect from '@mui/material/Select';
import MuiTextField from '@mui/material/TextField';
import { styled } from '@mui/system';

export const Button = styled(MuiButton)({
    height: '64px',
    fontWeight: '400',
    fontSize: '26px',
    lineHeight: '30.47px',
    color: '#969696',
    borderColor: '#000',
    paddingLeft: '25px',
    paddingRight: '25px',
});

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
    },
});

export const MenuItem = styled(MuiMenuItem)({
    fontWeight: '400',
    fontSize: '28px',
    lineHeight: '32.81px',
});
