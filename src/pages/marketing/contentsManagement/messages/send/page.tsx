import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Box, Input, InputLabel, Typography } from '@mui/material';
import preview from 'assets/preview.png';

import { FigmaHeader } from '@components/CustomerTables/FigmaHeader';
import FigmaTable, { Column } from '@components/CustomerTables/FigmaTable';
import { MenuItem } from '@components/ui/MenuItem';
import { Select } from '@components/ui/Select';

export const Send: React.FC = () => {
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();

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

    return (
        <Box sx={{ width: '100%', padding: '50px' }}>
            <FigmaHeader>메세지 발송</FigmaHeader>
            <Box sx={{ display: 'flex', flexFlow: 'column', gap: '10px', marginTop: '-20px' }}>
                {/* 선택된고객통계 */}
                <Box
                    sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography
                            sx={{
                                fontWeight: '700',
                                fontSize: '20px',
                                lineHeight: '23.44px',
                                // color: '#00448D',
                            }}
                        >
                            받는 고객 목록{'  '}
                        </Typography>
                        <Typography
                            sx={{
                                fontWeight: '700',
                                fontSize: '50px',
                                lineHeight: '47.52px',
                                // color: '#00448D',
                            }}
                        >
                            {rows.length}
                        </Typography>
                        <Typography
                            sx={{
                                fontWeight: '700',
                                fontSize: '15px',
                                lineHeight: '47.52px',
                                // color: '#616468',
                            }}
                        >
                            명
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
                <FigmaTable columns={columns} rows={rows} rowsPerPage={5} />
                {/* 메시지 설정 */}
                <Box sx={{ display: 'flex', padding: '20px', alignItems: 'center' }}>
                    {/* 미리보기 이미지 */}
                    <Box sx={{ dispaly: 'flex', flexFlow: 'column' }}>
                        <Typography
                            sx={{
                                fontWeight: '700',
                                fontSize: '26px',
                                lineHeight: '30.47px',
                                // color: '#00448D',
                            }}
                        >
                            미리보기
                        </Typography>
                        <img src={preview} style={{ width: '694px', height: '740px' }}></img>
                    </Box>
                    {/* 발송 예약 설정 */}

                    <Box sx={{ display: 'flex', flexFlow: 'column', width: '622px', gap: '50px' }}>
                        <Typography
                            sx={{
                                fontWeight: '700',
                                fontSize: '26px',
                                lineHeight: '30.47px',
                                // color: '#00448D',
                            }}
                        >
                            발송 예약 설정
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                        >
                            <InputLabel
                                id="time=select-label"
                                sx={{
                                    // width: '90px',
                                    height: '28px',
                                    fontWeight: '400',
                                    fontSize: '24px',
                                    lineHeight: '28.13px',
                                    color: '#000000',
                                    margin: 'auto',
                                }}
                            >
                                기준 시간
                            </InputLabel>
                            <Select
                                value={'GMT +09:00 (서울, 도쿄)'}
                                labelId="time=select-label"
                                id="time=select"
                                sx={{
                                    width: '428px',
                                    height: '38.4px',
                                    borderRadius: '2.4px',
                                    fontWeight: '400',
                                    fontSize: '20px',
                                    lineHeight: '23.44px',
                                }}
                            >
                                <MenuItem value={'GMT +09:00 (서울, 도쿄)'}>
                                    GMT +09:00 (서울, 도쿄)
                                </MenuItem>
                            </Select>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                        >
                            <Box
                                sx={{
                                    // width: '90px',
                                    height: '28px',
                                    fontWeight: '400',
                                    fontSize: '24px',
                                    lineHeight: '28.13px',
                                    color: '#000000',
                                    margin: 'auto',
                                }}
                            >
                                예약시간
                            </Box>

                            <Box
                                sx={{
                                    width: '428px',
                                    height: '38.4px',
                                    display: 'flex',
                                    fontWeight: '400',
                                    fontSize: '20px',
                                    lineHeight: '23.44px',
                                    gap: '22px',
                                }}
                            >
                                <Input
                                    type="text"
                                    value="2023.09.15"
                                    sx={{
                                        fontWeight: '400',
                                        width: '165px',
                                        fontSize: '20px',
                                        lineHeight: '23.44px',
                                    }}
                                />
                                <Select
                                    value={'GMT +09:00 (서울, 도쿄)'}
                                    labelId="reserve-select-label"
                                    id="reserve-select"
                                    sx={{
                                        // width: '107px',
                                        fontSize: '20px',
                                        lineHeight: '23.44px',
                                        height: '38.4px',
                                        borderRadius: '2.4px',
                                    }}
                                >
                                    <MenuItem value={'GMT +09:00 (서울, 도쿄)'}>18시</MenuItem>
                                </Select>
                                <Select
                                    value={'GMT +09:00 (서울, 도쿄)'}
                                    labelId="reserve-select-label"
                                    id="reserve-select"
                                    sx={{
                                        // width: '107px',
                                        fontSize: '20px',
                                        lineHeight: '23.44px',
                                        height: '38.4px',
                                        borderRadius: '2.4px',
                                    }}
                                >
                                    <MenuItem value={'GMT +09:00 (서울, 도쿄)'}>30분</MenuItem>
                                </Select>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                        >
                            <InputLabel
                                id="title-input-label"
                                sx={{
                                    // width: '90px',
                                    height: '28px',
                                    fontWeight: '400',
                                    fontSize: '24px',
                                    lineHeight: '28.13px',
                                    color: '#000000',
                                    margin: 'auto',
                                }}
                            >
                                제목
                            </InputLabel>
                            <Input
                                value={inputValue}
                                // labelId="title-input-label"
                                onChange={(e) => setInputValue(e.target.value)}
                                id="title-input"
                                sx={{
                                    width: '428px',
                                    height: '38.4px',
                                    borderRadius: '2.4px',
                                    fontWeight: '400',
                                    fontSize: '20px',
                                    lineHeight: '23.44px',
                                }}
                            />
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ marginX: 'auto', display: 'flex', marginBottom: '100px', gap: '20px' }}>
                    <Box
                        sx={{
                            width: '118px',
                            height: '64px',
                            backgroundColor: '#000000',
                            color: 'white',
                            display: 'flex',
                        }}
                    >
                        <Typography sx={{ margin: 'auto', fontWeight: '700', size: '20px' }}>
                            취소
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            width: '118px',
                            height: '64px',
                            backgroundColor: '#000000',
                            color: 'white',
                            display: 'flex',
                            cursor: 'pointer',
                        }}
                        onClick={() => {
                            navigate('/marketing/contents-management/messages');
                        }}
                    >
                        <Typography sx={{ margin: 'auto', fontWeight: '700', size: '20px' }}>
                            전송
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};
