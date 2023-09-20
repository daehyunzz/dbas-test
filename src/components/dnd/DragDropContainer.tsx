import { DragDropContext, DropResult } from '@hello-pangea/dnd';
import { styled } from '@mui/material';
import { observer } from 'mobx-react-lite';

import { productStore, 리스트 } from '@/store/productStore';

import { ProductContainer, ProductWithPrice, RegisterContainer } from './DroppableContainer';

const StyledDragDropContainer = styled('div')`
    display: flex;

    width: 100%;

    gap: 19px;
`;

export const DragDropContainer = observer(() => {
    const handleDragEnd = (result: DropResult) => {
        const { droppableId: from, index: fromIndex } = result.source;
        const { destination } = result;

        if (!destination) return;

        const { droppableId: to, index: toIndex } = destination;
        productStore.업데이트(
            { list: from as 리스트, index: fromIndex },
            { list: to as 리스트, index: toIndex }
        );
    };
    return (
        <StyledDragDropContainer>
            <DragDropContext onDragEnd={handleDragEnd}>
                <ProductContainer
                    id="제품_리스트"
                    title="제품_리스트"
                    list={productStore.제품_리스트}
                />
                <ProductWithPrice
                    id="상품_리스트"
                    title="상품_리스트"
                    list={productStore.상품_리스트}
                />
                <RegisterContainer
                    id="등록_리스트"
                    title="등록_리스트"
                    list={productStore.등록_리스트}
                />
            </DragDropContext>
        </StyledDragDropContainer>
    );
});
