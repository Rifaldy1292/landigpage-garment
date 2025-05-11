import { Link } from "@heroui/link";

import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";

import { siteConfig } from "@/config/site";

import Logo from "../assets/logo-perusahaan.jpg";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion

export const Navbar = () => {
  const location = useLocation();
  console.log(location.pathname);

  // Animasi untuk menu item dan logo
  const logoAnimation = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const menuItemAnimation = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  return (
    <HeroUINavbar maxWidth="xl" position="sticky " className="fixed z-50">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1"
            color="foreground"
            href="/"
          >
            <motion.img // Apply motion to logo
              src={Logo}
              alt=""
              className="w-[50px]"
              initial="initial"
              animate="animate"
              variants={logoAnimation}
            />
            <motion.p // Apply motion to text
              className="font-bold ml-5 text-[#1357D8] hidden sm:block"
              initial="initial"
              animate="animate"
              variants={logoAnimation}
            >
              Garment Semeru Collection
            </motion.p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="basis-1 pl-4" justify="end">
        <NavbarMenuToggle className="" />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => {
            const isActive = location.pathname === item.href;

            return (
              <motion.div // Apply motion to each menu item
                key={`${item}-${index}`}
                initial="initial"
                animate="animate"
                variants={menuItemAnimation}
              >
                <NavbarMenuItem>
                  <Link
                    color={isActive ? "primary" : "foreground"}
                    href={item.href}
                    size="lg"
                  >
                    {item.label}
                  </Link>
                </NavbarMenuItem>
              </motion.div>
            );
          })}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
