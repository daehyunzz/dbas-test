import { forwardRef, useState } from 'react';

import { NumericFormat, NumericFormatProps } from 'react-number-format';

import AddIcon from '@mui/icons-material/Add';
import DownloadIcon from '@mui/icons-material/Download';
import Box from '@mui/material/Box';
import MuiButton from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

import { Button, MenuItem, Select, TextField } from '@components/Ui';

import { Drawer } from './Drawer';

const Heading6 = styled(Typography)({
    fontWeight: '600',
    fontSize: '24px',
    lineHeight: '28.13px',
    letterSpacing: '1%',
});

interface CustomProps {
    onChange: (event: { target: { name: string; value: string } }) => void;
    name: string;
}
const NumericFormatCustom = forwardRef<NumericFormatProps, CustomProps>(
    function NumericFormatCustom(props, ref) {
        const { onChange, ...other } = props;

        return (
            <NumericFormat
                {...other}
                getInputRef={ref}
                onValueChange={(values) => {
                    onChange({
                        target: {
                            name: props.name,
                            value: values.value,
                        },
                    });
                }}
                thousandSeparator
                valueIsNumericString
            />
        );
    }
);

export function SetProductOptions() {
    const [category, setCategory] = useState('');
    const [필수고시정보Category, set필수고시정보Category] = useState('');
    const [status, setStatus] = useState('');
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [productCode, setProductCode] = useState('');
    const [isAutoGenerateProductCode, setIsAutoGenerateProductCode] = useState(false);

    return (
        <Stack width="1500px" mt="60px" pb="100px">
            <Drawer
                open={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                category={필수고시정보Category}
                setCategory={set필수고시정보Category}
            />
            <Typography fontWeight="700" fontSize="32px" lineHeight="37.5px">
                상품 설정
            </Typography>
            <Stack direction="row" spacing="100px" mt="40px">
                <Stack width="700px">
                    <Stack spacing="6px" mb="40px">
                        <Heading6>카테고리</Heading6>
                        <Select
                            value={category}
                            onChange={(e) => setCategory(e.target.value as string)}
                            sx={{
                                '& .MuiSelect-select .notranslate::after': {
                                    content: `"카테고리를 선택하세요."`,
                                    color: '#898989',
                                },
                            }}
                        >
                            <MenuItem value="category 1">카테고리 1</MenuItem>
                            <MenuItem value="category 2">카테고리 2</MenuItem>
                            <MenuItem value="category 3">카테고리 3</MenuItem>
                        </Select>
                    </Stack>

                    <Stack spacing="6px" mb="40px">
                        <Heading6>상품명</Heading6>
                        <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="상품명을 입력해주세요."
                        />
                    </Stack>

                    <Stack spacing="6px" mb="40px">
                        <Heading6>설명</Heading6>
                        <TextField
                            fullWidth
                            variant="outlined"
                            multiline
                            rows={5}
                            placeholder="상품에 대한 설명을 입력해주세요."
                        />
                    </Stack>

                    <Stack spacing="6px" mb="40px">
                        <Heading6>이미지</Heading6>
                        <MuiButton
                            component="label"
                            variant="outlined"
                            sx={{
                                width: '140px',
                                height: '140px',
                                color: 'black',
                                borderColor: 'black',
                            }}
                        >
                            <Stack justifyContent="center" alignItems="center">
                                <AddIcon />
                                <Typography fontWeight="400" fontSize="20px" lineHeight="23.44px">
                                    사진추가
                                </Typography>
                            </Stack>
                            <Box
                                component="input"
                                type="file"
                                sx={{
                                    clip: 'rect(0 0 0 0)',
                                    clipPath: 'inset(50%)',
                                    height: 1,
                                    overflow: 'hidden',
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    whiteSpace: 'nowrap',
                                    width: 1,
                                }}
                            />
                        </MuiButton>
                    </Stack>
                </Stack>
                <Stack width="700px">
                    <Stack spacing="6px" mb="40px">
                        <Heading6>상품 코드</Heading6>
                        <Stack component="label" direction="row" spacing="10px" py="4px">
                            <Box
                                component="input"
                                type="checkbox"
                                sx={{
                                    width: '24px',
                                    height: '24px',
                                }}
                                onChange={(e) => {
                                    setIsAutoGenerateProductCode(e.target.checked);
                                    if (e.target.checked) {
                                        setProductCode(
                                            (Math.random() + 1)
                                                .toString(36)
                                                .substring(2, 9)
                                                .toUpperCase()
                                        );
                                    }
                                }}
                            />
                            <Typography
                                fontWeight="400"
                                fontSize="20px"
                                lineHeight="23.44px"
                                sx={{ userSelect: 'none' }}
                            >
                                자동 생성
                            </Typography>
                        </Stack>
                        <TextField
                            fullWidth
                            variant="outlined"
                            value={productCode}
                            onChange={(e) => {
                                if (!isAutoGenerateProductCode) {
                                    setProductCode(e.target.value);
                                }
                            }}
                            sx={{
                                '& .MuiInputBase-input': {
                                    fontFamily: 'monospace',
                                },
                            }}
                        />
                    </Stack>

                    <Stack spacing="6px" mb="40px">
                        <Heading6>판매가</Heading6>
                        <TextField
                            fullWidth
                            variant="outlined"
                            sx={{
                                '& .MuiInputBase-input': {
                                    paddingRight: '4px',
                                },
                            }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <Typography
                                            fontWeight="700"
                                            fontSize="26px"
                                            lineHeight="30.47px"
                                        >
                                            원
                                        </Typography>
                                    </InputAdornment>
                                ),
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                inputComponent: NumericFormatCustom as any,
                            }}
                            inputProps={{
                                inputMode: 'numeric',
                                pattern: '[0-9]*',
                                sx: {
                                    fontSize: '26px',
                                    lineHeight: '30.47px',
                                    textAlign: 'right',
                                },
                            }}
                        />
                    </Stack>

                    <Stack spacing="6px" mb="40px">
                        <Heading6>필수고시정보</Heading6>
                        {필수고시정보Category ? (
                            <Button variant="outlined" onClick={() => setIsDrawerOpen(true)}>
                                <Stack direction="row" justifyContent="space-between" width="100%">
                                    <Typography
                                        fontWeight="400"
                                        fontSize="26px"
                                        lineHeight="30.47px"
                                        color="#000"
                                    >
                                        {필수고시정보Category}
                                    </Typography>
                                    <Typography
                                        fontWeight="400"
                                        fontSize="26px"
                                        lineHeight="30.47px"
                                        color="#969696"
                                    >
                                        상세보기
                                    </Typography>
                                </Stack>
                            </Button>
                        ) : (
                            <Button
                                variant="outlined"
                                startIcon={<AddIcon />}
                                onClick={() => setIsDrawerOpen(true)}
                            >
                                필수고시정보 등록
                            </Button>
                        )}
                    </Stack>

                    <Stack spacing="6px" mb="40px">
                        <Stack direction="row" justifyContent="space-between" alignItems="end">
                            <Heading6>속성</Heading6>
                            <MuiButton
                                variant="text"
                                startIcon={<DownloadIcon />}
                                sx={{
                                    fontWeight: '500',
                                    fontSize: '22px',
                                    lineHeight: '25.78px',
                                    minHeight: '0',
                                    color: '#000',
                                }}
                            >
                                템플릿 다운로드
                            </MuiButton>
                        </Stack>
                        <MuiButton
                            component="label"
                            variant="outlined"
                            startIcon={<AddIcon />}
                            sx={{
                                height: '64px',
                                fontWeight: '400',
                                fontSize: '26px',
                                lineHeight: '30.47px',
                                color: '#969696',
                                borderColor: '#000',
                                paddingLeft: '25px',
                                paddingRight: '25px',
                            }}
                        >
                            여기에 속성 템플릿을 업로드해주세요.
                            <Box
                                component="input"
                                type="file"
                                sx={{
                                    clip: 'rect(0 0 0 0)',
                                    clipPath: 'inset(50%)',
                                    height: 1,
                                    overflow: 'hidden',
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    whiteSpace: 'nowrap',
                                    width: 1,
                                }}
                            />
                        </MuiButton>
                    </Stack>

                    <Stack spacing="6px" mb="40px">
                        <Heading6>상태</Heading6>
                        <Select
                            value={status}
                            onChange={(e) => setStatus(e.target.value as string)}
                            sx={{
                                '& .MuiSelect-select .notranslate::after': {
                                    content: `"판매 상태를 선택해주세요."`,
                                    color: '#898989',
                                },
                            }}
                        >
                            <MenuItem value="판매상태1">판매상태 1</MenuItem>
                            <MenuItem value="판매상태2">판매상태 2</MenuItem>
                        </Select>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    );
}
