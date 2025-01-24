import React, { useState } from "react"
import "tailwindcss/tailwind.css"
import { FaSearch } from "react-icons/fa"
import { useRouter } from "next/router"
import { GiIsland } from "react-icons/gi"

const Navbar = () => {
  const router = useRouter()
  const [language, setLanguage] = useState("Indonesia")
  const [hoveredItem, setHoveredItem] = useState(null)

  const menuOptions = {
    destinations: ["Jembatan Cinta", "Saung Sunset", "Pulau Payung"],
    culinary: ["Sate Tidung", "Ikan Bakar", "Es Kelapa"],
    history: ["Museum Sejarah", "Rumah Tradisional"],
    article: ["Tips Wisata", "Panduan Kuliner"],
  }

  return (
    <div className="py-5 px-7 flex items-center justify-between relative">
      <h1 className="font-bold text-2xl flex-1 flex gap-1 font-playfair items-center text-green">
        <GiIsland className="text-green-500"/>   
        Explore Tidung
        </h1>
      <div className="flex gap-3 flex=4 relative">
        <div
          className="relative"
          onMouseEnter={() => setHoveredItem("destinations")}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <p
            className="font-bold p-3 rounded-xl hover:bg-gray-200 transition duration-300 ease-in-out cursor-pointer"
            onClick={() => router.push("/destinations")}
          >
            Tempat Wisata
          </p>
          {hoveredItem === "destinations" && (
            <div className="absolute top-14 left-0 bg-white shadow-lg rounded-lg w-48">
              {menuOptions.destinations.map((item, index) => (
                <p
                  key={index}
                  className="cursor-pointer hover:bg-gray-200 rounded-md p-2 transition w-[100%]"
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
          onMouseEnter={() => setHoveredItem("culinary")}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <p
            className="font-bold p-3 rounded-xl hover:bg-gray-200 transition duration-300 ease-in-out cursor-pointer"
            onClick={() => router.push("/culinary")}
          >
            Kuliner
          </p>
          {hoveredItem === "culinary" && (
            <div className="absolute top-14 left-0 bg-white shadow-lg rounded-lg w-48">
              {menuOptions.culinary.map((item, index) => (
                <p
                  key={index}
                  className="cursor-pointer hover:bg-gray-200 rounded-md p-2 transition"
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
          onMouseEnter={() => setHoveredItem("history")}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <p
            className="font-bold p-3 rounded-xl hover:bg-gray-200 transition duration-300 ease-in-out cursor-pointer"
            onClick={() => router.push("/history")}
          >
            Sejarah
          </p>
          {hoveredItem === "history" && (
            <div className="absolute top-14 left-0 bg-white shadow-lg rounded-lg w-48">
              {menuOptions.history.map((item, index) => (
                <p
                  key={index}
                  className="cursor-pointer hover:bg-gray-200 rounded-md p-2 transition"
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
            Artikel
          </p>
          {hoveredItem === "article" && (
            <div className="absolute top-14 left-0 bg-white shadow-lg rounded-lg w-48">
              {menuOptions.article.map((item, index) => (
                <p
                  key={index}
                  className="cursor-pointer hover:bg-gray-200 rounded-md p-2 transition"
                  onClick={() => alert(`Navigate to ${item}`)}
                >
                  {item}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex-1 flex justify-end items-center gap-5">
        <button
          className="font-bold rounded-xl p-2 bg-gray-300"
          onClick={() => setLanguage(language === "Indonesia" ? "English" : "Indonesia")}
        >
          {language === "Indonesia" ? "ENG" : "INA"}
        </button>
        <FaSearch className="text-xl" />
      </div>
    </div>
  )
}

export default Navbar
