import Link from "next/link"
import Image from "next/image"
import GoogleConsoleImage from "@/images/google-console.svg"
import { IoIosOptions } from "react-icons/io";

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"


const AdminApplications = () => {
    return (
        <div className="flex-[4] p-9 flex flex-col gap-12">
            <div className="flex flex-col">
                <div className="w-full mb-6">
                    <h2 className="font-semibold text-xl">التطبيقات</h2>
                </div>

                <div className="w-full bg-white rounded-lg shadow-sm py-5">
                    <div className="flex flex-row items-center justify-between px-4 pb-4">
                        <div></div>

                        <h2 className="text-lg font-semibold">ادارة التطبيقات</h2>
                    </div>

                    <div className="flex flex-col w-full px-4">
                        <div className="flex items-center justify-between">
                            <Link className="btn-purple" href="/admin/applications/add">
                                اضافة تطبيق
                            </Link>
                            <p>ربط حساباتك مع التطبيقات المتاحة لتحسين الأداء</p>
                        </div>

                        <div className="flex flex-wrap justify-between gap-4 mt-5">
                            <div className="rounded-lg py-4 px-5 flex justify-between items-center w-[45%] bg-[#F4F4F8]">
                                <div><IoIosOptions /></div>
                                <p>Google Console</p>
                                <Image src={GoogleConsoleImage} alt="Google Console" />
                            </div>
                            <div className="rounded-lg py-4 px-5 flex justify-between items-center w-[45%] bg-[#F4F4F8]">
                                <div><IoIosOptions /></div>
                                <p>Google Console</p>
                                <Image src={GoogleConsoleImage} alt="Google Console" />
                            </div>
                            <div className="rounded-lg py-4 px-5 flex justify-between items-center w-[45%] bg-[#F4F4F8]">
                                <div><IoIosOptions /></div>
                                <p>Google Console</p>
                                <Image src={GoogleConsoleImage} alt="Google Console" />
                            </div>
                            <div className="rounded-lg py-4 px-5 flex justify-between items-center w-[45%] bg-[#F4F4F8]">
                                <div><IoIosOptions /></div>
                                <p>Google Console</p>
                                <Image src={GoogleConsoleImage} alt="Google Console" />
                            </div>
                        </div>
                    </div>

                    <Pagination className="flex justify-end py-2 px-4 mt-6">
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious href="#" />
                            </PaginationItem>

                            <PaginationItem>
                                <PaginationLink href="#">12</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">11</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationEllipsis />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">3</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">2</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#" isActive className="bg-[#C74D0A] text-white hover:bg-[#C74D0A] hover:text-white">
                                    1
                                </PaginationLink>
                            </PaginationItem>

                            <PaginationItem>
                                <PaginationNext href="#" />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            </div>
        </div>
    )
}

export default AdminApplications;