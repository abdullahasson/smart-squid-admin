import Link from "next/link"
import { clients } from "@/utils/data";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";

// import EditeOnMeeting from "@/components/EditeOnMeeting";
// import DeleteClient from "@/components/DeleteClient";

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



const AdminClients = () => {
    return (
        <div className="flex-[4] p-9 flex flex-col gap-12">
            <div className="flex flex-col">
                <div className="w-full mb-6">
                    <h2 className="font-semibold text-xl">العملاء</h2>
                </div>

                <div className="table-container">
                    <div className="table-head">
                        <div className="flex items-center gap-3">
                            <Button className="btn-purple">
                                أضافة عميل
                            </Button>
                            <Button className="text-[#C74D0A] border border-[#C74D0A] bg-white font-semibold px-5 hover:bg-[#C74D0A] transition-all hover:text-white">اجمالي المبيعات</Button>
                            <Button className="text-[#C74D0A] border border-[#C74D0A] bg-white font-semibold px-5 hover:bg-[#C74D0A] transition-all hover:text-white">اسم العميل</Button>
                            <Label className="text-[#C74D0A] font-semibold">تصنيف العميل حسب</Label>
                        </div>

                        <h2 className="text-lg font-semibold">ادارة العملاء</h2>
                    </div>

                    <Table>
                        <TableHeader>
                            <TableRow className="bg-gray-50">
                                <TableHead className="text-center font-semibold">خيارات التفاعل</TableHead>
                                <TableHead className="text-center font-semibold">اجتماعاته</TableHead>
                                <TableHead className="text-center font-semibold">اجمالي المبيعات</TableHead>
                                <TableHead className="text-center font-semibold">عدد الطلبات</TableHead>
                                <TableHead className="text-center font-semibold">اسم العميل</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {clients.map((invoice, index: number) => (
                                <TableRow key={index}>
                                    <TableCell>
                                        <div className="flex items-center justify-center gap-2">

                                            <Button className="btn-delete">
                                                <span>حذف</span>
                                                <AiOutlineDelete />
                                            </Button>
                                            <Button className="btn-edit">
                                                <span>تعديل</span>
                                                <FiEdit />
                                            </Button>

                                            <Link href="/clients/details" className="text-[#C74D0A] underline font-semibold">
                                                عرض التفاصيل
                                            </Link>
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-center">{invoice.meetings}</TableCell>
                                    <TableCell className="text-center">{invoice.paymentTotal}</TableCell>
                                    <TableCell className="text-center">{invoice.ordersNumber}</TableCell>
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

export default AdminClients;