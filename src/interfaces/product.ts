export interface 제품 {
    id: string;
    name: string;
    imageSrc: string;
}

export interface 상품 {
    id: string;
    name: string;
    price: number;
    imageSrc: string;
}

export interface 등록 {
    id: string;
    name: string;
    price?: number;
    imageSrc: string;
    amount: number;
}
