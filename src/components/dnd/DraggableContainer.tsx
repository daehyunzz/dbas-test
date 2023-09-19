import { PropsWithChildren } from 'react';

import { Draggable } from '@hello-pangea/dnd';
import { styled } from '@mui/material';

interface Props {
    id: string;
    index: number;
    width?: string;
    height?: string;
}

export const DraggableContainer = ({
    id,
    index,
    width,
    height,
    children,
}: PropsWithChildren<Props>) => {
    return (
        <Draggable index={index} key={id} draggableId={`${id}`}>
            {(draggableProvider) => (
                <StyledDraggableContainer
                    ref={draggableProvider.innerRef}
                    {...draggableProvider.draggableProps}
                    {...draggableProvider.dragHandleProps}
                    sx={{
                        width: `${width ?? '467px'}`,
                        height: `${height ?? '140px'}`,
                    }}
                >
                    {children}
                </StyledDraggableContainer>
            )}
        </Draggable>
    );
};

const StyledDraggableContainer = styled('li')`
    display: flex;
    flex-direction: column;

    justify-content: center;

    width: 467px;
    height: 140px;

    border: 1px solid rgba(0, 0, 0, 0.3);
`;
