import { useMemo, useState } from 'react';

import {
    Box,
    Checkbox,
    Input,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';

export const Tables: React.FC = () => {
    // const columns: GridColDef[] = [
    //     { field: 'id', headerName: 'No', width: 70 },
    //     { field: 'detail', headerName: '', width: 70 },
    //     { field: 'category', headerName: '카테고리', width: 200 },
    //     { field: 'name', headerName: '제품명', width: 323 },
    //     { field: 'image', headerName: '이미지', width: 320 },
    //     { field: 'code', headerName: '제품코드', width: 320 },
    //     { field: 'attributes', headerName: '속성', width: 320 },
    //     { field: 'description', headerName: '설명', width: 295 },
    //     { field: 'updatedAt', headerName: '수정일', width: 320 },
    //     { field: 'createdAt', headerName: '등록일', width: 320 },
    // ];
    // const columns = [
    //     { id: 'checkbox', label: '', width: 70 },
    //     { id: 'name', label: 'Name', width: 100 },
    //     { id: 'action', label: 'Action', width: 100 },
    // ];

    const columns = [
        { field: 'isChecked', headerName: '', width: 81 },
        { field: 'id', headerName: 'No', width: 100 },
        { field: 'detail', headerName: '', width: 120 },
        { field: 'category', headerName: '카테고리', width: 200 },
        { field: 'name', headerName: '제품명', width: 323 },
        { field: 'image', headerName: '이미지', width: 320 },
        { field: 'code', headerName: '제품코드', width: 320 },
        { field: 'attributes', headerName: '속성', width: 320 },
        { field: 'description', headerName: '설명', width: 295 },
        { field: 'updatedAt', headerName: '수정일', width: 320 },
        { field: 'createdAt', headerName: '등록일', width: 320 },
    ];

    type Data = {
        isChecked: boolean;
        id: number;
        detail: string;
        category: string;
        name: string;
        image: string;
        code: string;
        attributes: string;
        description: string;
        updatedAt: string;
        createdAt: string;
    };
    const [data, setData] = useState<Data[]>([]);

    const lastId = useMemo(() => {
        let lastId = 0;
        data.forEach((element) => {
            if (element.id > lastId) lastId = element.id;
        });
        return lastId + 1;
    }, [data]);

    const [selectedRows, setSelectedRows] = useState<number[]>([]);

    const isSelected = (id: number) => selectedRows.indexOf(id) !== -1;

    const handleCheckboxClick = (id: number) => {
        const selectedIndex = selectedRows.indexOf(id);
        let newSelected: number[] = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selectedRows, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selectedRows.slice(1));
        } else if (selectedIndex === selectedRows.length - 1) {
            newSelected = newSelected.concat(selectedRows.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selectedRows.slice(0, selectedIndex),
                selectedRows.slice(selectedIndex + 1)
            );
        }

        setSelectedRows(newSelected);
    };

    const defaultTopRow = (
        <TableRow sx={{ height: '81px' }}>
            <Box
                sx={{
                    position: 'absolute',
                    fontSize: '28px',
                    height: '81px',
                    display: 'flex',
                    alignItems: 'center',
                    paddingX: '30px',
                }}
            >
                <Box
                    onClick={() => {
                        // setIsAdding(true);
                        setData((prev) => {
                            const now = new Date();
                            const year = now.getFullYear();
                            const month = (now.getMonth() + 1).toString().padStart(2, '0');
                            const day = now.getDate().toString().padStart(2, '0');
                            const today = `${year}-${month}-${day}`;
                            const data = {
                                isChecked: false,
                                id: lastId,
                                detail: '',
                                category: '',
                                name: '',
                                image: '',
                                code: '',
                                attributes: '등록',
                                description: '',
                                updatedAt: today,
                                createdAt: today,
                            };
                            return [...prev, data];
                        });
                    }}
                    sx={{ cursor: 'pointer' }}
                >
                    + 제품 추가하기
                </Box>
            </Box>
        </TableRow>
    );
    // const bodyTopRow = isAdding ? (
    //     <TableInputRow id={lastId} setIsAdding={setIsAdding} />
    // ) : (
    //     defaultTopRow
    // );
    const [isCate, SetIsCate] = useState(false);
    return (
        // <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        {columns.map((column) => (
                            <TableCell
                                key={column.field}
                                sx={{
                                    minWidth: column.width,
                                    height: '81px',
                                    textJustify: 'center',
                                    backgroundColor: '#cdcdcd',
                                    borderRight: '1px solid #FFFFFF',
                                }}
                            >
                                <Box
                                    sx={{
                                        margin: 'auto',
                                        fontWeight: '700',
                                        fontSize: '28px',
                                        lineHeight: '32.81px',
                                    }}
                                >
                                    {column.headerName}
                                </Box>
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {defaultTopRow}
                    {/* {bodyTopRow} */}
                    {data.map((row, index) => (
                        <TableRow
                            key={row.id}
                            selected={isSelected(row.id)}
                            onClick={() => handleCheckboxClick(row.id)}
                            style={{ cursor: 'pointer', height: '81px' }}
                        >
                            {Object.entries(row).map((entry) => {
                                const [key, value] = entry;
                                let Cell = (
                                    <TableCell
                                        sx={{
                                            fontSize: '28px',
                                            lienHeight: '32.81px',
                                            fontWeight: '400',
                                        }}
                                    >
                                        {value}
                                    </TableCell>
                                );

                                switch (key) {
                                    case 'isChecked':
                                        Cell = (
                                            <TableCell>
                                                <Checkbox
                                                    checked={isSelected(row.id)}
                                                    onChange={() => {}}
                                                    sx={{ width: '41px', height: '41px' }}
                                                    color="primary"
                                                />
                                            </TableCell>
                                        );
                                        break;

                                    case 'detail':
                                        Cell = (
                                            <TableCell>
                                                <Box
                                                    role="button"
                                                    sx={{
                                                        width: '96px',
                                                        height: '67px',
                                                        border: '3px solid #00448D',
                                                        borderRadius: '6px',
                                                        fontSize: '28px',
                                                        fontWeight: '400',
                                                        display: 'flex',
                                                    }}
                                                >
                                                    <Box
                                                        sx={{
                                                            margin: 'auto',
                                                            lineHeight: '32.81px',
                                                        }}
                                                    >
                                                        상세
                                                    </Box>
                                                </Box>
                                            </TableCell>
                                        );
                                        break;

                                    case 'name':
                                        Cell = (
                                            <TableCell>
                                                <Input
                                                    placeholder="제품명을 입력하세요"
                                                    value={value}
                                                    disableUnderline={true}
                                                    sx={{
                                                        fontSize: '28px',
                                                        lienHeight: '32.81px',
                                                        fontWeight: '400',
                                                    }}
                                                    onChange={(e) => {
                                                        //성능문제 발생 가능
                                                        setData((prev) => {
                                                            const newData = [...prev];
                                                            newData[index].name = e.target.value;
                                                            return newData;
                                                        });
                                                    }}
                                                />
                                            </TableCell>
                                        );

                                        break;

                                    case 'image':
                                        if (!value) {
                                            Cell = (
                                                <TableCell
                                                    sx={{
                                                        fontSize: '28px',
                                                        lienHeight: '32.81px',
                                                        fontWeight: '400',
                                                    }}
                                                >
                                                    <Box
                                                        role="button"
                                                        sx={{
                                                            boxSizing: 'border-box',
                                                            borderRadius: '6px',
                                                            // border: 'solid 1px lightgray',
                                                            padding: '5px',
                                                            maxWidth: '150px',
                                                            color: 'gray',
                                                        }}
                                                        onClick={() => {}}
                                                    >
                                                        +이미지 추가
                                                    </Box>
                                                </TableCell>
                                            );
                                        } else {
                                            <TableCell
                                                sx={{
                                                    fontSize: '28px',
                                                    lienHeight: '32.81px',
                                                    fontWeight: '400',
                                                }}
                                            >
                                                {value}
                                            </TableCell>;
                                        }
                                        break;

                                    case 'category':
                                        if (!value) {
                                            Cell = (
                                                <TableCell
                                                    sx={{
                                                        fontSize: '28px',
                                                        lienHeight: '32.81px',
                                                        fontWeight: '400',
                                                    }}
                                                >
                                                    <Box
                                                        role="button"
                                                        sx={{
                                                            boxSizing: 'border-box',
                                                            borderRadius: '6px',
                                                            // border: 'solid 1px lightgray',
                                                            padding: '5px',
                                                            maxWidth: '150px',
                                                            color: 'gray',
                                                        }}
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            SetIsCate(true);
                                                        }}
                                                    >
                                                        +추가
                                                    </Box>
                                                    {isCate ? (
                                                        <Box
                                                            sx={{
                                                                position: 'absolute',

                                                                backgroundColor: '#E2E2E2',
                                                                boxShadow:
                                                                    '2px 2px 2px rgba(0, 0, 0, 0.2)',
                                                                width: '593px',
                                                                height: '271px',
                                                                boxSizing: 'border-box',
                                                                padding: '20px',
                                                            }}
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                SetIsCate(false);
                                                            }}
                                                        >
                                                            <Box
                                                                sx={{
                                                                    fontWeight: '700',
                                                                    fontSize: '24px',
                                                                    lineHeight: '28.13px',
                                                                }}
                                                            >
                                                                카테고리를 선택해주세요.
                                                            </Box>
                                                            <Box
                                                                sx={{
                                                                    fontWeight: '400',
                                                                    fontSize: '28px',
                                                                    lineHeight: '31.81px',
                                                                    height: '65px',
                                                                }}
                                                                onClick={() => {
                                                                    //성능문제 발생 가능
                                                                    setData((prev) => {
                                                                        const newData = [...prev];
                                                                        newData[index].category =
                                                                            '데이터베이스';
                                                                        return newData;
                                                                    });
                                                                }}
                                                            >
                                                                ▽ 디지털
                                                                <Box
                                                                    sx={{
                                                                        marginLeft: '20px',
                                                                        fontWeight: '400',
                                                                        fontSize: '28px',
                                                                        lineHeight: '31.81px',
                                                                        height: '65px',
                                                                    }}
                                                                >
                                                                    ▽ 소프트웨어
                                                                    <Box
                                                                        sx={{
                                                                            marginLeft: '20px',
                                                                            fontWeight: '400',
                                                                            fontSize: '28px',
                                                                            lineHeight: '31.81px',
                                                                            height: '65px',
                                                                        }}
                                                                    >
                                                                        데이터베이스
                                                                    </Box>
                                                                </Box>
                                                            </Box>
                                                        </Box>
                                                    ) : (
                                                        <></>
                                                    )}
                                                </TableCell>
                                            );
                                        } else {
                                            <TableCell
                                                sx={{
                                                    fontSize: '28px',
                                                    lienHeight: '32.81px',
                                                    fontWeight: '400',
                                                }}
                                            >
                                                {value}
                                            </TableCell>;
                                        }
                                        break;

                                    case 'code':
                                        if (!value) {
                                            Cell = (
                                                <TableCell
                                                    sx={{
                                                        fontSize: '28px',
                                                        lienHeight: '32.81px',
                                                        fontWeight: '400',
                                                    }}
                                                >
                                                    <Box
                                                        role="button"
                                                        sx={{
                                                            boxSizing: 'border-box',
                                                            borderRadius: '6px',
                                                            // border: 'solid 1px lightgray',
                                                            padding: '5px',
                                                            maxWidth: '150px',
                                                            color: 'gray',
                                                            fontSize: '28px',
                                                            lienHeight: '32.81px',
                                                            fontWeight: '400',
                                                        }}
                                                        onClick={() => {}}
                                                    >
                                                        +제품코드 추가
                                                    </Box>
                                                </TableCell>
                                            );
                                        } else {
                                            <TableCell
                                                sx={{
                                                    fontSize: '28px',
                                                    lienHeight: '32.81px',
                                                    fontWeight: '400',
                                                }}
                                            >
                                                {value}
                                            </TableCell>;
                                        }
                                        break;
                                    case 'description':
                                        Cell = (
                                            <TableCell>
                                                <Input
                                                    placeholder="설명을 입력하세요."
                                                    disableUnderline={true}
                                                    value={value}
                                                    sx={{
                                                        fontSize: '28px',
                                                        lienHeight: '32.81px',
                                                        fontWeight: '400',
                                                    }}
                                                    onChange={(e) => {
                                                        //성능문제 발생 가능
                                                        setData((prev) => {
                                                            const newData = [...prev];
                                                            newData[index].description =
                                                                e.target.value;
                                                            return newData;
                                                        });
                                                    }}
                                                />
                                            </TableCell>
                                        );

                                        break;

                                    default:
                                        break;
                                }

                                return Cell;
                            })}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        // </Paper>
    );
};
