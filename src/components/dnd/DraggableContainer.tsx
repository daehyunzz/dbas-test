/* eslint-disable @typescript-eslint/no-unused-vars */
import { Draggable } from '@hello-pangea/dnd';

export const DraggableContainer = () => {
    return (
        <Draggable draggableId="draggable-1" index={0}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <h4>My draggable</h4>
                </div>
            )}
        </Draggable>
    );
};
