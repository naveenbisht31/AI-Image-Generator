import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="w-full bg-white sm:px-8 px-4 py-4 border-t border-t-[#e6ebf4]">
            <div className="text-center text-black font-medium">
                {currentYear} ArtiGen | Happy creating! 🎨🤖
            </div>
        </div>
    )
}

export default Footer;