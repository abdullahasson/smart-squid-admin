"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { IoHomeOutline, IoPerson } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
import { CiSettings } from "react-icons/ci";
// import { AiOutlineProduct } from "react-icons/ai";
import { LuShoppingBag , LuMessageCircleReply } from "react-icons/lu";
import { MdOutlineAppShortcut } from "react-icons/md";
import { GrCubes } from "react-icons/gr";
import { TbReportSearch } from "react-icons/tb";
import { SiGooglemarketingplatform } from "react-icons/si";
import { Badge } from "@/components/ui/badge";

const Navbar = () => {

  const pathname = usePathname()

  const navLinks = [
    // ready pages: meetings / orders / clients / products / settings-design /
    { name: "الرئيسية", href: "/", icon: <IoHomeOutline /> , notigaction: 0 },
    { name: "الاجتماعات", href: "/meetings", icon: <IoPerson /> , notigaction: 0 },
    { name: "الطلبات", href: "/orders", icon: <LuMessageCircleReply /> , notigaction: 12 },
    { name: "العملاء", href: "/clients", icon: <IoIosPeople /> , notigaction: 0 },
    { name: "التقارير", href: "/reports", icon: <TbReportSearch /> , notigaction: 0 },
    { name: "التطبيقات", href: "/applications", icon: <MdOutlineAppShortcut /> , notigaction: 0 },
    { name: "المنتجات", href: "/products", icon: <LuShoppingBag /> , notigaction: 0 },
    { name: "API واجهة التطبيقات", href: "/application-interface", icon: <GrCubes /> , notigaction: 0 },
    { name: "الأدوات التسويقية", href: "/marketing-tools", icon: <SiGooglemarketingplatform /> , notigaction: 0 },
    { name: "الأعدادات", href: "/settings", icon: <CiSettings /> , notigaction: 0 },
    { name: "تسجيل الخروج", href: "/logout", icon: <LuLogOut /> , notigaction: 0 },
  ]
  // style={{clipPath : "polygon(83% 0, 100% 0, 100% 100%, 83% 99%)"}}
  return (
    <div className="flex-1 h-full relative" >
      <div className="py-4 bg-white h-screen">
        <ul>
          {
            navLinks.map((link, index) => {

              const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== '/')

              return (
                <li key={index}>
                  <Link
                    href={link.href}
                    className={`
                      flex 
                      items-center
                      justify-between
                      pr-4
                      pl-2
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

                    {link.notigaction > 0 ? <Badge className="bg-[#C74D0A]">{link.notigaction}</Badge> : <div></div>}
                    <div className="flex justify-end font-semibold items-center gap-4">
                      {link.name}
                      {link.icon}
                    </div>

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