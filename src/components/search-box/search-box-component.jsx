import React, {useState} from 'react';
import { useForm } from "react-hook-form";

const SearchBox = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { register, handleSubmit, watch, errors } = useForm();

    const handleClickFilter = () => setIsOpen(!isOpen);

    const onSubmit = data => {
        console.log(data);
    };

    const handleClickSearch =  e => {
        alert('hola que tal');
    };

    return (
        <section className="max-w-screen-xl mx-auto bg-gray-800 xl:w-72 rounded">
            <div className="flex justify-between px-4 py-3">
                <div className="relative  w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                             className="h-6 w-6 fill-current text-gray-600">
                            <path
                                d="M16.32 14.9l1.1 1.1c.4-.02.83.13 1.14.44l3 3a1.5 1.5 0 0 1-2.12 2.12l-3-3a1.5 1.5 0 0 1-.44-1.14l-1.1-1.1a8 8 0 1 1 1.41-1.41l.01-.01zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path>
                        </svg>
                    </div>
                    <input placeholder="Search by keywords"
                           className="block w-full bg-gray-900 focus:outline-none
                           focus:bg-white focus:text-gray-900 text-white rounded-lg pl-10 pr-4 py-2" />
                </div>
                <button type="button"
                        onClick={handleClickFilter}
                        className="ml-4 inline-flex items-center
                        hover:bg-gray-600 focus:outline-none focus:shadow-outline rounded-lg shadow pl-3 pr-4 bg-gray-700">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                         className="h-6 w-6 fill-current text-gray-500">
                        <path
                            d="M3 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm3 6a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1zm4 5a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4z"></path>
                    </svg>
                    <span className="ml-1 text-white font-medium">Filters</span>
                </button>
                <button onClick={handleClickSearch} type="button"
                        className="ml-4 inline-flex items-center
                        hover:bg-gray-600 focus:outline-none focus:shadow-outline rounded-lg shadow pl-3 pr-4 bg-gray-700">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                         className="h-6 w-6 fill-current text-gray-500">
                        <path
                            d="M3 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm3 6a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1zm4 5a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4z"></path>
                    </svg>
                    <span className="ml-1 text-white font-medium">Search</span>
                </button>
            </div>
            {isOpen &&
            <form className="" onSubmit={handleSubmit(onSubmit)}>
                <div className="lg:flex ">
                    <div className="px-4 py-4 border-t border-gray-900 lg:w-1/3 ">
                        <div className="flex flex-wrap -mx-2">
                            <div>
                                <label name="priceMin" className="block text-sm font-medium leading-5 text-gray-700">Price Min</label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <span className="text-gray-500 sm:text-sm sm:leading-5">€</span>
                                    </div>
                                    <input name="priceMin"
                                            id="price"
                                           className="form-input block w-full pl-7 pr-12 sm:text-sm sm:leading-5"
                                           placeholder="0.00"
                                           ref={register({ required: true })}
                                    />
                                    <div
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                        <span className="text-gray-500 sm:text-sm sm:leading-5">EUR</span>
                                    </div>
                                </div>
                                {errors.priceMin && <p className="mt-2 text-sm text-red-600">Price Min is invalid</p> }
                            </div>
                            <div>
                                <label htmlFor="priceMax" className="block text-sm font-medium leading-5 text-gray-700">Price Max</label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <span className="text-gray-500 sm:text-sm sm:leading-5">€</span>
                                    </div>
                                    <input name="priceMax"
                                           id="price"
                                           className="form-input block w-full pl-7 pr-12 sm:text-sm sm:leading-5"
                                           placeholder="0.00"
                                           ref={register({ required: true })}
                                    />
                                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                        <span className="text-gray-500 sm:text-sm sm:leading-5">EUR</span>
                                    </div>
                                </div>
                                {errors.priceMax && <p className="mt-2 text-sm text-red-600">Price Max is invalid</p> }
                            </div>
                        </div>
                    </div>
                    <div className="px-4 py-4 border-t border-gray-900 lg:w-1/3 lg:border-l xl:w-full">
                        <span className="block text-sm font-semibold text-gray-500">Category</span>
                        <div className="sm:flex sm:-mx-2 lg:block lg:mx-0">
                            <label className="mt-3 sm:w-1/4 sm:px-2 flex items-center lg:w-full lg:px-0">
                                <input type="radio"
                                   name="category"
                                   value="all"
                                   className="form-radio bg-gray-900 focus:bg-gray-700"
                                   checked
                                />
                                <span className="ml-2 text-white">All</span>
                            </label>
                            <label className="mt-3 sm:w-1/4 sm:px-2 flex items-center lg:w-full lg:px-0">
                                <input type="radio"
                                 name="category"
                                 value="work"
                                 className="form-radio bg-gray-900 focus:bg-gray-700"/><span
className="ml-2 text-white">Work</span></label>

                            <label
                                className="mt-3 sm:w-1/4 sm:px-2 flex items-center lg:w-full lg:px-0">
                                <input type="radio"
                                       name="category"
                                       value="mobile"
                                       className="form-radio bg-gray-900 focus:bg-gray-700"/><span
                                className="ml-2 text-white">Mobile</span></label>

                            <label
                            className="mt-3 sm:w-1/4 sm:px-2 flex items-center lg:w-full lg:px-0"><input type="radio"
                                                                                                         name="category"
                                                                                                         value="lifestyle"
                                                                                                         className="form-radio bg-gray-900 focus:bg-gray-700"/><span
                            className="ml-2 text-white">Lifestyle</span></label><label
                            className="mt-3 sm:w-1/4 sm:px-2 flex items-center lg:w-full lg:px-0"><input type="radio"
                                                                                                         name="category"
                                                                                                         value="motor"
                                                                                                         className="form-radio bg-gray-900 focus:bg-gray-700"/><span
                            className="ml-2 text-white">Motor</span></label></div>
                    </div>
                    <div className="px-4 py-4 border-t border-gray-900 lg:w-1/3 lg:border-l xl:w-full"><span
                        className="block text-sm font-semibold text-gray-500">Type</span>
                        <div className="sm:flex sm:-mx-2 lg:block lg:mx-0">
                        <label className="mt-3 sm:w-1/4 sm:px-2 flex items-center lg:w-full lg:px-0">
                            <input type="radio"
                                   name="type"
                                   value="townhouse"
                                   className="form-radio bg-gray-900 focus:bg-gray-700"/>
                            <span className="ml-2 text-white">All</span>
                        </label>
                        <label className="mt-3 sm:w-1/4 sm:px-2 flex items-center lg:w-full lg:px-0">
                            <input type="radio"
                                   name="type"
                                   value="townhouse"
                                   className="form-radio bg-gray-900 focus:bg-gray-700"/>
                            <span className="ml-2 text-white">Buy</span>
                        </label>
                        <label className="mt-3 sm:w-1/4 sm:px-2 flex items-center lg:w-full lg:px-0">
                            <input type="radio"
                                   name="propertyType"
                                   value="townhouse"
                                   className="form-radio bg-gray-900 focus:bg-gray-700"/>
                            <span className="ml-2 text-white">Sell</span>
                        </label>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-900 rounded px-4 py-4 sm:text-right lg:text-right xl:text-right">
                    <button
                        className="block w-full sm:w-auto sm:inline-block bg-indigo-500 hover:bg-indigo-400 font-semibold text-white px-4 py-2 rounded-lg">Update
                        results
                    </button>
                </div>
            </form>
            }

        </section>
    );
}
export default SearchBox;

