/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useState } from 'react';

import { styled } from '@mui/material';

import { SetGoodsOptions } from '@components/MakeGoods/SetGoodsOptions';
import { DragDropContainer } from '@components/dnd/DragDropContainer';
import { Header } from '@components/ui/Header';

const StyledNew = styled('div')({
    display: 'flex',
    flexDirection: 'column',

    padding: '27px 60px',

    width: '100%',
    height: '100%',
});

export const New = () => {
    const [visible, setVisible] = useState<boolean>(false);
    const show = useCallback(() => {
        setVisible(true);
    }, []);
    return (
        <StyledNew>
            <Header title="상품 등록" />
            <DragDropContainer show={show} />
            {visible && <SetGoodsOptions />}
        </StyledNew>
    );
};
