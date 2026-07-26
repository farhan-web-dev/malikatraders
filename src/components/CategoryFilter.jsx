import { useState } from "react";
import { FiTool } from "react-icons/fi";
import { FaPaintBrush, FaUtensils, FaBaby } from "react-icons/fa";
import {
  GiRunningShoe,
  GiPuzzle,
  GiTShirt,
  GiMeal,
  GiShop,
} from "react-icons/gi";
import {
  MdLocalHospital,
  MdConveyorBelt,
  MdLight,
  MdOutlineOilBarrel,
} from "react-icons/md";
import { GiAutoRepair, GiAcid, GiTestTubes, GiFactory, GiFlame } from "react-icons/gi";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { LuFrame } from "react-icons/lu";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import "../styles/CategoryFilter.css";

const ICON_MAP = {
  "Boiler O&M Services": GiFactory,
  "Boiler Fuel Supply": GiFlame,
  Electrical: FiTool,
  Bearing: GiAutoRepair, // example without icon; will fallback
  Belts: MdConveyorBelt, // you can swap with a more appropriate icon if desired
  Chemicals: GiAcid,
  "Design & Printing": FaPaintBrush,
  "Health Care Equipments": MdLocalHospital,
  "Housekeeping Items": GiShop,
  "Laboratory Equipment": GiTestTubes,
  "Lighting Equipment": MdLight,
  "Mechanical Items": FaScrewdriverWrench,
  // "Fabrication Work": LuFrame,
  "Safety Items": AiOutlineSafetyCertificate,
  "Oil & Lubricants": MdOutlineOilBarrel,
};

export default function CategoryFilter({ categories, onSelect }) {
  const [active, setActive] = useState("");

  const handleSelect = (cat) => {
    const newVal = active === cat ? "" : cat;
    setActive(newVal);
    onSelect(newVal);
  };

  return (
    <div id="categories" className="category-wrapper container">
      <div className="header-row">
        <div className="section-header">
          <div className="title">Our Categories</div>
          {/* optional subtitle or action could go here */}
        </div>
      </div>
      <div className="scrolling-row">
        {categories.map((c) => {
          const IconComp = ICON_MAP[c];
          return (
            <button
              key={c}
              className={`category-btn ${active === c ? "active" : ""}`}
              onClick={() => {
                handleSelect(c); // Set active category
                // Scroll smoothly to #products
                document.getElementById("products")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              aria-pressed={active === c}
            >
              <div className="icon-wrapper">
                {IconComp ? (
                  <IconComp className="icon" />
                ) : (
                  <div className="fallback">
                    {c
                      .split(/\s+/)
                      .map((w) => w[0])
                      .join("")
                      .toUpperCase()}
                  </div>
                )}
              </div>
              <div className="label">{c}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
