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
import { motion } from "framer-motion";

export const Navbar = () => {
  const location = useLocation();

  const logoAnimation = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const menuItemAnimation = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  return (
    <HeroUINavbar maxWidth="xl" position="sticky" className="fixed z-50">
      {/* Kiri: Brand */}
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1"
            color="foreground"
            href="/"
          >
            <motion.img
              src={Logo}
              alt=""
              className="w-[50px]"
              initial="initial"
              animate="animate"
              variants={logoAnimation}
            />
            <motion.p
              className="font-bold ml-5 text-[#1357D8] hidden lg:block"
              initial="initial"
              animate="animate"
              variants={logoAnimation}
            >
              Garment Semeru Collection
            </motion.p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Tengah (Menu Desktop) */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {siteConfig.navMenuItems.map((item, index) => {
          const isActive = location.pathname === item.href;
          return (
            <motion.div
              key={`${item}-${index}`}
              initial="initial"
              animate="animate"
              variants={menuItemAnimation}
            >
              <Link
                color={isActive ? "primary" : "foreground"}
                href={item.href}
                size="lg"
                className={`relative px-3 py-2 text-lg font-medium transition-colors duration-300 ${
                  isActive ? "text-[#1357D8]" : "text-gray-700"
                } hover:text-[#1357D8]`}
              >
                {item.label}
              </Link>
            </motion.div>
          );
        })}
      </NavbarContent>

      {/* Kanan: Toggle untuk mobile */}
      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

      {/* Menu Mobile */}
      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => {
            const isActive = location.pathname === item.href;
            return (
              <motion.div
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
