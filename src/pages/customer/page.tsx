import { Box, Input, Select, Typography } from '@mui/material';

import { FigmaButton } from '@components/CustomerTables/FigmaButton';
import { FigmaColorBox } from '@components/CustomerTables/FigmaColorBox';
import FigmaTable, { Column } from '@components/CustomerTables/FigmaTable';
import { MenuItem } from '@components/ui/MenuItem';

export const Customer = () => {
    const columns: Column[] = [
        {
            field: 'id',
            headerName: 'No',
            width: 70,
        },
        {
            field: 'name',
            headerName: '이름',
            width: 128,
        },
        {
            field: 'status',
            headerName: '상태',
            width: 211.84,
        },
        {
            field: 'company',
            headerName: '회사',
            width: 246.4,
        },
        {
            field: 'mobile',
            headerName: '휴대폰',
            width: 204.8,
        },
        {
            field: 'email',
            headerName: '이메일',
            width: 248.96,
        },
        { field: 'icons', headerName: ' ', width: 213.12 },
        { field: 'createdAt', headerName: '등록일', width: 204.8 },
    ];
    type CustomerRow = {
        [K in (typeof columns)[number]['field']]: string | number | JSX.Element;
    };

    const rows: CustomerRow[] = [];
    for (let i = 1; i <= 20; i++) {
        let status;

        if (i % 3 === 0) {
            status = <FigmaColorBox width="88.32px" height="35.2px" text={'잠재고객'} />;
        } else if (i % 3 === 1) {
            status = (
                <FigmaColorBox
                    width="88.32px"
                    height="35.2px"
                    color="LightBlue"
                    text={'일반고객'}
                />
            );
        } else {
            status = (
                <FigmaColorBox width="88.32px" height="35.2px" color="Yellow" text={'충성고객'} />
            );
        }

        const rowData: CustomerRow = {
            id: i,
            name: `사용자 ${i}`,
            status: status,
            company: `회사 ${i}`,
            mobile: `010-1234-${i.toString().padStart(2, '0')}`,
            email: `user${i}@example.com`,
            icons: `아이콘 ${i}`,
            createdAt: `2023-09-${i.toString().padStart(2, '0')}`,
        };

        rows.push(rowData);
    }
    return (
        <Box sx={{ width: '100%', padding: '50px' }}>
            <Box
                sx={{
                    width: '100%',
                    height: '60px',
                    borderBottom: '1px solid #A9A9A9',
                    marginBottom: '40px',
                }}
            >
                <Typography
                    sx={{
                        // width: '127px',
                        height: '38px',
                        fontWeight: '700',
                        fontSize: '32px',
                        lineHeight: '37.5px',
                    }}
                >
                    고객조회
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: '30px', flexFlow: 'column' }}>
                <Input
                    placeholder="검색어를 입력해주세요."
                    sx={{
                        width: '843px',
                        height: '64px',
                        fontWeight: '400',
                        fontSize: '28px',
                        lineHeight: '32.81px',
                        border: 'solid 1px #000000',
                    }}
                />
                <Box>
                    <Typography sx={{ fontWeight: '700', fontSize: '32px', lineHeight: '37.5px' }}>
                        총 {rows.length}명(잠재
                        {
                            rows.filter((e) => {
                                //@ts-expect-error e.status가 JSX.Element임
                                return e.status?.props?.text === '잠재고객';
                            }).length
                        }
                        /일반
                        {
                            rows.filter((e) => {
                                //@ts-expect-error e.status가 JSX.Element임
                                return e.status?.props?.text === '일반고객';
                            }).length
                        }
                        /충성
                        {
                            rows.filter((e) => {
                                //@ts-expect-error e.status가 JSX.Element임
                                return e.status?.props?.text === '충성고객';
                            }).length
                        }
                        )
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Select
                        value={'전체'}
                        sx={{
                            width: '172px',
                            height: '62px',
                            fontWeight: '400',
                            fontSize: '28px',
                            lineHeight: '32.81px',
                        }}
                    >
                        <MenuItem value={'전체'}>전체</MenuItem>
                    </Select>
                    <Box sx={{ display: 'flex', gap: '1rem' }}>
                        <FigmaButton text="엑셀로 추출하기" type="white" width="262px" />
                        <FigmaButton text="대량 등록 템플릿" type="white" width="269px" />
                        <FigmaButton text="대량 등록" type="blue" width="144px" />
                        <FigmaButton text="개별 등록" type="blue" width="144px" />
                    </Box>
                </Box>
                <Box>
                    <FigmaTable columns={columns} rows={rows} isCheckbox={false} />
                </Box>
            </Box>
        </Box>
    );
};
