import { useState } from 'react';

import { Droppable } from '@hello-pangea/dnd';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Divider, IconButton, Stack, Typography, styled } from '@mui/material';
import { observer } from 'mobx-react-lite';

import { Button } from '@components/ui/Button';
import { Counter } from '@components/ui/Counter';
import { MenuItem } from '@components/ui/MenuItem';
import { Select } from '@components/ui/Select';
import { TextField } from '@components/ui/TextField';

import { 등록, 상품, 제품 } from '@/interfaces/product';
import { productStore } from '@/store/productStore';

import { DraggableContainer } from './DraggableContainer';

interface Props<T> {
    id: string;
    title: string;
    list: T[];
}

const Title = ({ title }: { title: string }) => {
    return (
        <Typography
            sx={{
                height: '33px',
                top: '182px',
                left: '370px',
                fontFamily: 'Roboto',
                fontSize: '28px',
                fontWeight: '700',
                lineHeight: '33px',
                letterSpacing: '0.01em',
                textAlign: 'left',
                marginBottom: '14px',
            }}
        >
            {title.replace('_', ' ')}
        </Typography>
    );
};

export const ProductContainer = ({ id, title, list }: Props<제품>) => {
    const [label, setLabel] = useState<string>('최신 등록순');
    return (
        <Droppable droppableId={id}>
            {(droppableProvider) => (
                <StyledDroppableContainer
                    ref={droppableProvider.innerRef}
                    {...droppableProvider.droppableProps}
                >
                    <Title title={title} />
                    <Stack direction="row" justifyContent="center" alignContent="center">
                        <TextField
                            placeholder="찾으시는 제품을 검색해주세요."
                            fullWidth
                            sx={{
                                'boxSizing': 'border-box',
                                'marginRight': '4px',

                                '& .MuiOutlinedInput-root': {
                                    minHeight: '0px',
                                    height: '60px',
                                },
                            }}
                        />
                        <IconButton
                            sx={{
                                width: '60px',
                                height: '60px',
                                color: 'white',
                                background: 'black',
                                borderRadius: 0,
                                alignSelf: 'center',
                            }}
                        >
                            <SearchIcon sx={{ width: '40px', height: '40px' }} />
                        </IconButton>
                    </Stack>
                    <Stack sx={{ width: '178px', height: '60px', marginTop: '10px' }}>
                        <Select
                            fullWidth
                            value={label}
                            onChange={(e) => {
                                const { value } = e.target;
                                setLabel(value as string);
                            }}
                            sx={{
                                '& .MuiInputBase-input.MuiSelect-select': {
                                    fontWeight: '400',
                                    fontSize: '24px',
                                    minHeight: 'auto',
                                    paddingLeft: 0,
                                    paddingRight: 0,
                                },
                                'width': '100%',
                            }}
                        >
                            {['최신 등록순', '최저가순'].map((menu) => (
                                <MenuItem value={menu} key={menu}>
                                    {menu}
                                </MenuItem>
                            ))}
                        </Select>
                    </Stack>
                    <Divider sx={{ marginTop: '10px' }} />
                    <Stack
                        direction="column"
                        sx={{ marginTop: '10px', gap: '16px', overflow: 'auto' }}
                    >
                        {list.map((element, index) => (
                            <DraggableContainer id={element.id} key={element.id} index={index}>
                                <Stack>
                                    <Stack
                                        direction="row"
                                        sx={{
                                            boxSizing: 'border-box',
                                            gap: '16px',
                                        }}
                                    >
                                        <img
                                            alt="상품 이미지"
                                            src={element.imageSrc}
                                            width="139px"
                                            height="137px"
                                        />
                                        <Box
                                            sx={{
                                                height: '100%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                gap: '20px',
                                            }}
                                        >
                                            <Typography sx={{ fontSize: '26px', fontWeight: 400 }}>
                                                제품명
                                            </Typography>
                                            <Typography sx={{ fontSize: '26px', fontWeight: 700 }}>
                                                {element.name}
                                            </Typography>
                                        </Box>
                                    </Stack>
                                </Stack>
                            </DraggableContainer>
                        ))}
                    </Stack>
                    {droppableProvider.placeholder}
                </StyledDroppableContainer>
            )}
        </Droppable>
    );
};

export const ProductWithPrice = ({ id, title, list }: Props<상품>) => {
    const [label1, setLabel1] = useState<string>('최근 일주일');
    const [label2, setLabel2] = useState<string>('매출순');
    return (
        <Droppable droppableId={id}>
            {(droppableProvider) => (
                <StyledDroppableContainer
                    ref={droppableProvider.innerRef}
                    {...droppableProvider.droppableProps}
                >
                    <Title title={title} />
                    <Stack direction="row" justifyContent="center" alignContent="center">
                        <TextField
                            placeholder="찾으시는 상품을 검색해주세요."
                            fullWidth
                            sx={{
                                'boxSizing': 'border-box',
                                'marginRight': '4px',

                                '& .MuiOutlinedInput-root': {
                                    minHeight: '0px',
                                    height: '60px',
                                },
                            }}
                        />
                        <IconButton
                            sx={{
                                width: '60px',
                                height: '60px',
                                color: 'white',
                                background: 'black',
                                borderRadius: 0,
                                alignSelf: 'center',
                            }}
                        >
                            <SearchIcon sx={{ width: '40px', height: '40px' }} />
                        </IconButton>
                    </Stack>
                    <Stack direction="row" gap="8px" sx={{ marginTop: '10px' }}>
                        <Select
                            fullWidth
                            value={label1}
                            onChange={(e) => {
                                const { value } = e.target;
                                setLabel1(value as string);
                            }}
                            sx={{
                                'width': '188px',
                                'height': '60px',
                                '& .MuiInputBase-input.MuiSelect-select': {
                                    fontWeight: '400',
                                    fontSize: '24px',
                                    minHeight: 'auto',
                                    paddingLeft: 0,
                                    paddingRight: 0,
                                },
                            }}
                        >
                            {['최신 등록순', '최저가순'].map((menu) => (
                                <MenuItem value={menu} key={menu}>
                                    {menu}
                                </MenuItem>
                            ))}
                        </Select>
                        <Select
                            fullWidth
                            value={label2}
                            onChange={(e) => {
                                const { value } = e.target;
                                setLabel2(value as string);
                            }}
                            sx={{
                                'width': '137px',
                                'height': '60px',
                                '& .MuiInputBase-input.MuiSelect-select': {
                                    fontWeight: '400',
                                    fontSize: '24px',
                                    minHeight: 'auto',
                                    paddingLeft: 0,
                                    paddingRight: 0,
                                },
                            }}
                        >
                            {['최근 일주일', '최근 한달'].map((menu) => (
                                <MenuItem value={menu} key={menu}>
                                    {menu}
                                </MenuItem>
                            ))}
                        </Select>
                    </Stack>
                    <Divider sx={{ marginTop: '10px' }} />
                    <Stack
                        direction="column"
                        sx={{ marginTop: '10px', gap: '16px', overflow: 'auto' }}
                    >
                        {list.map((element, index) => (
                            <DraggableContainer id={element.id} key={element.id} index={index}>
                                <Stack>
                                    <Stack
                                        direction="row"
                                        sx={{ boxSizing: 'border-box', gap: '16px' }}
                                    >
                                        <img
                                            alt="상품 이미지"
                                            src={element.imageSrc}
                                            width="139px"
                                            height="137px"
                                        />
                                        <Stack sx={{ width: '100%' }} justifyContent="start">
                                            <Box
                                                sx={{
                                                    height: '100%',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'start',
                                                    gap: '20px',
                                                }}
                                            >
                                                <Typography
                                                    sx={{ fontSize: '26px', fontWeight: 400 }}
                                                >
                                                    제품명
                                                </Typography>
                                                <Typography
                                                    sx={{ fontSize: '26px', fontWeight: 700 }}
                                                >
                                                    {element.name}
                                                </Typography>
                                            </Box>
                                            <Box
                                                sx={{
                                                    height: '100%',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'start',
                                                    gap: '20px',
                                                }}
                                            >
                                                <Typography
                                                    sx={{ fontSize: '26px', fontWeight: 400 }}
                                                >
                                                    상품가
                                                </Typography>
                                                <Typography
                                                    sx={{ fontSize: '26px', fontWeight: 700 }}
                                                >
                                                    {element.price.toLocaleString()}원
                                                </Typography>
                                            </Box>
                                        </Stack>
                                    </Stack>
                                </Stack>
                            </DraggableContainer>
                        ))}
                    </Stack>
                    {droppableProvider.placeholder}
                </StyledDroppableContainer>
            )}
        </Droppable>
    );
};

export const RegisterContainer = observer(({ id, title, list }: Props<등록>) => {
    const scrollToProductSetting = () => {
        // scrollIntoView
    };

    const handleChange = (id: string) => (value: number) => {
        console.log('증감', value);
        productStore.등록_수량_업데이트(id, value);
    };
    return (
        <Droppable droppableId={id}>
            {(droppableProvider) => (
                <StyledDroppableContainer
                    ref={droppableProvider.innerRef}
                    {...droppableProvider.droppableProps}
                >
                    <Title title={title} />
                    {list.length === 0 && (
                        <Stack
                            sx={{
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Typography sx={{ fontSize: 22, fontWeight: 400 }}>
                                이곳에 상품으로 등록할 상품 또는 제품을
                            </Typography>
                            <Typography sx={{ fontSize: 22, fontWeight: 400 }}>
                                드래그&드롭하세요
                            </Typography>
                        </Stack>
                    )}
                    <Stack sx={{ gap: '10px', overflowY: 'auto', flex: 1, paddingBottom: '10px' }}>
                        {list.map((element, index) => (
                            <DraggableContainer
                                id={element.id}
                                key={element.id}
                                index={index}
                                height="222px"
                            >
                                <Stack sx={{ overflowY: 'auto' }}>
                                    <Stack direction="row" sx={{ gap: '10px' }}>
                                        <img
                                            alt="상품 이미지"
                                            src={element.imageSrc}
                                            width="139px"
                                            height="137px"
                                        />
                                        <Stack sx={{ width: '100%' }} justifyContent="start">
                                            <Box
                                                sx={{
                                                    height: '100%',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'start',
                                                    gap: '20px',
                                                }}
                                            >
                                                <Typography
                                                    sx={{ fontSize: '26px', fontWeight: 400 }}
                                                >
                                                    제품명
                                                </Typography>
                                                <Typography
                                                    sx={{ fontSize: '26px', fontWeight: 700 }}
                                                >
                                                    {element.name}
                                                </Typography>
                                            </Box>
                                            <Box
                                                sx={{
                                                    height: '100%',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'start',
                                                    gap: '20px',
                                                }}
                                            >
                                                {element.price && (
                                                    <>
                                                        <Typography
                                                            sx={{
                                                                fontSize: '26px',
                                                                fontWeight: 400,
                                                            }}
                                                        >
                                                            상품가
                                                        </Typography>

                                                        <Typography
                                                            sx={{
                                                                fontSize: '26px',
                                                                fontWeight: 700,
                                                            }}
                                                        >
                                                            {element.price.toLocaleString()}원
                                                        </Typography>
                                                    </>
                                                )}
                                            </Box>
                                        </Stack>
                                    </Stack>
                                    <Stack
                                        direction="row"
                                        alignItems="center"
                                        justifyContent="center"
                                        sx={{
                                            height: '92px',
                                            width: '100%',
                                        }}
                                    >
                                        <Typography sx={{ fontSize: '26px', fontWeight: 400 }}>
                                            개수 조절
                                        </Typography>
                                        <Counter
                                            value={productStore.등록_수량_가져오기(element.id)}
                                            onChange={handleChange(element.id)}
                                        />
                                    </Stack>
                                </Stack>
                            </DraggableContainer>
                        ))}
                    </Stack>
                    {list.length > 0 && (
                        <Button
                            onClick={scrollToProductSetting}
                            fullWidth
                            variant="contained"
                            sx={{
                                background: '#00448D',
                                height: '78px',
                                color: '#ffffff',
                            }}
                        >
                            선택 완료 및 상품 설정하기
                        </Button>
                    )}
                </StyledDroppableContainer>
            )}
        </Droppable>
    );
});

const StyledDroppableContainer = styled('ul')`
    position: relative;
    display: flex;
    flex-direction: column;

    width: 488px;
    height: 742px;

    overflow-y: auto;

    margin: 0;
    padding: 10px;

    margin-top: 19px;

    border: 1px solid rgba(0, 0, 0, 0.3);
`;
