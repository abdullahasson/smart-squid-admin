// Next
import Link from "next/link"
// Shadcn UI
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea";
// React Icons
import { AiFillTool } from "react-icons/ai";

const MaintenanceMode = () => {
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
                                            <p className="text-[#5E4D9D] font-semibold text-sm">وضع الصيانة</p>
                                            <AiFillTool className="text-2xl" fill="#5E4D9D" />
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

                    <div className="flex flex-col w-full gap-10">

                        <div>
                            <h3 className="text-lg text-[#5E4D9D] mb-4 font-semibold">اعدادت وضع الصيانة</h3>
                            <div className="flex items-center justify-between flex-row-reverse">
                                <div className="flex-[2] flex items-center justify-end gap-2">
                                    <div className="btn-orange">
                                        مفعل
                                    </div>
                                    <p className="text-md">الوضع الحالي</p>
                                </div>

                                <div className="flex-[2] flex items-center justify-end gap-2">
                                    <Button className="bg-[#C74D0A] rounded-xl btn-orange-t">تعطيل الصيانة</Button>
                                    <p className="text-md">اذا كنت ترغب في تعطيل وضع الصيانة</p>
                                </div>

                                <div className="flex-1"></div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg text-[#5E4D9D] mb-4 font-semibold">اعدادات تخصيص وضع الصيانة</h3>

                            <div className="flex items-center justify-between gap-[55px]">
                                <div className="flex-1 flex items-center gap-1">
                                    <Textarea defaultValue='5-12-2024 : 15 الساعة' className="border border-[#5E4D9D] resize-none" placeholder="الرسالة المخصصة" />
                                    <div>
                                        <h3 className="text-md font-semibold">تاريخ ووقت الأنتهاء</h3>
                                        <p className="text-[12px]">
                                            أدخل التاريخ و الوقت المتوقع للانتهاء
                                        </p>
                                    </div>
                                </div>

                                <div className="flex-1 flex items-center gap-1">
                                    <Textarea defaultValue='نحن في صيانة حاليا نعتذر عن الأزعاج و سنكون على استعداد لأستقبالكم قريبا' className="border border-[#5E4D9D] resize-none" placeholder="الرسالة المخصصة" />
                                    <div>
                                        <h3 className="text-md font-semibold">الرسالة المخصصة</h3>
                                        <p className="text-[12px]">
                                            أدخل الرسالة التي ستظهر للزوار عند تفعيل وضع الصيانة
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <Button className="btn-orange-t">تفعيل وضع الصيانة</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MaintenanceMode;