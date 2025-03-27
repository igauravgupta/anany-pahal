import { Link } from "react-router";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* About Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">About Anany Pahal</h3>
                    <p className="text-gray-400">Anany Pahal is an NGO dedicated to education, healthcare, environmental protection, and skill development, striving to create a better society for all.</p>
                </div>
                
                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                    <ul className="text-gray-400 space-y-2">
                        <li><Link to="/" className="hover:text-red-500">Home</Link></li>
                        <li><Link to="/about" className="hover:text-red-500">About</Link></li>
                        <li><Link to="/initiatives" className="hover:text-red-500">Initiatives</Link></li>
                        <li><Link to="/contact" className="hover:text-red-500">Contact</Link></li>
                    </ul>
                </div>
                
                {/* Contact Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                    <p className="text-gray-400">Email: <a href="mailto:contact@ananypahal.org" className="hover:text-red-500">contact@ananypahal.org</a></p>
                    <p className="text-gray-400">Phone: +91-9876543210</p>
                    <div className="flex space-x-4 mt-3">
                        <a href="#" className="text-gray-400 hover:text-red-500" aria-label="Facebook"><FaFacebook /></a>
                        <a href="#" className="text-gray-400 hover:text-red-500" aria-label="Twitter"><FaTwitter /></a>
                        <a href="#" className="text-gray-400 hover:text-red-500" aria-label="Instagram"><FaInstagram /></a>
                        <a href="#" className="text-gray-400 hover:text-red-500" aria-label="LinkedIn"><FaLinkedin /></a>
                    </div>
                </div>
            </div>
            
            {/* Footer Bottom */}
            <div className="text-center text-gray-500 mt-6 border-t border-gray-700 pt-4">
                <p>&copy; {currentYear} Anany Pahal. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
