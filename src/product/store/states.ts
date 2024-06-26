export interface ProductState {

    products: Product[]
    product: Product | null
}

export interface Product {
    productId: number
    productName: string
    productPrice: number
    writer: string
    content: string
    productCategory: string
    productTitleImage: string
    productContentImage: string
    regDate: string
    updDate: string
}

const state: ProductState = {
    products: [],
    product: null,
}

export default state