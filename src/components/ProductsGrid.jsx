import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const Productgrid = (props) => {
    const [Products, setProducts] = useState([]);
    const [title, setTitle] = useState("")
    const MAX_LENGTH = 20;
    useEffect(() => {
        const fetchProducts = async () => {
            const rsp = await fetch("/products.json");
            const products = await rsp.json();
            setProducts(products);
        }
        fetchProducts()
    }, []);

    let isIt = false;


    console.log(title)
    return (
        <div className=" 2xl:container 2xl:mx-auto">
            <div className=" py-6 lg:px-20 md:px-6 px-4">
                <form>
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                    <div className="relative" style={{ display: "flex", justifyContent: "flex-end" }}>
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none" style={{ position: "relative", left: "12px" }}>
                            <svg aria-hidden="true" className="w-5 h-5 absolute text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input type="search" onChange={event => setTimeout(() => setTitle(event.target.value), 500)} id="default-search" placeholder="Que recherchez-vous?" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" style={{ width: "39" + "em" }} required="" />
                        <button type='button' className="text-white absolute right-2.5 bottom-2.5 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" style={{ background: "#FF4C59" }}>Search</button>
                    </div>
                </form>
                <hr className=" w-full bg-gray-200 my-6" />
                <div className=" grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10">
                    {Products.map((product, key) => {
                        // eslint-disable-next-line no-lone-blocks
                        {
                            if (product.title.toString().includes(title)) {
                                { isIt = true }
                                return (
                                    <div className="relative" id="elementBox" key={key}>
                                        <div className=" absolute top-0 left-0 py-2 px-4 bg-white bg-opacity-50">
                                            <p className="text-xs leading-3 text-gray-800">New</p>
                                        </div>
                                        <div className=" relative group">
                                            <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                                            <img className=" w-full" src={product.image} alt="A girl Posing Img" style={{ height: "320" + "px", borderRadius: "1" + "em" }} />
                                            <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                                                <button className=" font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full"><a href={`/products:${product.id}`}>Voir Produit</a></button>
                                                <button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">Livraison incluse</button>
                                            </div>
                                        </div>
                                        <p className=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4"> {`${product.title.substring(0, MAX_LENGTH)}...`}</p>
                                        <p className=" font-semibold text-xl leading-5 text-gray-800 mt-4">{product.price}</p>
                                    </div>
                                )
                            }
                        }

                    })}
                    {isIt == false ? <div className="flex w-full" style={{ position: "relative", left: "18" + "em", fontSize: "30px", fontWeight: "bold" }}><h1 className="flex w-full justify-center">Product Not Found</h1></div> : console.log("hi")}

                </div>
            </div>

        </div>
    );
};

export default Productgrid;
