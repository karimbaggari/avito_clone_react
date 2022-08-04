import React, { useEffect, useState } from 'react'
import Logo from '../assets/logo.png';
import ProductsGrid from '../components/ProductsGrid';
import { useParams, Link } from 'react-router-dom';

export default function SingleProduct() {
    const { productId } = useParams();
    const [Product, setProduct] = useState([]);

    useEffect(() => {
        const fetchProduct = async () => {
            const rsp = await fetch('/products.json');
            const products = await rsp.json();
            setProduct(products);
        }

        fetchProduct();
    }, [])
    console.log(productId);
    return (
        <>
            <header className="flex justify-between items-center py-4 md:py-8 mb-8 md:mb-12 xl:mb-16" style={{ width: "85" + "em", position: "relative", right: "-17" + "em" }}>
                <Link to="/" className="inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5" aria-label="logo">
                    <img src={Logo} alt="logo" className="mt-2" style={{ width: "100px", height: "25px" }} />
                </Link>
                <a href="#" className="hidden lg:inline-block focus-visible:ring ring-indigo-300 text-white active:text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3" style={{ backgroundColor: "#29A160" }}>Contact Sales</a>

                <button type="button" className="inline-flex items-center lg:hidden focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                    </svg>

                    Menu
                </button>
            </header>
            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="max-w-screen-lg px-4 md:px-8 mx-auto" style={{
                    position: "relative",
                    right: "13" + "em"
                }}>
                    {Product.map((SelectedProduct) => {
                        if (SelectedProduct.id == productId.replace(':', '')) {
                            return (
                                <div className="grid md:grid-cols-2 gap-8" key={SelectedProduct.id}>

                                    <div className="space-y-4">
                                        <div className="bg-gray-100 rounded-lg overflow-hidden relative">
                                            <img src={SelectedProduct.image} loading="lazy" alt="Photo by Himanshu Dewangan" className="w-full h-full object-cover object-center" />

                                            <span className="bg-red-500 text-white text-sm tracking-wider uppercase rounded-br-lg absolute left-0 top-0 px-3 py-1.5">sale</span>
                                        </div>
                                        <div class="grid grid-cols-2 gap-4">
                                            <div class="bg-gray-100 rounded-lg overflow-hidden">
                                                <img src={SelectedProduct.image} style={{ height: "250" + "px" }} />
                                            </div>
                                            <div class="bg-gray-100 rounded-lg overflow-hidden">
                                                <img src={SelectedProduct.image} style={{ height: "250" + "px" }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="md:py-8">
                                        <div className="mb-2 md:mb-3">
                                            <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold">{SelectedProduct.title}</h2>
                                        </div>
                                        <div className="flex items-center mb-6 md:mb-10">
                                            <div className="flex gap-0.5 -ml-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>

                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>

                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>

                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>

                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            </div>

                                            <span className="text-gray-500 text-sm ml-2">4.2</span>
                                        </div>
                                        <div className="mb-4">
                                            <div className="flex items-end gap-2">
                                                <span className="text-gray-800 text-xl md:text-2xl font-bold">{SelectedProduct.price}</span>
                                            </div>

                                            <span className="text-gray-500 text-sm">incl. VAT plus shipping</span>
                                        </div>

                                        <div className="flex items-center text-gray-500 gap-2 mb-6">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                                            </svg>

                                            <span className="text-sm">2-4 day shipping</span>
                                        </div>

                                        <div className="flex gap-2.5">
                                            <a href="#" className="inline-block flex-1 sm:flex-none bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Add to cart</a>

                                            <a href="#" className="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 py-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                </svg>
                                            </a>
                                        </div>

                                        <div className="mt-10 md:mt-16 lg:mt-20">
                                            <div className="text-gray-800 text-lg font-semibold mb-3">Description</div>

                                            <p className="text-gray-500">
                                                This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing.<br /><br />

                                            </p>
                                        </div>
                                    </div>

                                </div>
                            )
                        } else {
                            console.log(SelectedProduct.id, "+", productId.replace(':', ''))
                        }
                    })}
                </div>
            </div>
            <ProductsGrid />
        </>
    )
}
