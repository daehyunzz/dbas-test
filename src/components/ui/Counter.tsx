import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';

import { TextField } from '@components/ui/TextField';

type CounterProps = {
    value: number;
    onChange: (value: number) => void;
    min?: number;
    max?: number;
};

export function Counter({ value, onChange, min = 0, max = Infinity }: CounterProps) {
    function handleIncrement() {
        if (value < max) {
            onChange(value + 1);
        }
    }

    function handleDecrement() {
        if (value > min) {
            onChange(value - 1);
        }
    }

    function handleBlur() {
        if (value < min) {
            onChange(min);
        } else if (value > max) {
            onChange(max);
        }
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const value = Number(event.target.value);
        if (Number.isNaN(value)) {
            onChange(min);
        } else if (value < min) {
            onChange(min);
        } else if (value > max) {
            onChange(max);
        } else {
            onChange(value);
        }
    }

    return (
        <Stack direction="row" spacing={1}>
            <IconButton
                onClick={handleDecrement}
                size="small"
                sx={{
                    width: 40,
                    height: 40,
                }}
            >
                <RemoveIcon />
            </IconButton>
            <TextField
                fullWidth
                size="small"
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            />
            <IconButton
                onClick={handleIncrement}
                size="small"
                sx={{
                    width: 40,
                    height: 40,
                }}
            >
                <AddIcon />
            </IconButton>
        </Stack>
    );
}
