import { PropsWithChildren } from 'react';

import { Droppable } from '@hello-pangea/dnd';
import { styled } from '@mui/material/styles';

const StyledDroppable = styled('div')`
    background: red;
`;

interface Props {
    id: string;
}
export const DroppableContainer = ({ id }: PropsWithChildren<Props>) => {
    console.log({ id });
    return (
        <StyledDroppable>
            <Droppable droppableId="droppable-1" type="PERSON">
                {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        style={{ backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey' }}
                        {...provided.droppableProps}
                    >
                        <h2>I am a droppable!</h2>
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </StyledDroppable>
    );
};
