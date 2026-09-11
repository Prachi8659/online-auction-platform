import { Link } from "react-router-dom";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import aboutimg from "../assets/aboutus.png";
import dev1 from "../assets/dev1.jpg";
import dev2 from "../assets/dev2.jpg";
import dev3 from "../assets/dev3.jpg";
import CreateEarnHome from "../components/home/CreateEarnHome";

const AboutUs = () => {
  const devs = [
    {
      id: 1,
      src: dev1,
      name: "Haripriya Burase",
      skill: "Frontend Developer",
      link1: "https://www.linkedin.com/in/abdul-rehman-butt-b73946206/",
      link2: "https://github.com/Abdul-Rehmanpk",
    },
    {
      id: 2,
      src: dev2,
      name: "Riddhi Sardesai",
      skill: "BackEnd Developer",
      link1: "https://www.linkedin.com/in/yasir-mukhtar-85b590228/",
      link2: "https://github.com/Yasir-Mukthar",
    },
    {
      id: 3,
      src: dev3,
      name: "Sabina Mujawar",
      skill: "Frontend Developer",
      link1: "https://www.linkedin.com/in/hassaanvfx/",
      link2: "https://github.com/hassaancode",
    },
  ];

  return (
    <>
      <div className="text-white flex items-center justify-center flex-col h-[280px] bg-cover bg-hero-img">
        <h1 id="home" className="text-center font-bold text-3xl">
          About Us
        </h1>
        <div className="flex gap-2 font-medium pt-2">
          <Link
            to={"/"}
            className=" no-underline hover:text-theme-color transition-all"
          >
            Home
          </Link>
          <span>/</span>
          <span className="text-theme-color">About Us</span>
        </div>
      </div>
      {/* About US PARENT */}
      <div className="text-white flex flex-col gap-20 pt-20 px-6 lg:px-11 ">
  {/* ABOUT US Section */}
  <div className="flex items-center gap-4 flex-wrap lg:flex-nowrap">
    <img className="min-w-48 " src={aboutimg} alt="aboutusimage" />
    
    <div className="flex flex-col gap-4 lg:min-w-[50%] lg:w-1/2">
      <div className="mb-4">
        <span className="text-lg tracking-[5px] uppercase text-theme-color font-semibold">
          About Us
        </span>
        <h2 className="mt-2 text-4xl font-medium">
          Simple and Easy Online Auction Platform
        </h2>
      </div>

      <div className="text-body-text-color">
        <p className="mb-2">
          We are an online auction website where people can buy and sell digital products. 
          Our platform connects artists, designers, and creators from around the world.
        </p>

        <p className="mb-2">
          You can explore different digital items like logos, videos, graphics, and more. 
          Users can place bids and get the best deals in a fun and easy way.
        </p>

        <p>
          You can also become a seller by uploading your own creations. Start an auction, 
          reach many users, and earn money from your work.
        </p>
      </div>
    </div>
  </div>

  {/* PROCESS SECTION */}
  <div className="max-w-[1500px] m-auto">
    <div className="mb-10 text-center">
      <span className="text-lg tracking-[5px] uppercase text-theme-color font-semibold">
        Process
      </span>
      <h2 className="mt-2 text-4xl font-medium">
        Create And Sell{" "}
        <span className="text-color-primary">Your Products</span>
      </h2>
    </div>

    <div className="grid grid-cols-1 m-auto gap-5 w-full md:grid-cols-2 lg:grid-cols-4">
      
      <div className="flex flex-col text-white gap-4 p-8 rounded-2xl bg-theme-bg">
        <h2 className="text-5xl font-bold text-stroke">01</h2>
        <h3 className="text-2xl font-bold">Create Your Account</h3>
        <p className="text-body-text-color">
          Sign up for free and start using the platform easily.
        </p>
      </div>

      <div className="flex flex-col text-white gap-4 p-8 rounded-2xl bg-theme-bg">
        <h2 className="text-5xl font-bold text-stroke">02</h2>
        <h3 className="text-2xl font-bold">Create Auction</h3>
        <p className="text-body-text-color">
          Add your product with details so buyers can see it.
        </p>
      </div>

      <div className="flex flex-col text-white gap-4 p-8 rounded-2xl bg-theme-bg">
        <h2 className="text-5xl font-bold text-stroke">03</h2>
        <h3 className="text-2xl font-bold">Set Price</h3>
        <p className="text-body-text-color">
          Set a starting price and let users place bids.
        </p>
      </div>

      <div className="flex flex-col text-white gap-4 p-8 rounded-2xl bg-theme-bg">
        <h2 className="text-5xl font-bold text-stroke">04</h2>
        <h3 className="text-2xl font-bold">Sell Product</h3>
        <p className="text-body-text-color">
          Publish your product and earn money from bids.
        </p>
      </div>

    </div>
  </div>

  <CreateEarnHome />
</div>
    </>
  );
};

export default AboutUs;
