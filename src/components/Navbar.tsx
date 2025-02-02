"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { IoHomeOutline , IoPerson } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
import { CiSettings } from "react-icons/ci";
import { MdOutlineAppShortcut } from "react-icons/md";

const Navbar = () => {

  const pathname = usePathname()

  const navLinks = [
    // ready pages: meetings / orders / clients / products / settings-design /
    { name: "الرئيسية", href: "/"  , icon: <IoHomeOutline />},
    { name: "الاجتماعات", href: "/meetings"  , icon: <IoPerson />},
    { name: "الطلبات", href: "/orders"  , icon: <IoHomeOutline />},
    { name: "العملاء", href: "/clients"  , icon: <IoIosPeople />},
    { name: "التقارير", href: "/reports"  , icon: <IoHomeOutline />},
    { name: "التطبيقات", href: "/applications"  , icon: <MdOutlineAppShortcut />},
    { name: "المنتجات", href: "/products"  , icon: <IoHomeOutline />},
    { name: "API واجهة التطبيقات", href: "/application-interface"  , icon: <IoHomeOutline />},
    { name: "الأدوات التسويقية", href: "/marketing-tools"  , icon: <IoHomeOutline />},
    { name: "الأعدادات", href: "/settings"  , icon: <CiSettings />},
    { name: "تسجيل الخروج", href: "/logout"  , icon: <LuLogOut />},
  ]
// style={{clipPath : "polygon(83% 0, 100% 0, 100% 100%, 83% 99%)"}}
  return (
    <div className="flex-1 h-full relative" >
      <div className="py-4 bg-white h-screen">
        <ul>
          {
            navLinks.map((link , index) => {

              const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== '/')

              return (
                <li key={index}>
                  <Link
                    href={link.href}
                    className={`
                      flex 
                      justify-end 
                      font-semibold 
                      items-center
                      gap-4
                      pr-4
                      py-3
                      w-full 
                      hover:bg-[#8977cc13] 
                      hover:text-[#5E4D9D] 
                      border-r-4 
                      hover:border-[#5E4D9D] 
                      transition-all
                      ${isActive ? "text-[#655c85] bg-[#8977cc13] border-[#5E4D9D]" : ""}
                    `}
                  >
                  {link.name}
                  {link.icon}
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Navbar;