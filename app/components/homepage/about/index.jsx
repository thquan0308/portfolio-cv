// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";

function AboutSection() {
    return (
        <div id="about" className="my-12 lg:my-16 relative">
            <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
                <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
                    ABOUT ME
                </span>
                <span className="h-36 w-[2px] bg-[#1a1443]"></span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                <div className="order-2 lg:order-1">
                    <div className="font-medium mb-5 text-[#16f2b3] text-lg uppercase">
                        Who I am?
                    </div>
                    <div className="text-gray-200 mb-2 text-xs lg:text-base">
                        <div>{personalData.description1} 🤷‍♂️</div>
                    </div>
                    <div className="text-gray-200 mb-2  text-xs lg:text-base">
                        I am proficient in versatile languages like{" "}
                        <span
                            className="text-[#ec4899] italic font-bold"
                            style={{
                                fontFamily: "Segoe UI, sans-serif",
                                fontWeight: "bold",
                            }}
                        >
                            Javascript.
                        </span>
                    </div>
                    <div className="text-gray-200 mb-2  text-xs lg:text-base">
                        My field of interest is building new{" "}
                        <span
                            className="text-[#ec4899] italic font-bold"
                            style={{
                                fontFamily: "Segoe UI, sans-serif",
                                fontWeight: "bold",
                            }}
                        >
                            Web Technologies and Products
                        </span>
                    </div>
                    <div className="text-gray-200 mb-2  text-xs lg:text-base">
                        Whenever possible, I also apply my passion for
                        developing products with{" "}
                        <span
                            className="text-[#ec4899] italic font-bold"
                            style={{
                                fontFamily: "Segoe UI, sans-serif",
                                fontWeight: "bold",
                            }}
                        >
                            ReactJS
                        </span>{" "}
                        and{" "}
                        <span
                            className="text-[#ec4899] italic font-bold"
                            style={{
                                fontFamily: "Segoe UI, sans-serif",
                                fontWeight: "bold",
                            }}
                        >
                            NodeJS
                        </span>
                    </div>
                </div>

                <div className="flex justify-center order-1 lg:order-2">
                    <Image
                        src={personalData.profile}
                        width={280}
                        height={280}
                        alt="Trần Hoàng Quân"
                        className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
                    />
                </div>
            </div>
        </div>
    );
}

export default AboutSection;
