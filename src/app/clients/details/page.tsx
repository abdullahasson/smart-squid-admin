// Shadcn UI
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

const ClientDetails = () => {
    return (
        <div className="flex-[4] p-9 flex flex-col gap-12">
            <div className="flex flex-col">
                <div className="w-full mb-6">
                    <h2 className="font-semibold text-xl">العملاء</h2>
                </div>

                <div className="table-container">
                    <div className="table-head">
                        <div></div>

                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbPage>تفاصيل العميل</BreadcrumbPage>
                                </BreadcrumbItem>

                                <BreadcrumbSeparator className="rotate-180" />

                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/admin/clients">ادارة العملاء</BreadcrumbLink>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>


                    <div className="py-10">
                        <div className="flex flex-row-reverse w-full justify-start gap-20">
                            <div className=" flex justify-between flex-col gap-2">
                                <div className="flex items-center justify-start gap-2 ">
                                    <Input readOnly className="outline-none text-center rounded-xl" />
                                    <Label className="w-[170px]">اسم العميل</Label>
                                </div>
                                <div className="flex items-center justify-center gap-2">
                                    <Input readOnly className="outline-none text-center rounded-xl" />
                                    <Label className="w-[170px]">رابط الموقع</Label>
                                </div>
                                <div className="flex items-center justify-end gap-2">
                                    <Input readOnly className="outline-none text-center rounded-xl" />
                                    <Label className="w-[170px]">البريد الألكتروني</Label>
                                </div>
                                <div className="flex items-center justify-end gap-2">
                                    <Input readOnly className="outline-none text-center rounded-xl" />
                                    <Label className="w-[170px]">رقم الواتساب</Label>
                                </div>
                            </div>

                            <div className=" flex justify-between flex-col gap-2">
                                <div>
                                    <h3 className="text-lg font-semibold text-[#5E4D9D]">تفاصيل الطلب</h3>
                                </div>
                                <div className="flex items-center justify-start">
                                    <Input readOnly className="outline-none text-center rounded-xl w-20" />
                                    <Label className="w-[170px]">عدد الطلبات</Label>
                                </div>
                                <div className="flex items-center justify-center">
                                    <Input readOnly className="outline-none text-center rounded-xl w-20" />
                                    <Label className="w-[170px]">اجمالي المدفوعات</Label>
                                </div>
                                <div className="flex items-center justify-end">
                                    <Input readOnly className="outline-none text-center rounded-xl w-20" />
                                    <Label className="w-[170px]">اجمالي الاجتماعات</Label>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10">
                            <Button className="btn-orange rounded-lg px-10">الغاء</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientDetails;