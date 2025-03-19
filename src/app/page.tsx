import Image from "next/image";
import Navbar from '../components/Navbar';
import chatbotIcon from "../../public/chatbot_icon.png"
// import NotFoundPage from "@/components/NotFoundPage";

export default function Home() {
  return (
    <div >
    <div className="relative z-10">
  <Navbar />
</div>
    <nav className="flex items-center justify-between bg-white/10 backdrop-blur-md  shadow-md">
  <h1 className="text-green-800 font-bold text-xl flex justify-center items-center pl-80 "></h1>
  <button className="text-white font-semibold px-4 py-2 rounded-lg mt-6 pr-14">
    <Image src={chatbotIcon} alt="Chatbot Icon" width={50} height={50} />
  </button>
</nav>
    {/* <NotFoundPage/> */}
  </div>

      
  );
}
