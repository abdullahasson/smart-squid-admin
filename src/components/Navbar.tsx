"use client"

// Next
import Link from "next/link"
import { usePathname } from "next/navigation"
// Components
import Logout from "@/components/Logout"
// Shadcn UI
import { Badge } from "@/components/ui/badge";
// React Icons
import { IoHomeOutline, IoPerson } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { LuShoppingBag , LuMessageCircleReply } from "react-icons/lu";
import { MdOutlineAppShortcut } from "react-icons/md";
import { GrCubes } from "react-icons/gr";
import { TbReportSearch } from "react-icons/tb";
import { SiGooglemarketingplatform } from "react-icons/si";

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
  ]
  // style={{clipPath : "polygon(83% 0, 100% 0, 100% 100%, 83% 99%)"}}
  return (
    <div className="flex-1 h-full relative responsive-navbar" >
      <div className="py-4 bg-[var(--background-navbar)] h-screen">
        <ul>
          {
            navLinks.map((link, index) => {

              const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== '/')

              return (
                <li key={index}>
                  <Link
                    href={link.href}
                    className={`
                      nav-link
                      ${isActive ? "nav-link-active" : ""}
                    `}
                  >

                    {link.notigaction > 0 ? <Badge className="bg-[var(--background-navbar-badge)] text-white">{link.notigaction}</Badge> : <div></div>}
                    <div className="flex justify-end font-semibold items-center gap-4">
                      {link.name}
                      {link.icon}
                    </div>

                  </Link>
                </li>
              )
            })
          }

          <li>
            <Logout />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;