import { ReactNode, useState } from 'react';

import { TablePagination, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export type Column = { field: string; headerName: string; width: number };

const defaultColumn: Column[] = [
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

type Row = {
    [key: string]: string | number | boolean | JSX.Element;
};

const defaultRows: Row[] = [
    {
        isChecked: false,
        id: 1,
        detail: '',
        category: 'Electronics',
        name: 'Laptop',
        image: 'laptop.jpg',
        code: 'LP12345',
        attributes: '16GB RAM, 1TB SSD',
        description: 'Powerful laptop for work and gaming.',
        updatedAt: '2023-09-15',
        createdAt: '2023-09-10',
    },
    {
        isChecked: false,
        id: 2,
        detail: '',
        category: 'Clothing',
        name: 'T-Shirt',
        image: 'tshirt.jpg',
        code: 'TS67890',
        attributes: 'Size: M, Color: Red',
        description: 'Comfortable cotton T-shirt.',
        updatedAt: '2023-09-14',
        createdAt: '2023-09-09',
    },
    // 다른 예시 데이터를 추가하세요.
];

type FigmaTableProps = {
    isCheckbox?: boolean;
    columns?: Column[];
    rows?: Row[];
    rowsPerPage?: number;
};

const FigmaTable: React.FC<FigmaTableProps> = ({
    isCheckbox = true,
    columns = defaultColumn,
    rows = defaultRows,
    rowsPerPage = 8,
}) => {
    const [selected, setSelected] = useState<(string | number | boolean | JSX.Element)[]>([]); // 선택된 행의 ID 배열

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>, id: number) => {
        if (event.target.checked) {
            setSelected([...selected, id]);
        } else {
            setSelected(selected.filter((selectedId) => selectedId !== id));
        }
    };

    const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const allIds = rows.map((row) => row.id);
            setSelected(allIds);
        } else {
            setSelected([]);
        }
    };

    const [page, setPage] = useState(0); // 페이지 번호 상태 추가
    // const [rowsPerPage, setRowsPerPage] = useState(8); // 페이지당 항목 수 상태 추가

    // 페이지 변경 핸들러
    const handleChangePage = (event: unknown, newPage: number) => {
        event;
        setPage(newPage);
    };

    // 페이지당 항목 수 변경 핸들러
    // const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setRowsPerPage(parseInt(event.target.value, 10));
    //     setPage(0); // 페이지당 항목 수가 변경되면 현재 페이지를 0으로 리셋
    // };

    // 현재 페이지의 데이터를 계산
    const indexOfLastRow = (page + 1) * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = rows.slice(indexOfFirstRow, indexOfLastRow);

    const DesignedHeaderTableCell: React.FC<{ children: ReactNode }> = ({ children }) => {
        return (
            <TableCell
                sx={{
                    backgroundColor: '#CDCDCD',
                    border: '1px solid #FFFFFF',
                    fontWeight: '700',
                    fontSize: '17.92px',
                    lineHeight: '21px',
                }}
            >
                {children}
            </TableCell>
        );
    };

    return (
        <>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            {isCheckbox && (
                                <DesignedHeaderTableCell>
                                    <Checkbox
                                        indeterminate={
                                            selected.length > 0 && selected.length < rows.length
                                        }
                                        checked={selected.length === rows.length}
                                        onChange={handleSelectAll}
                                    />
                                </DesignedHeaderTableCell>
                            )}
                            {columns.map((column) => (
                                <DesignedHeaderTableCell key={column.field}>
                                    {column.headerName}
                                </DesignedHeaderTableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {currentRows.map((row) => (
                            <TableRow
                                //@ts-expect-error zzzz
                                key={row.id}
                                sx={{
                                    borderTop: '1px solid #000000',
                                    height: '52px',
                                }}
                            >
                                {isCheckbox && (
                                    <TableCell>
                                        <Checkbox
                                            checked={selected.includes(row.id)}
                                            onChange={(event) =>
                                                //@ts-expect-error zzzzzz
                                                handleCheckboxChange(event, row.id)
                                            }
                                        />
                                    </TableCell>
                                )}
                                {columns.map((column) => (
                                    <TableCell key={column.field} sx={{}}>
                                        <Typography
                                            sx={{
                                                fontWeight: '400px',
                                                fontSize: '17.92px',
                                                lineHeight: '21px',
                                                width: '100%',
                                            }}
                                        >
                                            {row[column.field]}
                                        </Typography>
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {/* TablePagination 추가 */}
            <TablePagination
                rowsPerPageOptions={[rowsPerPage]} // 페이지당 항목 수 옵션
                component="div"
                count={rows.length} // 전체 항목 수
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                // onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </>
    );
};

export default FigmaTable;
