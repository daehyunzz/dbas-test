import { useState } from 'react';

import AddIcon from '@mui/icons-material/Add';
import DownloadIcon from '@mui/icons-material/Download';
import Box from '@mui/material/Box';
import MuiButton from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

import { MenuItem, Select, TextField } from '@components/Ui';

const Heading6 = styled(Typography)({
    fontWeight: '600',
    fontSize: '24px',
    lineHeight: '28.13px',
    letterSpacing: '1%',
});

// 제품
export function MakeProduct() {
    const [category, setCategory] = useState('');
    const [productCode, setProductCode] = useState('');
    const [isAutoGenerateItemCode, setIsAutoGenerateItemCode] = useState(false);

    const [propertyFile, setPropertyFile] = useState<FileList | null>(null);

    return (
        <Stack width="1500px">
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
                                    setIsAutoGenerateItemCode(e.target.checked);
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
                                if (!isAutoGenerateItemCode) {
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

                        <Stack spacing="6px" mb="40px">
                            {propertyFile ? (
                                <Box
                                    sx={{
                                        borderRadius: '4px',
                                        backgroundColor: '#00448D',
                                        fontSize: '28px',
                                        lineHeight: '32.81px',
                                        color: '#fff',
                                        width: '700px',
                                        height: '64px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {propertyFile[0].name}
                                </Box>
                            ) : (
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
                                        onChange={(e) => {
                                            if (e.target.files) {
                                                setPropertyFile(e.target.files);
                                            }
                                        }}
                                    />
                                </MuiButton>
                            )}
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    );
}
