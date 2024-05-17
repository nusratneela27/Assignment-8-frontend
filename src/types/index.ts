import { StaticImageData } from "next/image";

export interface SaleItem {
    id: string;
    title: string;
    img: StaticImageData;
    price: string;
}