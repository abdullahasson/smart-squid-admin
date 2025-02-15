// Next
import Link from "next/link"
// Data
import { settingEmployees } from "@/utils/data";
// Components
import AddEmploye from "@/components/AddEmploye"
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
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
// React Icons
import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { RiUserSettingsLine } from "react-icons/ri";

const Employees = () => {
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
                                            <p className="text-[#5E4D9D] font-semibold text-sm">اعدادات الموظفين</p>
                                            <RiUserSettingsLine className="text-2xl" fill="#5E4D9D" />
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

                        <div className="flex items-center justify-between mb-5">

                            <AddEmploye />

                            <h3 className="text-[#5E4D9D] text-lg font-bold">قائمة الموظفين</h3>
                        </div>

                        <Table>
                            <TableHeader>
                                <TableRow className="bg-gray-50">
                                    <TableHead className="text-center font-semibold">الاجراءات</TableHead>
                                    <TableHead className="text-center font-semibold">حالة الحساب</TableHead>
                                    <TableHead className="text-center font-semibold">تاريخ الانضمام</TableHead>
                                    <TableHead className="text-center font-semibold">البريد الإلكتروني</TableHead>
                                    <TableHead className="text-center font-semibold">المسمى الوظيفي</TableHead>
                                    <TableHead className="text-center font-semibold">الأسم الكامل</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {
                                    settingEmployees.map((employee, index) => (
                                        <TableRow key={index}>
                                            <TableCell>
                                                <div className="flex items-center justify-center gap-2">
                                                    <Button className="btn-delete">
                                                        حذف
                                                    </Button>
                                                    <Button className="btn-edit">
                                                        تعديل
                                                    </Button>
                                                    <Button className="btn-stop">
                                                        ايقاف
                                                    </Button>
                                                </div>
                                            </TableCell>
                                            <TableCell className="text-center">{employee.status}</TableCell>
                                            <TableCell className="text-center">{employee.joiningDate}</TableCell>
                                            <TableCell className="text-center">{employee.email}</TableCell>
                                            <TableCell className="text-center">{employee.jobTitle}</TableCell>
                                            <TableCell className="text-center">{employee.fullName}</TableCell>
                                        </TableRow>
                                    ))
                                }
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

                    <div className="mt-10">

                        <div className="mb-5">
                            <h3 className="text-[#5E4D9D] text-lg font-bold mb-3">
                                تخصيص صلاحيات الموظف
                            </h3>

                            <div className="flex items-center w-full justify-end gap-4">
                                <Button className="btn-orange-t">
                                    المسمى الوظيفي
                                </Button>
                                <Button className="btn-purple-t">
                                    اسم الموظف
                                </Button>
                                <h3>اختيار موظف</h3>
                            </div>
                        </div>

                        <Table>
                            <TableHeader>
                                <TableRow className="bg-gray-50">
                                    <TableHead className="text-center font-semibold">ملاحظات</TableHead>
                                    <TableHead className="text-center font-semibold">الصلاحيات</TableHead>
                                    <TableHead className="text-center font-semibold">الفئة</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((employee) => (
                                    <TableRow key={employee}>
                                        <TableCell className="text-center">
                                            <div className="flex items-center justify-center">
                                                <p>يمكن اضافة / تعديل المحتوى</p>
                                            </div>
                                        </TableCell>

                                        <TableCell>
                                            <div className="flex flex-col items-center justify-center gap-3">
                                                <div className="flex flex-row items-center justify-between gap-2">
                                                    <div><p>ادارة المستخدمين</p></div>

                                                    <div><FaCheck className="text-[#5E4D9D]" /></div>
                                                </div>
                                                <div className="flex flex-row items-center justify-between gap-2">
                                                    <div><p>ادارة المنتجات و الخدمات</p></div>

                                                    <div><FaXmark className="text-[#C74D0A]" /></div>
                                                </div>
                                            </div>
                                        </TableCell>

                                        <TableCell>
                                            <div className="flex flex-col items-center justify-center gap-3">
                                                <div>
                                                    <p>ادارة المستخدمين</p>
                                                </div>
                                                <div>
                                                    <p>ادارة المنتجات و الخدمات</p>
                                                </div>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>

                    <div className="mt-12  px-10 flex items-center justify-start">
                        <Button className="btn-orange">
                            حفظ التغيرات
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Employees;