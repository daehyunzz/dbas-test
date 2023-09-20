import { Box } from '@mui/material';

import { FigmaColorBox } from '@components/CustomerTables/FigmaColorBox';
import { FigmaHeader } from '@components/CustomerTables/FigmaHeader';
import FigmaTable, { Column } from '@components/CustomerTables/FigmaTable';

export const Messages = () => {
    const columns: Column[] = [
        {
            field: 'id',
            headerName: 'No',
            width: 70,
        },
        {
            field: '발송일시',
            headerName: '발송일시',
            width: 320,
        },
        {
            field: '내용',
            headerName: '내용',
            width: 626,
        },
        {
            field: '상태',
            headerName: '상태',
            width: 350,
        },
    ];
    type MessageRow = {
        [K in (typeof columns)[number]['field']]: string | number | JSX.Element;
    };

    const rows: MessageRow[] = [];
    for (let i = 1; i <= 20; i++) {
        const row: MessageRow = {
            id: i,
            발송일시: `2023-09-20`,
            내용: `이것은 더미 내용 ${i}입니다.`,
            상태: <FigmaColorBox text="전송완료" color="Green" width="214px" height="42px" />,
        };
        rows.push(row);
    }

    return (
        <Box sx={{ width: '100%', padding: '50px' }}>
            <FigmaHeader isBorder={true}>발송 내역</FigmaHeader>
            <Box sx={{ display: 'flex', gap: '30px', flexFlow: 'column' }}>
                {/* <Input
                    placeholder="검색어를 입력해주세요."
                    sx={{
                        width: '843px',
                        height: '64px',
                        fontWeight: '400',
                        fontSize: '28px',
                        lineHeight: '32.81px',
                        border: 'solid 1px #000000',
                    }}
                /> */}
                {/* <Box>
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
                </Box> */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    {/* <Select
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
                    </Select> */}
                    {/* <Box sx={{ display: 'flex', gap: '1rem' }}>
                        <FigmaButton text="엑셀로 추출하기" type="white" width="262px" />
                        <FigmaButton text="대량 등록 템플릿" type="white" width="269px" />
                        <FigmaButton text="대량 등록" type="blue" width="144px" />
                        <FigmaButton text="개별 등록" type="blue" width="144px" />
                    </Box> */}
                </Box>
                <Box>
                    <FigmaTable columns={columns} rows={rows} rowsPerPage={100} />
                </Box>
            </Box>
        </Box>
    );
};
