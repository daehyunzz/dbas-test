import { PropsWithChildren, ReactNode } from 'react';

import { Stack, styled } from '@mui/material';

import { Title } from './Title';

interface Props {
    height?: string;
    title?: string;
    right?: ReactNode;
    background?: string;
    color?: string;
    flex?: number;
}

const StyledBlock = styled('section')`
    display: flex;
    flex-direction: column;

    position: relative;
    padding: 30px;

    border: 1px solid #e2e8f0;
    box-shadow: 0px 4px 30px 0px #90909040;
    border-radius: 13px;
`;
const StyledColoredBlock = styled((props: PropsWithChildren<Props>) => <StyledBlock {...props} />)`
    background: ${(props) => props.background ?? '#ffffff'};
    color: ${(props) => props.color ?? '#000000'};

    ${(props) => `flex: ${props.flex ?? null};`}
    ${(props) => `height: ${props.height ?? null};`}
`;

export const Block = ({
    height,
    title,
    color,
    background,
    flex,
    children,
}: PropsWithChildren<Props>) => {
    return (
        <StyledColoredBlock height={height} color={color} background={background} flex={flex}>
            <Stack direction="row">{title && <Title title={title} />}</Stack>
            <Stack>{children}</Stack>
        </StyledColoredBlock>
    );
};
