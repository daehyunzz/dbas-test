import Divider from '@mui/material/Divider';
import MuiDrawer from '@mui/material/Drawer';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { Button, MenuItem, Select, TextField } from '@components/Ui';

const CATEGORIES = [
    '사무용기기(컴퓨터/노트북/프린터)',
    '광학기기(디지털카메라/캠코더)',
    '주방용품',
    '화장품',
    '소프트웨어',
    '식품',
    '가공식품',
];

const INFOS = [
    '용도 및 기능',
    '제품규격',
    '제공방식',
    '제조일자',
    '제작자 또는 공급자',
    '이용조건',
    '이용기간',
    '최소 시스템 사양',
];

type DrawerProps = {
    open: boolean;
    onClose: () => void;
    category: string;
    setCategory: (category: string) => void;
};
export function Drawer({ open, onClose, category, setCategory }: DrawerProps) {
    return (
        <MuiDrawer anchor="right" open={open} onClose={onClose}>
            <Stack justifyContent="space-between" height="100%">
                <Stack width="562px" px="40px" py="32px">
                    <Typography fontSize="24px" fontWeight="700" lineHeight="28.13px">
                        필수고시정보
                    </Typography>
                    <Divider sx={{ mt: '20px', borderColor: '#000' }} />
                    <Typography fontSize="24px" fontWeight="700" lineHeight="28.13px" mt="37px">
                        필수고시정보
                    </Typography>
                    <Select
                        fullWidth
                        value={category}
                        onChange={(e) => setCategory(e.target.value as string)}
                        sx={{
                            '& .MuiSelect-select .notranslate::after': {
                                content: `"상품군을 선택하세요."`,
                                color: '#898989',
                            },
                            'mt': '16px',
                            '&.MuiOutlinedInput-root': {
                                'height': '64px',
                                '& fieldset': {
                                    borderColor: '#000',
                                },
                            },
                            '& .MuiInputBase-input.MuiSelect-select': {
                                fontWeight: '400',
                                fontSize: '28px',
                                minHeight: 'auto',
                            },
                        }}
                    >
                        {CATEGORIES.map((category) => (
                            <MenuItem
                                key={category}
                                value={category}
                                sx={{
                                    fontWeight: '400',
                                    fontSize: '28px',
                                    minHeight: 'auto',
                                }}
                            >
                                {category}
                            </MenuItem>
                        ))}
                    </Select>
                    {category &&
                        INFOS.map((info) => (
                            <TextField
                                key={info}
                                fullWidth
                                placeholder={info}
                                variant="outlined"
                                sx={{ marginTop: '6px' }}
                            />
                        ))}
                </Stack>
                <Stack height="85px" direction="row" justifyContent="space-between">
                    <Button
                        sx={{
                            'backgroundColor': '#EFEFEF',
                            'color': '#000',
                            '&:hover': {
                                backgroundColor: '#EFEFEF',
                            },
                        }}
                        onClick={onClose}
                    >
                        취소
                    </Button>
                    <Button
                        sx={{
                            'backgroundColor': '#00448D',
                            'color': '#FFF',
                            '&:hover': {
                                backgroundColor: '#00448D',
                            },
                        }}
                        onClick={onClose}
                    >
                        완료
                    </Button>
                </Stack>
            </Stack>
        </MuiDrawer>
    );
}
