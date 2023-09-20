/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, styled } from '@mui/material';

import { SetGoodsOptions } from '@components/MakeGoods/SetGoodsOptions';
import { DragDropContainer } from '@components/dnd/DragDropContainer';

const StyledNew = styled('div')({
    display: 'flex',
    flexDirection: 'column',

    padding: '27px 60px',

    width: '100%',
    height: '100%',
});

export const New = () => {
    return (
        <StyledNew>
            <Header title="상품 등록" />
            <DragDropContainer />
            <SetGoodsOptions />
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
