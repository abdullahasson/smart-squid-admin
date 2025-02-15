// Next
// import Link from "next/link"
// Shadcn UI
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    // SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

const AdminAddApplications = () => {
    return (
        <div className="flex-[4] p-9 flex flex-col gap-12">
            <div className="flex flex-col">
                <div className="w-full mb-6">
                    <h2 className="font-semibold text-xl">التطبيقات</h2>
                </div>

                <div className="table-container">
                    <div className="table-head">
                        <div></div>

                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbPage>اضافة تطبيق</BreadcrumbPage>
                                </BreadcrumbItem>

                                <BreadcrumbSeparator className="rotate-180" />

                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/applications">التطبيقات</BreadcrumbLink>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>


                    <div className="py-10 px-16">
                        <div className="flex flex-row-reverse w-full justify-center gap-20">
                            <div className=" flex justify-between flex-col gap-2">
                                <div className="flex items-center justify-start gap-2 ">
                                    <Input readOnly className="outline-none text-center rounded-xl" />
                                    <Label className="w-[170px]">اسم التطبيق</Label>
                                </div>
                                <div className="flex items-center justify-center gap-2">
                                    <Input readOnly className="outline-none text-center rounded-xl" />
                                    <Label className="w-[170px]">رابط التطبيق</Label>
                                </div>
                            </div>

                            <div className=" flex justify-between flex-col gap-2">
                                <div className="flex items-center justify-start gap-2 ">
                                    {/* <Input readOnly className="outline-none text-center rounded-xl" /> */}
                                    <Select>
                                        <SelectTrigger dir="rtl" className="outline-none text-center rounded-xl">
                                            <SelectValue placeholder="قم باختيار نوع التطبيق" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                {/* <SelectLabel>Fruits</SelectLabel> */}
                                                <SelectItem value="google-console">Google Console</SelectItem>
                                                <SelectItem value="google-ads">Google Ads</SelectItem>
                                                <SelectItem value="ticktock-pixel">TickTock Pixel</SelectItem>
                                                <SelectItem value="facebook">Facebook</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                    <Label className="w-[170px]">نوع التطبيق</Label>
                                </div>
                                <div className="flex items-center justify-center gap-2">
                                    <Input readOnly type="file" className="outline-none text-center rounded-xl" />
                                    <Label className="w-[170px]">صورة التطبيق</Label>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 flex items-center justify-end w-full">
                            <Button className="btn-orange sm:rounded-lg w-64">حفظ التطبيق</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminAddApplications;

{/* <div className="flex-[4] p-9 flex flex-col gap-12">
    <div className="flex flex-col">
        <div className="w-full mb-6">
            <h2 className="font-semibold text-xl">التطبيقات</h2>
        </div>

        <div className="w-full bg-white rounded-lg shadow-sm py-5">
            <div className="flex flex-row items-center justify-between px-4 pb-4">
                <div></div>

                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbPage>اضافة تطبيق</BreadcrumbPage>
                        </BreadcrumbItem>

                        <BreadcrumbSeparator className="rotate-180" />

                        <BreadcrumbItem>
                            <Link href="/admin/applications" className="text-lg font-semibold">ادارة التطبيقات</Link>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>

            <div className="flex items-center gap-8">
                <div className="flex fle-col gap-5">
                    <div className="flex items-center gap-3">
                        <Input className="rounded-lg p-2 border border-[#5E4D9D] text-black w-[220px]" />
                        <Label className="w-[170px] flex items-center justify-end">
                            رابط EndPoint
                        </Label>
                    </div>
                    <div className="flex items-center gap-3">
                        <Input className="rounded-lg p-2 border border-[#5E4D9D] text-black w-[220px]" />
                        <Label className="w-[170px] flex items-center justify-end">
                            رابط EndPoint
                        </Label>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-3">
                        <Input className="rounded-lg p-2 border border-[#5E4D9D] text-black w-[220px]" />
                        <Label className="w-[170px] flex items-center justify-end">
                            رابط EndPoint
                        </Label>
                    </div>
                    <div className="flex items-center gap-3">
                        <Input className="rounded-lg p-2 border border-[#5E4D9D] text-black w-[220px]" />
                        <Label className="w-[170px] flex items-center justify-end">
                            رابط EndPoint
                        </Label>
                    </div>
                </div>
            </div>

            <div>
                <Button className="btn-orange">حفظ التطبيق</Button>
            </div>

        </div>
    </div>
</div> */}