import React from 'react'
import {IProduct} from '../models' 

interface ProductProps {
    product: IProduct
}

export function Product(props: ProductProps) {
    props.product.rating.count 
    return (
        <div
            className="border py-2 px-4 rounded flex-col items-center mb-2" 
        >
            {props.product.title}
        </div>
    )
}