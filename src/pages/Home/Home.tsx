/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, styled } from '@mui/material';

import { DragDropContainer } from '@components/dnd/DragDropContainer';

const StyledHome = styled('div')`
    display: flex;
    flex-direction: column;

    padding: 27px 60px;
    box-sizing: border-box;

    width: 100%;
    height: 100%;
`;

export const Home = () => {
    return (
        <StyledHome>
            <Header title="상품 등록" />
            <DragDropContainer />
        </StyledHome>
    );
};

const Header = ({ title }: { title: string }) => {
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
