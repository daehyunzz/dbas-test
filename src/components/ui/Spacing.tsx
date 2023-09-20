import { Box } from '@mui/material';

interface Props {
    gap: string;
}
export const Spacing = ({ gap }: Props) => {
    return <Box sx={{ width: '100%', height: gap }} />;
};
