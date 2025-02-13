// Next 
import Link from "next/link"
// Data
import { orders } from "@/utils/data"
// Shadcn UI
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



const Orders = () => {
    return (
        <div className="flex-[4] p-9 flex flex-col gap-12">
            <div className="flex flex-col">
                <div className="w-full mb-6">
                    <h2 className="font-semibold text-xl">الطلبات</h2>
                </div>

                <div className="table-container">
                    <div className="table-head">
                        <div></div>

                        <h2 className="text-lg font-semibold">ادارة الطلبات</h2>
                    </div>

                    <Table>
                        <TableHeader>
                            <TableRow className="bg-gray-50">
                                <TableHead className="font-semibold text-center">خيارات</TableHead>
                                <TableHead className="font-semibold text-center">سعر الطلب</TableHead>
                                <TableHead className="font-semibold text-center">اسم العميل</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {orders.map((invoice, index: number) => (
                                <TableRow key={index}>
                                    <TableCell className="text-center">
                                        <Link href="/orders/details" className="text-[#C74D0A] underline font-semibold">
                                            تفاصيل الطلب
                                        </Link>
                                    </TableCell>
                                    <TableCell className="text-center">{invoice.orderPrice}$</TableCell>
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

export default Orders;