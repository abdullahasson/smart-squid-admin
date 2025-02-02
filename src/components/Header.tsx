import Image from "next/image"
import Logo from "@/images/logo.png"
// import partners from "@/images/partner 1.png"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"


const Header = () => {
  return (
    <>
      <header className="w-full bg-white py-4 border-b-1 border-[#6e6e6eb7] fixed top-0 z-50 shadow-sm">
        <div className="container mx-auto flex items-center justify-between">

          <div className="flex items-center gap-5">
            <div>
              <Avatar>
                {/* <AvatarImage src={partners} alt="Partner" /> */}
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div>
              <svg width={28} height={28} viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.79297 37.399L6.31097 29.52C4.14481 26.1794 3.35818 22.129 4.11644 18.2204C4.8747 14.3118 7.1188 10.8494 10.377 8.56101C13.7488 6.10893 17.8512 4.87015 22.0166 5.04628C26.182 5.2224 30.1652 6.80306 33.318 9.53101C36.3397 12.1161 38.2373 15.7754 38.609 19.7347C38.9808 23.694 37.7977 27.6425 35.31 30.745C32.6556 33.9491 28.9892 36.1537 24.9146 36.9959C20.84 37.838 16.6 37.2674 12.893 35.378L3.79297 37.399Z" stroke="#7E84A3" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="21.4932" cy="21.493" r={2} fill="#7E84A3" />
                <circle cx="13.9072" cy="21.493" r={2} fill="#7E84A3" />
                <circle cx="27.8154" cy="21.493" r={2} fill="#7E84A3" />
              </svg>
            </div>
            <div>
              <svg width={28} height={28} viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.79297 37.399L6.31097 29.52C4.14481 26.1794 3.35818 22.129 4.11644 18.2204C4.8747 14.3118 7.1188 10.8494 10.377 8.56101C13.7488 6.10893 17.8512 4.87015 22.0166 5.04628C26.182 5.2224 30.1652 6.80306 33.318 9.53101C36.3397 12.1161 38.2373 15.7754 38.609 19.7347C38.9808 23.694 37.7977 27.6425 35.31 30.745C32.6556 33.9491 28.9892 36.1537 24.9146 36.9959C20.84 37.838 16.6 37.2674 12.893 35.378L3.79297 37.399Z" stroke="#7E84A3" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="21.4932" cy="21.493" r={2} fill="#7E84A3" />
                <circle cx="13.9072" cy="21.493" r={2} fill="#7E84A3" />
                <circle cx="27.8154" cy="21.493" r={2} fill="#7E84A3" />
              </svg>
            </div>
          </div>

          <div className="flex justify-center items-center w-80">
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