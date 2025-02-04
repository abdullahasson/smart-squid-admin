import { meetings } from "@/utils/data"
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";

// import EditeOnMeeting from "@/components/EditeOnMeeting";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

import { Label } from "@/components/ui/label";

import { Button } from "@/components/ui/button";




const Meetings = () => {
    return (

        <div className="p-9 flex flex-col gap-12">
            <div className="flex flex-col">
                <div className="w-full mb-6">
                    <h2 className="font-semibold text-xl">الاجتماعات</h2>
                </div>

                <div className="table-container">
                    <div className="table-head">
                        <div className="flex items-center gap-3">
                            <Button className="text-[#C74D0A] border border-[#C74D0A] bg-white font-semibold px-5 hover:bg-[#C74D0A] transition-all hover:text-white">نوع العميل</Button>
                            <Button className="text-[#C74D0A] border border-[#C74D0A] bg-white font-semibold px-5 hover:bg-[#C74D0A] transition-all hover:text-white">موعدها</Button>
                            <Label className="text-[#C74D0A] font-semibold">تصنيف الاجتماعات حسب</Label>
                        </div>


                        <h2 className="text-lg font-semibold">ادارة الاجتماعات</h2>
                    </div>

                    <Table>
                        <TableHeader>
                            <TableRow className="bg-gray-50">
                                <TableHead className="text-center font-semibold">خيارات</TableHead>
                                <TableHead className="text-center font-semibold">رقم الهاتف</TableHead>
                                <TableHead className="text-center font-semibold">البريد الالكتروني</TableHead>
                                <TableHead className="text-center font-semibold">حالة الاجتماع</TableHead>
                                <TableHead className="text-center font-semibold">وقت الاجتماع</TableHead>
                                <TableHead className="text-center font-semibold">موضوع الاجتماع</TableHead>
                                <TableHead className="text-center font-semibold">اسم العميل</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {meetings.map((invoice, index: number) => (
                                <TableRow key={index}>
                                    <TableCell>
                                        <div className="flex items-center justify-center gap-2">
                                            <Button className="bg-[#C74D0A] text-white rounded-md hover:bg-[#C74D0A] hover:text-white">
                                                <span>حذف</span>
                                                <AiOutlineDelete />
                                            </Button>
                                            <Button className="bg-[#8977CC] text-white rounded-md hover:bg-[#8977CC] hover:text-white">
                                                <span>تعديل</span>
                                                <FiEdit />
                                            </Button>

                                            {/* <EditeOnMeeting /> */}
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-center">{invoice.phone}</TableCell>
                                    <TableCell className="text-center">{invoice.email}</TableCell>
                                    <TableCell className="text-center">{invoice.status}</TableCell>
                                    <TableCell className="text-center">{invoice.date}</TableCell>
                                    <TableCell className="text-center">{invoice.subject}</TableCell>
                                    <TableCell className="text-center">{invoice.clientName}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                    <Pagination className="flex justify-end py-2 mt-6">
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

export default Meetings;