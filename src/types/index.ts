export interface Products {
    _id: string;
    category: string,
    description: string;
    title: string;
    image: string;
    price: number;
    flash_sale: string;
    ratings: number;
}

export interface ProductId {
    params: {
        productId: string;
    };
}



// =========== for static image =============

// import { StaticImageData } from "next/image";

// export interface SaleItem {
//     id: string;
//     title: string;
//     img: StaticImageData;
//     price: string;
// }