import { FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
const CommonWhatsappButton = () => {
  return (
    <>
      <div className="fixed top-2/3 left-0 z-50 flex items-center">
        {/* Vertical Buttons */}
        <div className="space-y-2">
          <a
            href="https://wa.me/917022993388?text=Hi, I'm interested in your services!"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-r-lg block"
          >
            <FaWhatsapp size={20} />
          </a>
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan-700 hover:bg-cyan-800 text-white p-3 rounded-r-lg block"
          >
            <FaLinkedinIn size={20} />
          </a>
        </div>
      </div>
    </>
  );
};

export default CommonWhatsappButton;
