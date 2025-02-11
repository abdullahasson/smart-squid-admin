// Next
import Link from "next/link"
// Shadcd UI
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
// React Icons
import { FaCheck } from "react-icons/fa";

const Evaluation = () => {
    return (
        <div className="flex-[4] p-9 flex flex-col gap-12">
            <div className="flex flex-col">
                <div className="w-full mb-6">
                    <h2 className="font-semibold text-xl">الاعدادات</h2>
                </div>


                <div className="table-container">
                    <div className="table-head">
                        <div></div>

                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbPage>
                                        <div className="flex items-center gap-2">
                                            <p className="text-[#5E4D9D] font-semibold text-sm">اعدادات التقييم</p>
                                            <FaCheck className="text-2xl" fill="#5E4D9D" />
                                        </div>
                                    </BreadcrumbPage>
                                </BreadcrumbItem>

                                <BreadcrumbSeparator className="rotate-180" />

                                <BreadcrumbItem>
                                    <Link href="/settings">الاعدادات</Link>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>

                    <div>
                        <Table>
                            <TableHeader>
                                <TableRow className="bg-gray-50">
                                    <TableHead className="text-center font-semibold">الاجراءات</TableHead>
                                    <TableHead className="text-center font-semibold">حالة التقييم</TableHead>
                                    <TableHead className="text-center font-semibold">نسبة التقييم</TableHead>
                                    <TableHead className="text-center font-semibold">تقييم العميل</TableHead>
                                    <TableHead className="text-center font-semibold">المنتج</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                        <div className="flex items-center justify-center gap-2">
                                            <Button className="bg-[#C74D0A] text-white rounded-md hover:bg-[#C74D0A] hover:text-white">
                                                حذف
                                            </Button>
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-center">
                                        <div className="flex items-center space-x-2 justify-center"> 
                                            <Switch id="activated" />
                                            <Label htmlFor="activated">مفعل</Label>
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-center">4/5</TableCell>
                                    <TableCell className="text-center">رائع جدا</TableCell>
                                    <TableCell className="text-center">منتج أ</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Evaluation;