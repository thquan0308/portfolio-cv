"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

const DEFAULT_BTN_CLS =
    "fixed bottom-8 right-6 z-50 flex items-center justify-center w-16 h-16 scale-115 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 p-4 hover:scale-150 transition-all duration-300 ease-out hidden";
const SCROLL_THRESHOLD = 50;

const ScrollToTop = () => {
    const [btnCls, setBtnCls] = useState(DEFAULT_BTN_CLS);

    useEffect(() => {
        if (typeof window === "undefined") return; // Chặn lỗi SSR

        const handleScroll = () => {
            setBtnCls(
                window.scrollY > SCROLL_THRESHOLD
                    ? DEFAULT_BTN_CLS.replace(" hidden", "")
                    : DEFAULT_BTN_CLS + " hidden"
            );
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const onClickBtn = () => {
        if (typeof window !== "undefined") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <button className={btnCls} onClick={onClickBtn}>
            <FaArrowUp />
        </button>
    );
};

export default ScrollToTop;
