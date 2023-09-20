import { Box, Input, Select, Typography } from '@mui/material';

import { FigmaColorBox } from '@components/CustomerTables/FigmaColorBox';
import FigmaTable, { Column } from '@components/CustomerTables/FigmaTable';
import { Button } from '@components/ui/Button';

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
            status = <FigmaColorBox text={'잠재고객'} />;
        } else if (i % 3 === 1) {
            status = '일반';
        } else {
            status = '충성';
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
        <Box>
            <Box>고객조회</Box>
            <Input placeholder="검색어를 입력해주세요." />
            <Box>
                <Typography>총 356명(잠재213/일반106/충성37)</Typography>
            </Box>
            <Box>
                <Select value={'전체'}></Select>
                <Button>엑셀로 추출하기</Button>
            </Box>
            <Box>
                <FigmaTable columns={columns} rows={rows} isCheckbox={false} />
            </Box>
        </Box>
    );
};
