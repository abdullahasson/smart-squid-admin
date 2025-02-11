import Link from "next/link"

import { settingDomain } from "@/utils/data"

import { MdStorefront } from "react-icons/md";

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

const DomainSettings = () => {
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
                                            <p className="text-[#5E4D9D] font-semibold text-sm">اعدادات الدومين</p>
                                            <MdStorefront className="text-2xl" fill="#5E4D9D" />
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
                                    <TableHead className="text-center font-semibold">اخر تعديل</TableHead>
                                    <TableHead className="text-center font-semibold">القيمة</TableHead>
                                    <TableHead className="text-center font-semibold">النوع</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {settingDomain.map((invoice, index: number) => (
                                    <TableRow key={index}>
                                        <TableCell>
                                            <div className="flex items-center justify-center gap-2">
                                                <Button className="bg-[#8977CC] text-white rounded-md hover:bg-[#8977CC] hover:text-white">
                                                    تعديل
                                                </Button>
                                                <Button className="bg-[#C74D0A] text-white rounded-md hover:bg-[#C74D0A] hover:text-white">
                                                    حذف
                                                </Button>
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-center">{invoice.lastEdited}</TableCell>
                                        <TableCell className="text-center">{invoice.value}</TableCell>
                                        <TableCell className="text-center">{invoice.type}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DomainSettings;