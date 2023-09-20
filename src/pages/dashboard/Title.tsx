import { Typography, styled } from '@mui/material';

interface Props {
    title: string;
}

const StyledTypo = styled(Typography)`
    font-family: Roboto;
    font-size: 32px;
    font-weight: 700;
    line-height: 38px;
    letter-spacing: 0.01em;
    text-align: left;
`;
export const Title = ({ title }: Props) => {
    return <StyledTypo>{title}</StyledTypo>;
};
