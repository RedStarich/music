"use client";

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import {RxCaretLeft} from "react-icons/rx";
import {RxCaretRight} from "react-icons/rx";
import {HiHome} from "react-icons/hi";
import {BiSearch} from "react-icons/bi";
import Button from "./Button";



interface HeaderProps{
    children: React.ReactNode;
    className?: string;
}

const Header: React.FC<HeaderProps> = ({
    children,
    className
}) =>{
    const router = useRouter();

    const handleLogout = () =>{
        //handle logout in the future

    }
    return (
        <div
            className={twMerge(`
                h-fit
                bg-gradient-to-b
                from-orange-800
                p-6
            `,
                className
            )}
        >
            <div
                className="
                    w-full
                    mb-4
                    flex
                    items-center
                    justify-between
                "
            >
                <div 
                    className="
                        hidden
                        md:flex
                        gap-x-2
                        items-center
                    "
                >
                    <button
                        onClick={() => router.back()}
                        className="
                            text-white
                            rounded-full
                            bg-black
                            flex
                            items-center
                            justify-center
                            hover:opacity-75
                            transition
                        "
                    >
                        <RxCaretLeft size={35}/>
                    </button>

                    <button
                        onClick={() => router.forward()}
                        className="
                            text-white
                            rounded-full
                            bg-black
                            flex
                            items-center
                            justify-center
                            hover:opacity-75
                            transition
                        "
                    >
                        <RxCaretRight size={35}/>
                    </button>
                </div>
                <div className="flex md:hidden gap-x-2 items-center">
                    <button
                        className="
                        text-black
                        rounded-full
                        p-2
                        bg-white
                        flex
                        items-center
                        justify-center
                        hover:opacity-75
                        transition"
                    >
                        <HiHome size={20}/>
                    </button>
                    <button
                        className="
                        text-black
                        rounded-full
                        p-2
                        bg-white
                        flex
                        items-center
                        justify-center
                        hover:opacity-75
                        transition"
                    >
                        <BiSearch size={20}/>
                    </button>
                </div>
                <div
                    className="
                        flex
                        justify-between
                        items-center
                        gap-x-4
                    "
                >
                    <>
                        <div>
                            <Button
                                onClick={() => {}}
                                className="
                                    bg-transparent
                                    text-neutral-300
                                    font-medium
                                "
                            >
                                Sign Up
                            </Button>
                        </div>
                        <div>
                        <Button
                            onClick={() => {}}
                            className="
                                bg-white
                                px-6
                                py-2
                                font-medium
                            "
                        >
                            Log In
                        </Button>
                        </div>
                    </>

                </div>
            </div>
            {children}
        </div>
    );
}
export default Header;