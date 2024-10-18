
import React, {useState, useEffect} from "react";
import useFetchUserLocalStorage from "../hooks/useFetchUserLocalStorage";
import Calendar from "../components/calendar";
import Button from "../components/button";
import Wave from "react-wavify";
import { StarIcon } from "@heroicons/react/24/solid";

export default function PersonalGrowth() {
    const user = useFetchUserLocalStorage();

    return (
        <div className="bg-neutral grid grid-cols-12 gap-4 p-4">
            {/* Greeting Text */}
            <div className="col-span-8 mt-20 pt-20 pb-20 rounded-pl place-self-auto border-2 border-navygreen-100 w-full text-center place-self-center">            
                
                {user ? (
                    <div className="z-40">
                        <p className="font-bold text-xl">Hello {user.username}! Welcome to</p>
                        <p className="font-bold text-xl">Plantify</p>
                        <p className="mt-6 font-semibold text-md z-30">Be a part of green initiatives by joining our latest campaigns</p>
                        <Button text="Join Campaigns" className="py-2 mt-4 z-40"/>
                    </div>
                ): (
                    <p>Loading...</p>
                )}
                {/* <div className="absolute top-10 left-10">
                    <img src="/assets/flowers.png" alt="flowers" className="w-80"/>
                </div> */}
                {/* Rotating Blob */}
                {/* <div className="w-full bg-tranparent-300">
                    <div className="flex justify-center items-center w-full h-full">
                        <div className="w-full h-[300px] animate-spin-slow">
                            <Wave
                                fill="#DDE6D6"
                                paused={false}
                                options={{
                                    height: 40,
                                    amplitude: 60,
                                    speed: 0.15,
                                    points: 3,
                                }}
                                className="w-full h-full -z-10 rounded-b-pl"
                            />
                        </div>
                    </div>
                </div> */}
            </div>
            
            {/* Goals List */}
            <div className="col-span-4 border-2 border-navygreen-100 bg-navygreen-100 mt-20 p-6 rounded-pl">
                <div className="mb-4 flex items-center justify-between">
                    <div className="font-bold text-md">Goals List</div>
                    <button className="p-2 rounded-full bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FFFFFF" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </button>
                </div>
                
                {/* Single Goal Item */}
                <ul className="flex flex-col gap-4 overflow-y-auto max-h-[260px] py-2">
                    <div className="flex items-center bg-neutral justify-between px-4 py-2 rounded-pl border border-navygreen-100 shadow-sm hover:bg-navygreen-50 transition-colors duration-200">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                name="goal"
                                className="mr-4 h-5 w-5 text-navygreen-500 border-gray-300 rounded focus:ring-navygreen-300"
                            />
                            <label className="text-xsm font-medium text-gray-800">hemlo</label>
                        </div>
                        <div className="bg-yolk rounded-full p-[6px]">
                        </div>   
                    </div>
                </ul>
                <ul className="flex flex-col gap-4 overflow-y-auto max-h-[260px] py-2">
                    <div className="flex items-center bg-neutral justify-between gap-4 px-4 py-2 rounded-pl border border-navygreen-100 shadow-sm hover:bg-navygreen-50 transition-colors duration-200">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                name="goal"
                                className="mr-4 h-5 w-5 text-navygreen-500 border-gray-300 rounded focus:ring-navygreen-300"
                            />
                            <label className="text-xsm font-medium text-gray-800">mauj msti halla gulla</label>
                        </div>
                        <div className="bg-yolk rounded-full p-[6px]">
                        </div>   
                    </div>
                </ul>
                <ul className="flex flex-col gap-4 overflow-y-auto max-h-[260px] py-2">
                    <div className="flex items-center bg-neutral justify-between px-4 py-2 rounded-pl border border-navygreen-100 shadow-sm hover:bg-navygreen-50 transition-colors duration-200">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                name="goal"
                                className="mr-4 h-5 w-5 text-navygreen-500 border-gray-300 rounded focus:ring-navygreen-300"
                            />
                            <label className="text-xsm font-medium text-gray-800">dopamine detox</label>
                        </div>
                        <div className="bg-yolk rounded-full p-[6px]">
                        </div>   
                    </div>
                </ul>
                <ul className="flex flex-col gap-4 overflow-y-auto max-h-[260px] py-2">
                    <div className="flex items-center bg-neutral justify-between px-4 py-2 rounded-pl border border-navygreen-100 shadow-sm hover:bg-navygreen-50 transition-colors duration-200">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                name="goal"
                                className="mr-4 h-5 w-5 text-navygreen-500 border-gray-300 rounded focus:ring-navygreen-300"
                            />
                            <label className="text-xsm font-medium text-gray-800">hemlo</label>
                        </div>
                        <div className="bg-yolk rounded-full p-[6px]">
                        </div>   
                    </div>
                </ul>
            </div>

            {/* Event Calendar */}
            <div className="col-span-4 border-2 border-navygreen-100 p-6 rounded-pl">
                <p className="mb-2 font-bold text-md">Event Calendar</p>
                <Calendar/>
            </div>

            {/* Personal Plants List */}
            <div className="col-span-4 border-2 border-navygreen-100 p-6 rounded-pl">
                <div className="mb-4 flex items-center justify-between">
                    <div className="font-bold text-md">My Plants</div>
                    <button className="p-2 rounded-full bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FFFFFF" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </button>
                </div>
                <ul className="flex flex-col gap-4 overflow-y-auto max-h-[260px]">
                    <div className="flex gap-2 items-center p-2 rounded-pl border border-navygreen-100 shadow-sm bg-navygreen-50 transition-colors duration-200">
                        <img src="/assets/products/plant-3.jpeg" alt="plant img" className="w-20 h-20 object-cover rounded-pl"/> 
                        <div className="max-w-fit flex flex-col p-2">
                            <h1 className="font-semibold text-xmini">String of Pearls</h1>
                            <p className="text-sm">Type: Succulent</p>
                        </div>
                        <div className="max-w-fit bg-yolk flex">
                            <StarIcon className="w-4 hover:text-blue-300"/>
                            <StarIcon className="w-4 hover:text-blue-300"/>
                            <StarIcon className="w-4 hover:text-blue-300"/>
                            <StarIcon className="w-4 hover:text-blue-300"/>
                            <StarIcon className="w-4 hover:text-blue-300"/>
                            <StarIcon className="w-4 hover:text-blue-300"/>
                            <StarIcon className="w-4 hover:text-blue-300"/>
                        </div>
                    </div>
                </ul>
            </div>

            {/* Daily Challenges */}
            <div className="col-span-4 bg-yellow-200 p-6 rounded-md">
                Daily Challenges
            </div>

            {/* Plants of the Season Carousel */}
            <div className="col-span-8 bg-purple-200 p-6 rounded-md">
                Plants of the Season Carousel
            </div>

            {/* Daily Challenges */}
            <div className="col-span-12 bg-pink-200 p-6 rounded-md">
                Daily Challenges
            </div>
        </div>
    );
}
