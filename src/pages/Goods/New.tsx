/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, styled } from '@mui/material';

import { SetProductOptions } from '@components/MakeProduct/SetProductOptions';
import { DragDropContainer } from '@components/dnd/DragDropContainer';

const StyledNew = styled('div')`
    display: flex;
    flex-direction: column;

    padding: 27px 60px;
    box-sizing: border-box;

    width: 100%;
    height: 100%;
`;

export const New = () => {
    return (
        <StyledNew>
            <Header title="상품 등록" />
            <DragDropContainer />
            <SetProductOptions />
        </StyledNew>
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
