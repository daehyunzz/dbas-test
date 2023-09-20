import { useState } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import { IconButton, styled } from '@mui/material';

const StyledInfoBar = styled('div')`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 17px 20px 17px 40px;

    border-radius: 13px;

    width: 100%;
    height: 61px;

    background: #00448d;
    color: #ffffff;

    font-size: 21px;
    font-weight: 600;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: left;

    box-shadow: 0px 1.3200006484985352px 3.9600019454956055px 0px #0051af1a;
`;

export const InfoBar = () => {
    const [isVisible, setIsVisible] = useState<boolean>(true);
    const closeInfoBar = () => {
        setIsVisible(false);
    };

    return (
        isVisible && (
            <StyledInfoBar>
                <span>고객 데이터 분석과 켐페인 제안을 통해 최적화를 시작하세요!</span>
                <IconButton onClick={closeInfoBar}>
                    <CloseIcon sx={{ width: 35, height: 35, color: '#ffffff' }} />
                </IconButton>
            </StyledInfoBar>
        )
    );
};
