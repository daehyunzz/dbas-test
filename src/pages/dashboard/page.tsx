import { Stack, styled } from '@mui/material';

import { Spacing } from '@components/ui/Spacing';

import { Block } from './Block';
import { ChartLine } from './ChartLine';
import { DoughnutChart } from './DoughnutChart';
import { InfoBar } from './InfoBar';
import { Outline } from './Outline';
import { Title } from './Title';

const StyledLayout = styled(Stack)`
    width: 100%;

    padding: 27px 31px;

    overflow: auto;
`;

export const DashBoard = () => {
    return (
        <StyledLayout>
            <Title title="고객 대시보드" />
            <Spacing gap="25px" />
            <InfoBar />
            <Spacing gap="33px" />
            <Block title="개요">
                <Outline />
            </Block>
            <Spacing gap="40px" />
            {/** 차트 영역 */}
            <Stack gap="40px">
                <Stack direction="row" gap="27px" alignItems="stretch">
                    <Block title="고객 분류별 통계(총 고객)" flex={1} height="541px">
                        <DoughnutChart />
                    </Block>
                    <Block title="고객별 증감 추이" flex={1}>
                        <ChartLine />
                    </Block>
                </Stack>
                <Block title="캘린더">
                    <div>calander</div>
                </Block>
            </Stack>
        </StyledLayout>
    );
};
