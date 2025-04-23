export interface IProduct{
    pName : string;
    pId : string;
    pStatus : ProductStatus;
    pDetails : string;
}

export enum ProductStatus {
    InProgress = "In-progress",
    Dispatched = "Dispatched",
    Delivered = "Delivered"
}