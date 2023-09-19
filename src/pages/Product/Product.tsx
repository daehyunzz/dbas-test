import { useState } from 'react';

import {
    Button,
    Checkbox,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';

type Data = {
    id: number;
    name: string;
};

export const Product: React.FC = () => {
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

    const [selectedRows, setSelectedRows] = useState<number[]>([]);

    const data: Data[] = [
        { id: 1, name: 'John' },
        { id: 2, name: 'Alice' },
        { id: 3, name: 'Bob' },
    ];

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

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <Checkbox
                                indeterminate={
                                    selectedRows.length > 0 && selectedRows.length < data.length
                                }
                                checked={selectedRows.length === data.length}
                                onChange={() =>
                                    selectedRows.length === data.length
                                        ? setSelectedRows([])
                                        : setSelectedRows(data.map((row) => row.id))
                                }
                            />
                        </TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow
                            key={row.id}
                            selected={isSelected(row.id)}
                            onClick={() => handleCheckboxClick(row.id)}
                            style={{ cursor: 'pointer' }}
                        >
                            <TableCell>
                                <Checkbox
                                    checked={isSelected(row.id)}
                                    onChange={() => {}}
                                    color="primary"
                                />
                            </TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    // onClick={() => handleButtonClick(row.id)}
                                >
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
