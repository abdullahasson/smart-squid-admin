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

const ClientAdd = () => {
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
                                    <BreadcrumbPage>اضافة عميل</BreadcrumbPage>
                                </BreadcrumbItem>

                                <BreadcrumbSeparator className="rotate-180" />

                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/clients">ادارة العملاء</BreadcrumbLink>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>


                    <div className="py-10">
                        <div className="flex flex-row-reverse w-full justify-center gap-20">
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
                            </div>

                            <div className=" flex justify-between flex-col gap-2">
                                <div className="flex items-center justify-start gap-2 ">
                                    <Input readOnly className="outline-none text-center rounded-xl" />
                                    <Label className="w-[170px]">عدد الطلبات</Label>
                                </div>
                                <div className="flex items-center justify-center gap-2">
                                    <Input readOnly className="outline-none text-center rounded-xl" />
                                    <Label className="w-[170px]">اجمالي المدفوعات</Label>
                                </div>
                                <div className="flex items-center justify-end gap-2">
                                    <Input readOnly className="outline-none text-center rounded-xl" />
                                    <Label className="w-[170px]">اجمالي الاجتماعات</Label>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 flex items-center justify-center w-full">
                            <Button className="btn-orange sm:rounded-lg w-64">حفظ</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientAdd;