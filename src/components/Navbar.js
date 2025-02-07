import React, { useState } from "react"
import "tailwindcss/tailwind.css"
import { FaSearch } from "react-icons/fa"
import { useRouter } from "next/router"
import { CiMenuBurger } from "react-icons/ci";

const Navbar = () => {
  const router = useRouter()
  const [language, setLanguage] = useState("Indonesia")
  const [hoveredItem, setHoveredItem] = useState(null)

  const menuOptions = {
    destinations: [
      {
        slug: "jembatan-cinta",
        name: "Jembatan Cinta"
      },
      {
        slug: "panah-asmara",
        name: "Panah Asmara"
      },
      {
        slug: "pulau-payung",
        name: "Pulau Payung"
      },
    ],
    history: ["Makam Raja Tidung", "Tradisi & Kearifan Lokal"],
    article: ["Your Gateway to Paradise in Kepulauan Seribu", "Panduan Kuliner"],
    map: ["Pembagian Wilayah Pulau Tidung", "Peta Batas Administrasi"],
  }

  return (
    <div className="py-5 px-7 flex flex-row items-center justify-between relative z-99 fixed top-0 left-0">
      <h1 className="font-bold text-2xl flex-1 flex gap-1 font-playfair items-center text-green cursor-pointer" onClick={() => router.push("/")}>
        <img src="/assets/eksplortidung-logo.png" className="w-[30px] h-[30px]"/>
        <img src="/assets/eksplortidung-title-final.png" className="w-[200px] h-[30px]"/>
        </h1>
      <div className="flex gap-3 relative text-dark_green md:flex hidden md:block">
      <div
          className="relative"
          onMouseEnter={() => setHoveredItem("profile")}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <p
            className="font-bold p-3 rounded-xl hover:bg-gray-200 transition duration-300 ease-in-out cursor-pointer"
            onClick={() => router.push("/")}
          >
            PROFIL
          </p>
        </div>
        <div
          className="relative"
          onMouseEnter={() => setHoveredItem("destinations")}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <p
            className="font-bold p-3 rounded-xl hover:bg-gray-200 transition duration-300 ease-in-out cursor-pointer"
            onClick={() => router.push("/places")}
          >
            TEMPAT WISATA
          </p>
          {hoveredItem === "destinations" && (
            <div className="absolute top-14 left-0 bg-white shadow-lg rounded-lg w-48">
              {menuOptions.destinations.map((item, index) => (
                <p
                  key={index}
                  className="cursor-pointer hover:bg-gray-200 rounded-md p-3 transition w-[100%] text-sm font-semibold"
                  onClick={() => router.push(`/places/${item.slug}`)}
                >
                  {item.name}
                </p>
              ))}
            </div>
          )}
        </div>

        <div
          className="relative"
          onMouseEnter={() => setHoveredItem("culinary")}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <p
            className="font-bold p-3 rounded-xl hover:bg-gray-200 transition duration-300 ease-in-out cursor-pointer"
            onClick={() => router.push("/culinary")}
          >
            KULINER
          </p>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setHoveredItem("history")}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <p
            className="font-bold p-3 rounded-xl hover:bg-gray-200 transition duration-300 ease-in-out cursor-pointer"
            onClick={() => router.push("/history")}
          >
            BUDAYA DAN SEJARAH
          </p>
          {hoveredItem === "history" && (
            <div className="absolute top-14 left-0 bg-white shadow-lg rounded-lg w-48">
              {menuOptions.history.map((item, index) => (
                <p
                  key={index}
                  className="cursor-pointer hover:bg-gray-200 rounded-md p-3 transition w-[100%] text-sm font-semibold"
                  onClick={() => alert(`Navigate to ${item}`)}
                >
                  {item}
                </p>
              ))}
            </div>
          )}
        </div>

        <div
          className="relative"
          onMouseEnter={() => setHoveredItem("map")}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <p
            className="font-bold p-3 rounded-xl hover:bg-gray-200 transition duration-300 ease-in-out cursor-pointer"
            onClick={() => router.push("/map")}
          >
            PETA
          </p>
          {hoveredItem === "map" && (
            <div className="absolute top-14 left-0 bg-white shadow-lg rounded-lg w-48">
              {menuOptions.map.map((item, index) => (
                <p
                  key={index}
                  className="cursor-pointer hover:bg-gray-200 rounded-md p-3 transition w-[100%] text-sm font-semibold"
                  onClick={() => alert(`Navigate to ${item}`)}
                >
                  {item}
                </p>
              ))}
            </div>
          )}
        </div>
        <div
          className="relative"
          onMouseEnter={() => setHoveredItem("article")}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <p
            className="font-bold p-3 rounded-xl hover:bg-gray-200 transition duration-300 ease-in-out cursor-pointer"
            onClick={() => router.push("/article")}
          >
            ARTIKEL
          </p>
          {hoveredItem === "article" && (
            <div className="absolute top-14 left-0 bg-white shadow-lg rounded-lg w-48">
              {menuOptions.article.map((item, index) => (
                <p
                  key={index}
                  className="cursor-pointer hover:bg-gray-200 rounded-md p-3 transition w-[100%] text-sm font-semibold"
                  onClick={() => alert(`Navigate to ${item}`)}
                >
                  {item}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex-1 flex md:flex justify-end items-center gap-5 md:block hidden">
        <button
          className="font-bold rounded-xl p-2 bg-dark_green text-lime_yellow"
          onClick={() => setLanguage(language === "Indonesia" ? "English" : "Indonesia")}
        >
          {language === "Indonesia" ? "ENG" : "INA"}
        </button>
        <FaSearch className="text-xl text-dark_green" />
      </div>
      <div className="md:hidden block">
          <CiMenuBurger className="text-dark_green font-semibold"/>
      </div>
    </div>
  )
}

export default Navbar
