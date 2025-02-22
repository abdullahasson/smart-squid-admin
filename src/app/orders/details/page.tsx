// Next
import Link from "next/link"
// Components
import EditeOrder from "@/components/EditeOrder"
import DeleteOrder from "@/components/DeleteOrder"
// Shadcn UI
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input"


const OrdersDetails = () => {
    return (
        <div className="flex-[4] p-9 flex flex-col gap-12">
            <div className="flex flex-col">
                <div className="w-full mb-6">
                    <h2 className="font-semibold text-xl">الطلبات</h2>
                </div>

                <div className="w-full bg-[var(--background-page-content)] rounded-lg shadow-sm py-5">
                    <div className="flex flex-row items-center justify-between px-4 pb-4">
                        <div></div>

                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbPage>تفاصيل الطلب</BreadcrumbPage>
                                </BreadcrumbItem>

                                <BreadcrumbSeparator className="rotate-180" />

                                <BreadcrumbItem>
                                    <Link href="/orders">ادارة الطلب</Link>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>

                    <div className="px-10 gap-8 py-8 flex flex-col">
                        <div className=" w-full flex flex-col gap-3">
                            <div className="">
                                <h3 className="scroll-m-20 text-[16px] text-[#5E4D9D] font-semibold tracking-tight">
                                    تفاصيل الطلب
                                </h3>
                            </div>

                            <div className=" flex justify-between gap-2">
                                <div className="flex items-center justify-start gap-2 flex-1 ">
                                    <Input readOnly className="w-1/2 outline-none text-center" />
                                    <Label>حالة الطلب</Label>
                                </div>
                                <div className="flex items-center justify-center gap-2 flex-1 ">
                                    <Input readOnly className="w-1/2 outline-none bg-[#5E4D9D] text-white text-center" />
                                    <Label>تاريخ الطلب</Label>
                                </div>
                                <div className="flex items-center justify-end gap-2 flex-1 ">
                                    <Input readOnly className="w-1/2 outline-none bg-[#5E4D9D] text-white text-center" />
                                    <Label>رقم الطلب</Label>
                                </div>
                            </div>
                        </div>
                        <div className=" w-full flex flex-col gap-3">
                            <div className="">
                                <h3 className="scroll-m-20 text-[16px] text-[#5E4D9D] font-semibold tracking-tight">
                                    معلومات العميل
                                </h3>
                            </div>

                            <div className=" flex justify-between flex-wrap">
                                <div className="flex-[3] flex-col">
                                    <div className="flex items-center justify-end gap-2 flex-1  mb-4">
                                        <Input readOnly className="flex-1 outline-none bg-[#5E4D9D] text-white text-center" />
                                        <Label className="flex-1">البريد الالكتروني</Label>
                                    </div>
                                    <div className="flex items-center justify-end gap-2 flex-1 ">
                                        <Input readOnly className="flex-1 outline-none bg-[#5E4D9D] text-white text-center" />
                                        <Label className="flex-1">عنوان الشحن</Label>
                                    </div>
                                </div>
                                <div className="flex-1"></div>
                                <div className="flex-[3] flex-col">
                                    <div className="flex items-center justify-end gap-2 flex-1  mb-4">
                                        <Input readOnly className="flex-1 outline-none bg-[#5E4D9D] text-white text-center" />
                                        <Label className="flex-1">اسم العميل</Label>
                                    </div>
                                    <div className="flex items-center justify-end gap-2 flex-1 ">
                                        <Input readOnly className="flex-1 outline-none bg-[#5E4D9D] text-white text-center" />
                                        <Label className="flex-1">رقم الواتساب</Label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" w-full flex flex-col gap-3">
                            <div className=" flex justify-between flex-wrap">
                                <div className="flex-[3] flex-col gap-4">
                                    <div className="flex items-center justify-end gap-2 flex-1  mb-4">
                                        <Input readOnly className="flex-1 outline-none text-center" />
                                        <Label className="flex-1">طريقة الشحن</Label>
                                    </div>
                                    <div className="flex items-center justify-end gap-2 flex-1 ">
                                        <Input readOnly className="flex-1 outline-none text-center" />
                                        <Label className="flex-1">رقم التتبع</Label>
                                    </div>
                                </div>
                                <div className="flex-1"></div>
                                <div className="flex-[3] flex-col">
                                    <div className="flex items-center justify-end gap-2 flex-1  mb-2">
                                        <Input readOnly className="flex-1 outline-none text-center" />
                                        <Label className="flex-1">طريقة الدفع</Label>
                                    </div>
                                    <div className="flex items-center justify-end gap-2 flex-1  mb-2">
                                        <Input readOnly className="flex-1 outline-none text-center" />
                                        <Label className="flex-1">الناقل</Label>
                                    </div>
                                    <div className="flex items-center justify-end gap-2 flex-1 ">
                                        <Input readOnly className="flex-1 outline-none text-center" />
                                        <Label className="flex-1">التاريخ المتوقع</Label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex flex-col gap-3 mt-4">
                            <div className=" flex justify-end gap-2">
                                <EditeOrder />

                                <DeleteOrder />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default OrdersDetails;