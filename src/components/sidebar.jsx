"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const [hovered, setHovered] = useState("");

  const pathName = usePathname();
  const currentPath = pathName;

  const handleMouseEnter = (icon) => {
    setHovered(icon);
  };

  const handleMouseLeave = () => {
    setHovered("");
  };

  return (
    <div className="h-screen w-20 flex flex-col bg-gray-900 text-white shadow-lg border-r border-[#A1A1AA] border-opacity-25">
      <div className="flex flex-col items-center justify-center flex-1 space-y-2">
        <SidebarIcon
          icon="/icons/home-inactive.png"
          activeIcon="/icons/home.png"
          link="/"
          tooltip="Home"
          hovered={hovered}
          setHovered={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          currentPath={currentPath}
        />
        <SidebarIcon
          icon="/icons/trust-inactive.png"
          activeIcon="/icons/trust.png"
          link="/public-markets"
          tooltip="Public Markets"
          hovered={hovered}
          setHovered={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          currentPath={currentPath}
        />
        <SidebarIcon
          icon="/icons/flower-inactive.png"
          activeIcon="/icons/flower.png"
          link="/invest"
          tooltip="Alternatives"
          hovered={hovered}
          setHovered={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          currentPath={currentPath}
        />
        <SidebarIcon
          icon="/icons/cube-inactive.png"
          activeIcon="/icons/cube.png"
          link="/invest"
          tooltip="Dynamic Plan"
          hovered={hovered}
          setHovered={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          currentPath={currentPath}
        />
        <SidebarIcon
          icon="/icons/bank-inactive.png"
          activeIcon="/icons/bank.png"
          link="/invest"
          tooltip="Banks"
          hovered={hovered}
          setHovered={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          currentPath={currentPath}
        />
        <SidebarIcon
          icon="/icons/stack-inactive.png"
          activeIcon="/icons/stack.png"
          link="/wealth-services"
          tooltip="Wealth Services"
          hovered={hovered}
          setHovered={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          currentPath={currentPath}
        />
      </div>
    </div>
  );
};

const SidebarIcon = ({
  icon,
  activeIcon,
  link,
  tooltip,
  hovered,
  setHovered,
  handleMouseLeave,
  currentPath,
}) => {
  const isHovered = hovered === icon;
  const isActive = currentPath === link;

  return (
    <Link href={link} className="group relative">
      <div
        className="flex items-center justify-center h-14 w-14 my-2 mx-auto rounded-xl transition-colors duration-300"
        onMouseEnter={() => setHovered(icon)}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src={isActive || isHovered ? activeIcon : icon}
          alt={tooltip}
          width={24}
          height={24}
        />
        <span className="absolute left-12 whitespace-nowrap bg-secondary text-white text-sm rounded-md py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {tooltip}
        </span>
      </div>
    </Link>
  );
};

export default Sidebar;
