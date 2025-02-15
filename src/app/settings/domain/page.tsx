// Next
import Link from "next/link"
// Data
import { settingDomain } from "@/utils/data"
// Components
import AddDns from "@/components/AddDns"
// Shadcn UI
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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
// React Icons
import { SiInternetcomputer } from "react-icons/si";

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
                                            <SiInternetcomputer className="text-2xl" fill="#5E4D9D" />
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
                        <div className="w-full mb-6">
                            <p>
                                هذا القسم يتيح لك ادراة الدومين الخاص بمتجرك , بما في ذلك ربط الدومين و تعديله
                            </p>
                        </div>

                        <div className="flex flex-col gap-12 mt-10 mb-5 px-16">
                            <div className="flex items-center justify-between">
                                <div className="flex flex-1 items-center justify-start space-x-2">
                                    <Input className="w-[220px] rounded-lg text-center" defaultValue="32-12-2024" />
                                    <Label className="w-[133px]">تاريخ انتهاء الدومين</Label>
                                </div>

                                <div className="flex flex-1 items-center justify-end space-x-2">
                                    <Input className="w-[220px] rounded-lg text-center" defaultValue="example.com" />
                                    <Label className="w-[133px]">اسم الدومين الحالي</Label>
                                </div>
                            </div>


                            <div>
                                <div className="flex-[2] flex items-center justify-end gap-2">
                                    <div className="btn-orange">
                                        مفعل
                                    </div>
                                    <Label className="text-md">حالة الدومين</Label>
                                </div>
                            </div>
                            
                            <div>
                                <div className="flex items-center justify-between">
                                    <AddDns/>

                                    <h3 className="text-lg text-[#5E4D9D] mb-4 font-semibold">DNS   اعدادت سجلات </h3>
                                </div>
                            </div>
                        </div>

 


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
    );
}

export default DomainSettings;