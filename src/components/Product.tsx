import React from 'react'
import {IProduct} from '../models' 

interface ProductProps {
    product: IProduct
}

export function Product(props: any) {
    return (
        <div
            className="border py-2 px-4 rounded flex-col items-center mb-2" 
        >
            Product!
        </div>
    )
}