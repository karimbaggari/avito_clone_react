import React from "react";
import SearchInput from './SearchInput';
import { useState, useEffect } from "react";
const Productgrid = (searchEnable) => {
    const [Products, setProducts] = useState([]);
    const MAX_LENGTH = 20;

    useEffect(() => {
        const fetchProducts = async () => {
            const rsp = await fetch("/products.json");
            const products = await rsp.json();
            setProducts(products);
        }
        fetchProducts()
    }, []);
    return (
        <div className=" 2xl:container 2xl:mx-auto">

            <div className=" py-6 lg:px-20 md:px-6 px-4">
             
            <SearchInput />
       
                <hr className=" w-full bg-gray-200 my-6" />
               
                <div className=" grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10">
                    {Products.map((product, key) => {
                        return (
                            <div className=" relative " key={key}>
                                <div className=" absolute top-0 left-0 py-2 px-4 bg-white bg-opacity-50 ">
                                    <p className="text-xs leading-3 text-gray-800">New</p>
                                </div>
                                <div className=" relative group">
                                    <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                                    <img className=" w-full" src={product.image} alt="A girl Posing Img" style={{ height: "320" + "px", borderRadius: "1" + "em" }} />
                                    <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                                        <button className=" font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">Voir Produit</button>
                                        <button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">Enregistrer le Produit</button>
                                    </div>
                                </div>
                                <p className=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4"> {`${product.title.substring(0, MAX_LENGTH)}...`}</p>
                                <p className=" font-semibold text-xl leading-5 text-gray-800 mt-4">{product.price}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Productgrid;
