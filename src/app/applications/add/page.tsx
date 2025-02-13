// Next
import Link from "next/link"
// Shadcn UI
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
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
        </div>
    )
}

export default AdminAddApplications;