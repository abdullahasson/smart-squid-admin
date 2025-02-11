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

                    <div className="flex flex-col w-full ">

                        <div>
                            <h3>اعدادت وضع الصيانة</h3>
                            <div className="flex items-center justify-between">
                                <div className="flex-1 flex flex-col gap-2">
                                    <p>الوضع الحالي</p>
                                    <div className="text-white bg-[#C74D0A] rounded-xl px-5 py-3">
                                        مفعل
                                    </div>
                                </div>

                                <div className="flex-1 flex flex-col gap-2">
                                    <p>اذا كنت ترغب في تعطيل وضع الصيانة</p>
                                    <Button className="bg-[#C74D0A] rounded-xl">تعطيل الصيانة</Button>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3>اعدادات تخصيص وضع الصيانة</h3>

                            <div className="flex items-center justify-between">
                                <div className="flex-1 flex items-center gap-2">
                                    <div>
                                        <h3>الرسالة المخصصة</h3>
                                        <p>
                                            أدخل الرسالة التي ستظهر للزوار عند تفعيل وضع الصيانة
                                        </p>
                                    </div>

                                    <Textarea placeholder="الرسالة المخصصة" />
                                </div>

                                <div className="flex-1 flex items-center gap-2">
                                    <div>
                                        <h3>تاريخ ووقت الأنتهاء</h3>
                                        <p>
                                            أدخل التاريخ و الوقت المتوقع للانتهاء
                                        </p>
                                    </div>

                                    <Textarea placeholder="الرسالة المخصصة" />
                                </div>
                            </div>
                        </div>

                        <div>
                            <Button>تفعيل وضع الصيانة</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MaintenanceMode;