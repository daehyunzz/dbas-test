/* eslint-disable @typescript-eslint/no-explicit-any */
import { makeAutoObservable } from 'mobx';

import { 등록, 상품, 제품 } from '../interfaces/product';

/**
 * 1. 상품 리스트
 * 2. 제품 리스트
 * 3. 등록 리스트
 */

export const 제품_리스트: 제품[] = [
    {
        id: '제품1',
        name: 'Tibero Single',
        imageSrc: '',
    },
    {
        id: '제품2',
        name: 'TAC',
        imageSrc: '',
    },
    {
        id: '제품3',
        name: 'TSC',
        imageSrc: '',
    },
    {
        id: '제품4',
        name: 'Open SQL',
        imageSrc: '',
    },
];

export const 상품_리스트: 상품[] = [
    {
        id: '상품1',
        name: 'Tibero Single',
        price: 12000000,
        imageSrc: '',
    },
    {
        id: '상품2',
        name: 'TAC',
        price: 12000000,
        imageSrc: '',
    },
    {
        id: '상품3',
        name: 'TSC',
        price: 12000000,
        imageSrc: '',
    },
    {
        id: '상품4',
        name: 'Open SQL',
        price: 12000000,
        imageSrc: '',
    },
];

export type 리스트_요소 = '제품' | '상품' | '등록';
export type 리스트 = `${리스트_요소}_리스트`;
export type From = {
    list: 리스트;
    index: number;
};
export type To = {
    list: 리스트;
    index: number;
};

class ProductStore {
    상품_리스트: 상품[];
    제품_리스트: 제품[];
    등록_리스트: 등록[];

    constructor(상품_리스트: 상품[], 제품_리스트: 제품[], 등록_리스트: 등록[]) {
        this.상품_리스트 = 상품_리스트;
        this.제품_리스트 = 제품_리스트;
        this.등록_리스트 = 등록_리스트;
        makeAutoObservable(this);
    }

    get 요소_리스트() {
        return [
            { key: '상품_리스트', value: this.상품_리스트 },
            { key: '제품_리스트', value: this.제품_리스트 },
            { key: '등록_리스트', value: this.등록_리스트 },
        ];
    }

    첫_번째_요소_가져오기(type: 리스트) {
        const list = this[type];

        if (list.length > 0) return list[0];
        throw new Error('리스트가 비었습니다.');
    }

    마지막_요소_가져오기(type: 리스트) {
        const list = this[type];
        return list[list.length - 1];
    }

    등록하기(target: 상품 | 제품, index: number) {
        const existElement = this.등록_리스트.find((요소) => {
            console.log(target.id, 요소.id);
            return `등록_${target.id}` === 요소.id;
        });

        console.log({ existElement });
        if (existElement) return;

        const element: 등록 = { ...target, id: `등록_${target.id}`, amount: 0 };
        const copyList = [...this.등록_리스트];
        copyList.splice(index, 0, element);
        this.등록_리스트 = copyList;
        return true;
    }

    업데이트({ list: from, index: fromIndex }: From, { list: to, index: toIndex }: To) {
        const target = this[from][fromIndex];

        // 같은 리스트에서 위치 이동
        if (from === to) {
            const copyList = [...this[from]];
            const [reorderItem] = copyList.splice(fromIndex, 1);
            copyList.splice(toIndex, 0, reorderItem);

            this[from] = copyList as any;

            return true;
        }

        // 제품으로 상품 등록
        if (from !== to && to === '등록_리스트') {
            this.등록하기(target, toIndex);
            return true;
        }

        return false;
    }
}

export const productStore = new ProductStore(상품_리스트, 제품_리스트, []);
