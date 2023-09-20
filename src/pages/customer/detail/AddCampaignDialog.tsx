import { useState } from 'react';

import { Add, Search } from '@mui/icons-material';
import {
    Autocomplete,
    Box,
    Button,
    Dialog,
    DialogTitle,
    Divider,
    Paper,
    Stack,
    TextField,
    Typography,
} from '@mui/material';
import { observer } from 'mobx-react-lite';

import tmaxCampaignLogo from '@/assets/tmaxCampaignLogo.svg';

import { CampaignStore } from './campaign.store';

const CAMPAIGNS = ['Tmax Tibero Webina', 'Tibero 무료체험 홍보'];

export const AddCampaignDialog = observer(() => {
    const { isDialogOpen, selectedCampaignId, setIsDialogOpen, setSelectedCampaignId } =
        CampaignStore;
    const [localSelectedCampaignId, setLocalSelectedCampaignId] = useState<string | null>(
        selectedCampaignId
    );

    return (
        <Dialog
            open={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
            sx={{
                '& .MuiDialog-paper': {
                    paddingX: '36px',
                    paddingY: '23px',
                    maxWidth: 'none',
                    borderRadius: '15px',
                    overflow: 'visible',
                },
            }}
        >
            <Add
                sx={{
                    width: '40px',
                    height: '40px',
                    position: 'absolute',
                    top: '-20px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    bgcolor: 'rgba(0, 68, 141, 1)',
                    color: 'rgba(255, 255, 255, 1)',
                    zIndex: '1000',
                    borderRadius: '9999px',
                }}
            />
            <DialogTitle
                sx={{
                    fontSize: '28px',
                    padding: 0,
                    textAlign: 'center',
                }}
            >
                캠페인 추가
            </DialogTitle>
            <Divider sx={{ mt: '20px' }} />
            <Stack
                sx={{
                    paddingX: '56px',
                    paddingY: '22px',
                }}
                direction="column"
            >
                <Stack direction="row">
                    <Typography fontSize="24px" fontWeight="500" color="rgba(177, 30, 30, 1)">
                        *
                    </Typography>
                    <Typography fontSize="24px" fontWeight="500">
                        캠페인
                    </Typography>
                </Stack>
                <Autocomplete
                    value={localSelectedCampaignId}
                    options={CAMPAIGNS}
                    onChange={(_, campaign: string | null) => {
                        setLocalSelectedCampaignId(campaign);
                    }}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            placeholder="캠페인을 검색하세요."
                            InputProps={{
                                ...params.InputProps,
                                endAdornment: (
                                    <Search
                                        sx={{
                                            width: '23px',
                                            height: '23px',
                                            color: 'rgba(150, 164, 176, 1)',
                                        }}
                                    />
                                ),
                                sx: {
                                    'paddingRight': 0,
                                    '&.MuiOutlinedInput-root': {
                                        height: '38.4px',
                                        fontSize: '16px',
                                    },
                                },
                            }}
                        />
                    )}
                    renderOption={(props, option) => (
                        <li {...props}>
                            <Box component="button" sx={{ all: 'unset' }}>
                                <Stack direction="row" px="21px" py="18px" alignItems="center">
                                    <Box
                                        component="img"
                                        src={tmaxCampaignLogo}
                                        sx={{ width: '40px', height: '40px' }}
                                    />
                                    <Typography
                                        fontSize="22px"
                                        fontWeight="400"
                                        sx={{ ml: '15px' }}
                                    >
                                        {option}
                                    </Typography>
                                </Stack>
                            </Box>
                        </li>
                    )}
                    sx={{
                        'mt': '10px',
                        'width': '535px',
                        '& .MuiAutocomplete-inputRoot': {
                            paddingX: '12px !important',
                            paddingY: 0,
                        },
                    }}
                    PaperComponent={({ children }) => (
                        <Paper
                            sx={{
                                'boxShadow': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                                'borderRadius': '5px',
                                '& .MuiAutocomplete-option': {
                                    padding: 0,
                                },
                            }}
                        >
                            <Stack direction="column">
                                {children}
                                <Divider />
                                <Button
                                    variant="text"
                                    startIcon={<Add sx={{ width: '20px', height: '20px' }} />}
                                    sx={{
                                        justifyContent: 'flex-start',
                                        paddingX: '30px',
                                        fontSize: '22px',
                                        color: '#000',
                                    }}
                                >
                                    새 캠페인
                                </Button>
                            </Stack>
                        </Paper>
                    )}
                />
                <Stack direction="row" justifyContent="center" sx={{ mt: '237px' }} spacing="20px">
                    <Button
                        variant="contained"
                        sx={{
                            width: '110px',
                            height: '40px',
                            bgcolor: 'rgba(235, 235, 235, 1)',
                            color: 'rgba(0, 0, 0, 1)',
                            fontSize: '16px',
                            fontWeight: '600',
                        }}
                        onClick={() => setIsDialogOpen(false)}
                    >
                        취소
                    </Button>
                    <Button
                        variant="contained"
                        sx={{
                            width: '110px',
                            height: '40px',
                            bgcolor: 'rgba(0, 68, 141, 1)',
                            color: 'rgba(255, 255, 255, 1)',
                            fontSize: '16px',
                            fontWeight: '600',
                        }}
                        onClick={() => {
                            setSelectedCampaignId(localSelectedCampaignId);
                            setIsDialogOpen(false);
                        }}
                    >
                        등록
                    </Button>
                </Stack>
            </Stack>
        </Dialog>
    );
});
