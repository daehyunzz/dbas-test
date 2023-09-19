import { PropsWithChildren, useCallback } from 'react';

import { DragDropContext } from '@hello-pangea/dnd';

export const DragDropContainer = ({ children }: PropsWithChildren) => {
    // using useCallback is optional
    const onBeforeCapture = useCallback(() => {
        /*...*/
    }, []);
    const onBeforeDragStart = useCallback(() => {
        /*...*/
    }, []);
    const onDragStart = useCallback(() => {
        /*...*/
    }, []);
    const onDragUpdate = useCallback(() => {
        /*...*/
    }, []);
    const onDragEnd = useCallback(() => {
        // the only one that is required
    }, []);

    return (
        <DragDropContext
            onBeforeCapture={onBeforeCapture}
            onBeforeDragStart={onBeforeDragStart}
            onDragStart={onDragStart}
            onDragUpdate={onDragUpdate}
            onDragEnd={onDragEnd}
        >
            {children}
        </DragDropContext>
    );
};
