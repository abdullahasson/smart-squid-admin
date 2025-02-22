import Image from "next/image"
import Logo from "@/images/logo.png"
import partners from "@/images/manager 2.jpg"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
// icons
import { BsChatDots } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoChevronDownOutline } from "react-icons/io5";


const Header = () => {
  return (
    <>
      <header className="w-full bg-[var(--background-header)] py-4 border-b-1 border-[#6e6e6eb7] fixed top-0 z-50 shadow-sm">
        <div className="container mx-auto flex items-center justify-between">

          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <IoChevronDownOutline />
              <h3 className="text-sm">ronni holannd</h3>
              <Avatar>
                <Image src={partners} alt="Partner" className="aspect-square h-full w-full" width={28} height={28} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>

            <div className="flex items-center gap-2">
              <button className="icon-btn relative">
                <BsChatDots className="text-xl" />
                <Badge className="absolute -top-2 -right-2 bg-[#C74D0A] text-white">2</Badge>
              </button>
              <button className="icon-btn">
                <IoIosNotificationsOutline className="text-xl" />
              </button>
            </div>
          </div>



          <div className="flex justify-center items-center w-96">
            <input type="search" placeholder="بحث" className="border-none outline-none shadow-md font-normal rounded-2xl py-3 px-2 transition-all w-full text-end" />
          </div>



          <div className="">
            <Image
              src={Logo}
              alt="Logo"
              className="w-52"
            />
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;