import Image from "next/image"; 
import errorimage from '../../public/image.png'
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <header className="w-full text-center py-6 font-bold text-xl">404 NOT FOUND</header>
      <section className="flex flex-col md:flex-row items-center justify-center mt-20 px-6 md:px-16 lg:px-24">
          <div className="image flex justify-center md:w-1/2">
            <Image
              src={errorimage} 
              alt="Scarecrow"
              className="w-80 md:w-96 animate-pulse"
              width={384} 
              height={384} 
            />
          </div>
          <div className="text flex flex-col items-center md:items-start md:w-1/2 gap-6 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold">I have bad news for you</h1>
            <p className="text-lg md:text-xl w-3/4 md:w-2/3">
              The page you were looking for does not exist or is temporarily unavailable.
            </p>
            <Link
              href="/"
              className="text-white bg-black px-6 py-3 rounded-md transition duration-300 hover:bg-white hover:text-black border border-black"
            >
              Back to Homepage
              </Link>
          </div>
      </section>
    </div>
  );
};

export default NotFoundPage;