import { products } from "@/utils/data"

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

import { Button } from "@/components/ui/button";



const Products = () => {
    return (
        <div className="flex-[4] p-9 flex flex-col gap-12">
            <div className="flex flex-col">
                <div className="w-full mb-6">
                    <h2 className="font-semibold text-xl">المنتجات</h2>
                </div>

                <div className="table-container">
                    <div className="table-head">
                        <div>
                            <Button className="bg-[#8977CC] text-white rounded-md hover:bg-[#8977CC] hover:text-white">
                                أضافة منتج
                            </Button>
                        </div>

                        <h2 className="text-lg font-semibold">ادارة المنتجات</h2>
                    </div>

                    <Table>
                        <TableHeader>
                            <TableRow className="bg-gray-50">
                                <TableHead className="text-center font-semibold">خيارات</TableHead>
                                <TableHead className="text-center font-semibold">حالة المنتج</TableHead>
                                <TableHead className="text-center font-semibold">السعر</TableHead>
                                <TableHead className="text-center font-semibold">المنتج</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {products.map((invoice, index: number) => (
                                <TableRow key={index}>
                                    <TableCell className="flex items-center justify-center gap-2">
                                        <Button className="bg-[#C74D0A] text-white rounded-md hover:bg-[#C74D0A] hover:text-white">
                                            حذف
                                        </Button>
                                        <Button className="bg-[#8977CC] text-white rounded-md hover:bg-[#8977CC] hover:text-white">
                                            تعديل
                                        </Button>
                                    </TableCell>
                                    <TableCell className="text-center">{invoice.productStatus}</TableCell>
                                    <TableCell className="text-center">{invoice.productPrice}$</TableCell>
                                    <TableCell className="text-center">{invoice.productName}</TableCell>
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

export default Products;