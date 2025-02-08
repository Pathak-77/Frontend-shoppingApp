import React from "react";


const Footer = () => {
    return(
    <footer>
        <section className="p-10 flex flex-col sm:flex-row justify-between items-start bg-lime-900 text-white">
            <div className="mt-3 cursor-pointer w-full sm:w-[200px] mb-6 sm:mb-0">
            <img src="/" alt="" className="w-full h-auto" />
            <p className="w-full sm:w-[320px] md:w-[320px] mt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias illum voluptatum tempora ipsam quas alias blanditiis, necessitatibus animi, provident dolore, consequuntur harum velit sapiente iusto doloribus! Velit quis facilis eos!</p>
            </div>
            
            <div className="mb-6 md:mb-0 sm:mb-0">
            <h3 className="text-lg">Links</h3>
            <ul className="p-2">
                <li>
                <a href="/home" className="hover:underline">Home</a>
                </li>
                <li>
                <a href="/about" className="hover:underline">About</a>
                </li>
                <li>
                <a href="/services" className="hover:underline">Services</a>
                </li>
            </ul>
            </div>

            <div className="mb-6 md:mb-0 sm:mb-0">
            <h3 className="text-lg">Contact us: 1234567890</h3>
            
            <h3 className="text-lg my-8">&#169; Copyrights 2013 by NBCRC. All Rights Reserved</h3> 
            </div>
            
            <div className="mt-4 sm:mt-0 md:mt-0">
            <h3 className="text-lg">CDO Regd. No. 544</h3> 
            </div>
        </section>
    </footer>

    );
};

export default Footer;