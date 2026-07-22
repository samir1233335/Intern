import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-gray-300 px-6 py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

        
        <div>
          <h2 className="text-3xl font-bold text-blue-400 mb-4">
            Itahari Clinic
          </h2>
          <p className="text-gray-400">
            Delivering quality healthcare with compassion and trusted medical professionals.
          </p>

          
          <img
            src="https://images.unsplash.com/photo-1580281657527-47f249e8f4df"
            alt="clinic"
            className="mt-4 rounded-xl shadow-md"
          />
        </div>

       
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li className="hover:text-blue-400 cursor-pointer">Home</li>
            <li className="hover:text-blue-400 cursor-pointer">Doctors</li>
            <li className="hover:text-blue-400 cursor-pointer">Services</li>
            <li className="hover:text-blue-400 cursor-pointer">Contact</li>
          </ul>
        </div>

      
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Contact</h3>

          <div className="space-y-3">
            <p className="flex items-center gap-2">
              <FaPhone /> +977 9800000000
            </p>

            <p className="flex items-center gap-2">
              <FaEnvelope /> ithariclinical@gmail.com
            </p>

            <p className="flex items-center gap-2">
              <FaMapMarkerAlt /> Itahari, Nepal
            </p>
          </div>
        </div>

        
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Follow Us</h3>

          <div className="flex gap-4">
            <div className="p-3 bg-gray-800 rounded-full hover:bg-blue-500 cursor-pointer transition">
              <FaFacebookF />
            </div>

            <div className="p-3 bg-gray-800 rounded-full hover:bg-pink-500 cursor-pointer transition">
              <FaInstagram />
            </div>

            <div className="p-3 bg-gray-800 rounded-full hover:bg-blue-400 cursor-pointer transition">
              <FaLinkedinIn />
            </div>
          </div>
        </div>

      </div>

      
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400">
        © 2026 Itahari Clinic. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;