// import api from "./api";
//
// export const getProduct = async (limit) =>{
//     const url = `products?limit=${limit}`;
//     try {
//         const rs = await api.get(url);
//         return rs.data.products;
//     } catch(error){
//         return [];
//     }
// }
//
//
// export const detailProduct = async (id) =>{
//     const url  = `products/${id}`;
//     try {
//         const rs = await api.get(url);
//         return rs.data;
//     } catch (error){
//         return {};
//     }
// }

import api from "./api";

export const getProduct = async () =>{
    const url = `product`;
    try {
        const rs = await api.get(url);
        return rs.data;
    } catch(error){
        return [];
    }
}


export const detailProduct = async (id) =>{
    const url  = `product/get-by-id-product?id=${id}`;
    try {
        const rs = await api.get(url);
        return rs.data;
    } catch (error){
        return {};
    }
}