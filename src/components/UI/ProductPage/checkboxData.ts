
export type Option = {
    label: string;
    value: string;
};

export const priceRangeOptions: Option[] = [
    { label: "$20.00 - $ 50.00", value: "$.200 - $ 50.00" },
    { label: "$50.00 - $ 100.00", value: "$50.00 - $ 100.00" },
];

export const categoryOptions: Option[] = [
    { label: "Tops", value: "Tops" },
    { label: "Bottoms", value: "Bottoms" },
    { label: "Outerwear", value: "Outerwear" },
    { label: "Casual", value: "Casual" },
    { label: "Gowns", value: "Gowns" },
    { label: "Formal", value: "Formal" },
];

export const ratingOptions: Option[] = [
    { label: "1 Star", value: "1 Star" },
    { label: "2 Star", value: "2 Star" },
    { label: "3 Star", value: "3 Star" },
    { label: "4 Star", value: "4 Star" },
    { label: "5 Star", value: "5 Star" },
];
