"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import RegisterButton from "./RegisterButton";

export function NavigationBar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Schedule",
      link: "/schedule",
    },
    {
      name: "FAQ's",
      link: "/faq",
    },
    {
      name: "Problems",
      link: "/problems",
    },
        {
      name: "Rules",
      link: "/rules",
    },
    {
      name: "Announcements",
      link: "/announcements",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full sticky top-0 z-50">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            {/* <NavbarButton variant="secondary">Login</NavbarButton> */}
            {/* <NavbarButton as={"a"} href={"https://play.google.com/store/apps/details?id=com.jazzeetechnologies.jazzee_edtech&pcampaignid=web_share"} target="_blank" variant="primary" className="bg-orange-500 text-white">Register</NavbarButton> */}
            <RegisterButton text="Register" className="bg-orange-500 text-white hover:bg-orange-600 rounded-md cursor-pointer text-sm font-bold relative hover:-translate-y-0.5 transition duration-200" />
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              {/* <NavbarButton
              as={"a"}
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                href={"https://play.google.com/store/apps/details?id=com.jazzeetechnologies.jazzee_edtech&pcampaignid=web_share"}
                target="_blank"
                className="w-full bg-orange-500 text-white"
              >
                Register
              </NavbarButton> */}
              <RegisterButton text="Register" className="bg-orange-500 text-white hover:bg-orange-600 px-4 py-2 rounded-md button text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center" />
              {/* <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Book a call
              </NavbarButton> */}
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {/* Navbar */}
    </div>
  );
}


