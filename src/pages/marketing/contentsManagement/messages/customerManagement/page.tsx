import { ReactNode, useEffect, useState } from 'react';

import { Box, Typography } from '@mui/material';

import { FigmaHeader } from '@components/CustomerTables/FigmaHeader';
import FigmaTable, { Column } from '@components/CustomerTables/FigmaTable';

export const CustomerManagement: React.FC = () => {
    const [selectedCustomType, setSelectedCustomType] = useState('일반고객');

    const columns: Column[] = [
        {
            field: 'id',
            headerName: 'No',
            width: 81,
        },
        {
            field: 'name',
            headerName: '이름',
            width: 162,
        },
        {
            field: 'position',
            headerName: '직급',
            width: 145,
        },
        {
            field: 'company',
            headerName: '회사',
            width: 174,
        },
        {
            field: 'mobile',
            headerName: '휴대폰',
            width: 246,
        },
        {
            field: 'email',
            headerName: '이메일',
            width: 392,
        },
        { field: 'status', headerName: '상태', width: 162 },
    ];

    type CustomerRow = {
        [K in (typeof columns)[number]['field']]: string | number | JSX.Element;
    };

    const rows: CustomerRow[] = [];
    ((count: number): void => {
        for (let i = 1; i <= count; i++) {
            let status;
            if (i % 3 === 0) {
                status = '잠재고객';
            } else if (i % 3 === 1) {
                status = '일반고객';
            } else {
                status = '충성고객';
            }

            const row: CustomerRow = {
                id: i,
                name: `이름${i}`,
                position: `직급${i}`,
                company: `TmaxBI`,
                mobile: `010-1234-5678`,
                email: `23423543@tmax.co.kr`,
                status,
            };
            rows.push(row);
        }
    })(20);

    const [rowData, setRowData] = useState(() => rows);
    useEffect(() => {
        setRowData(rows.filter((e) => e.status === selectedCustomType));
    }, [selectedCustomType]);

    const CustomerTypeButton: React.FC<{ children: ReactNode; value: string }> = ({
        children,
        value,
    }) => {
        const backgroundColor = value === selectedCustomType ? '#E2E8F0' : '#FFFFFF';
        return (
            <Box
                role="button"
                sx={{
                    width: '478px',
                    height: '80px',
                    backgroundColor,
                    border: '1px solid #E2E8F0',
                    borderRadius: '13.2px',
                    display: 'flex',
                    cursor: 'pointer',
                }}
                onClick={() => {
                    setSelectedCustomType(value);
                }}
            >
                <Typography
                    sx={{
                        margin: 'auto',
                        fontSize: '32px',
                        fontWeight: '600',
                        lineHeight: '47.52px',
                        color: '#40444D',
                    }}
                >
                    {children}
                </Typography>
            </Box>
        );
    };

    return (
        <Box sx={{ width: '100%', padding: '50px' }}>
            <FigmaHeader>타겟 고객 관리</FigmaHeader>
            <Box sx={{ display: 'flex', flexFlow: 'column', gap: '10px', marginTop: '-20px' }}>
                <Box sx={{ display: 'flex', gap: '30px' }}>
                    <CustomerTypeButton value="잠재고객">잠재고객</CustomerTypeButton>
                    <CustomerTypeButton value="일반고객">일반고객</CustomerTypeButton>
                    <CustomerTypeButton value="충성고객">충성고객</CustomerTypeButton>
                </Box>
                {/* 고객필터추가하기 */}
                <Box
                    sx={{
                        width: '100%',
                        height: '169px',
                        border: '1px solid #E2E8F0',
                        borderRadius: '13.2px',
                        padding: '20px',
                        display: 'flex',
                        flexFlow: 'column',
                        gap: '20px',
                    }}
                >
                    <Box
                        sx={{
                            // width: '192px',
                            height: '28px',
                            fontWeight: '600',
                            fontSize: '24px',
                            lineHeight: '28.13px',
                            color: '#00448D',
                        }}
                    >
                        고객 필터 추가하기
                    </Box>
                    <Box sx={{ display: 'flex', gap: '30px' }}>
                        <Box
                            sx={{
                                border: '1px solid #E2E8F0',
                                width: '383px',
                                height: '60px',
                                borderRadius: '8px',
                                backgroundColor: '#f8f7f7',
                                display: 'flex',
                            }}
                        >
                            <Typography
                                sx={{
                                    margin: 'auto',
                                    fontWeight: '400',
                                    fontSize: '22px',
                                    lineHeight: '25.78px',
                                }}
                            >
                                구매액(1,000,000) 이상
                            </Typography>
                            <Typography
                                sx={{
                                    margin: 'auto',
                                    fontWeight: '400',
                                    fontSize: '20px',
                                    lineHeight: '23.44px',
                                    color: '#989292',
                                }}
                            >
                                +OR
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                width: '207px',
                                height: '51.67px',
                                border: '1px solid #E2E8F0',
                                borderRadius: '8px',
                                display: 'flex',
                            }}
                        >
                            <Typography
                                sx={{
                                    margin: 'auto',
                                    fontWeight: '700',
                                    fontSize: '24px',
                                    lineHeight: '47.52px',
                                    color: '#00448D',
                                }}
                            >
                                + AND 조건 추가
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                {/* 선택된고객통계 */}
                <Box
                    sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography
                            sx={{
                                fontWeight: '600',
                                fontSize: '20px',
                                lineHeight: '23.44px',
                                color: '#00448D',
                            }}
                        >
                            선택된 고객 목록{'  '}
                        </Typography>
                        <Typography
                            sx={{
                                fontWeight: '700',
                                fontSize: '50px',
                                lineHeight: '47.52px',
                                color: '#00448D',
                            }}
                        >
                            {rowData.length}
                        </Typography>
                        <Typography
                            sx={{
                                fontWeight: '700',
                                fontSize: '15px',
                                lineHeight: '47.52px',
                                color: '#616468',
                            }}
                        >
                            명 선택
                        </Typography>
                    </Box>
                    <Box
                        role="button"
                        sx={{
                            width: '152px',
                            height: '57px',
                            border: '1px solid #00448D',
                            borderRadius: '4px',
                            backgroundColor: '#00448D',
                            display: 'flex',
                        }}
                    >
                        <Typography
                            sx={{
                                margin: 'auto',
                                fontWeight: '500',
                                fontSize: '28px',
                                lineHeight: '32.81px',
                                color: '#FFFFFF',
                            }}
                        >
                            선택완료
                        </Typography>
                    </Box>
                </Box>
                {/* 테이블 */}
                <FigmaTable columns={columns} rows={rowData} rowsPerPage={5} />
            </Box>
        </Box>
    );
};
