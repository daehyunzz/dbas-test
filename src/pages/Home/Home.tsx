/* eslint-disable @typescript-eslint/no-explicit-any */
import { DragDropContext, Draggable, DropResult, Droppable } from '@hello-pangea/dnd';
import { styled } from '@mui/material';
import { observer } from 'mobx-react-lite';

import { 등록, 상품, 제품 } from '@/interfaces/product';
import { productStore, 리스트 } from '@/store/product-store';

const StyledDragDropContainer = styled('div')`
    display: flex;

    width: 100%;

    background: #e2e2e2;
`;

const StyledDroppableContainer = styled('ul')`
    display: flex;
    flex-direction: column;

    width: 488px;
    height: 742px;
`;

const StyledDraggableContainer = styled('li')`
    display: flex;
    flex-direction: column;

    width: 467px;
    height: 140px;
`;
interface Props {
    id: string;
    title: string;
    list: (제품 | 상품 | 등록)[];
}

export const Home = observer(() => {
    const handleDragEnd = (result: DropResult) => {
        console.log(result);

        const { droppableId: from, index: fromIndex } = result.source;
        const { destination } = result;

        if (!destination) return;

        const { droppableId: to, index: toIndex } = destination;
        productStore.업데이트(
            { list: from as 리스트, index: fromIndex },
            { list: to as 리스트, index: toIndex }
        );

        console.log('check', productStore.등록_리스트);
    };

    return (
        <StyledDragDropContainer>
            <DragDropContext onDragEnd={handleDragEnd}>
                {productStore.요소_리스트.map(({ key, value }) => (
                    <DndDroppable id={key} key={key} title={key} list={value} />
                ))}
                {/*             
                <DndDroppable
                    id="상품_리스트"
                    title="상품_리스트"
                    list={productStore.상품_리스트}
                />
                <DndDroppable
                    id="제품_리스트"
                    title="제품_리스트"
                    list={productStore.제품_리스트}
                />
                <DndDroppable
                    id="등록_리스트"
                    title="등록_리스트"
                    list={productStore.등록_리스트}
                /> */}
            </DragDropContext>
        </StyledDragDropContainer>
    );
});

// 떨구기가 가능한 영역
const DndDroppable = ({ id, title, list }: Props) => {
    return (
        <Droppable droppableId={id}>
            {(droppableProvider) => (
                <StyledDroppableContainer
                    ref={droppableProvider.innerRef}
                    {...droppableProvider.droppableProps}
                >
                    <h2>{title}</h2>
                    {list.map((element, index) => (
                        <Draggable index={index} key={element.id} draggableId={`${element.id}`}>
                            {(draggableProvider) => (
                                <StyledDraggableContainer
                                    ref={draggableProvider.innerRef}
                                    {...draggableProvider.draggableProps}
                                    {...draggableProvider.dragHandleProps}
                                >
                                    {element.name}
                                </StyledDraggableContainer>
                            )}
                        </Draggable>
                    ))}
                    {droppableProvider.placeholder}
                </StyledDroppableContainer>
            )}
        </Droppable>
    );
};
// export const DndContainer = ({ id }: Props) => {
//     return (
//         <StyledDragDropContainer>
//             <h1>Todo App</h1>
//             <Droppable droppableId="products">
//                 {(droppableProvider) => (
//                     <ul ref={droppableProvider.innerRef} {...droppableProvider.droppableProps}>
//                         {todos.map((todo, index) => (
//                             <Draggable index={index} key={todo.id} draggableId={`${todo.id}`}>
//                                 {(draggableProvider) => (
//                                     <li
//                                         ref={draggableProvider.innerRef}
//                                         {...draggableProvider.draggableProps}
//                                         {...draggableProvider.dragHandleProps}
//                                     >
//                                         {todo.title}
//                                     </li>
//                                 )}
//                             </Draggable>
//                         ))}
//                         {droppableProvider.placeholder}
//                     </ul>
//                 )}
//             </Droppable>
//         </StyledDragDropContainer>
//     );
// };
