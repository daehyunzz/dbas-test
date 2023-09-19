import { DragDropContainer } from '@components/dnd/DragDropContainer';
import { DraggableContainer } from '@components/dnd/DraggableContainer';
import { DroppableContainer } from '@components/dnd/DroppableContainer';

export const Home = () => {
    return (
        <DragDropContainer>
            <DroppableContainer id="first">
                <DraggableContainer />
            </DroppableContainer>
        </DragDropContainer>
    );
};
