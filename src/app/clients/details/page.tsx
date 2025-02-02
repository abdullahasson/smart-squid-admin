import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"


const ClientDetails = () => {
    return (
        <div className="flex-[4] p-9 flex flex-col gap-12">
            <div className="flex flex-col">
                <div className="w-full mb-6">
                    <h2 className="font-semibold text-xl">العملاء</h2>
                </div>

                <div className="w-full bg-white rounded-lg shadow-sm pb-5">
                    <div className="flex flex-row items-center justify-between px-4 py-8">
                        <div>

                        </div>

                        {/* <h2 className="text-lg font-semibold">ادارة العملاء</h2> */}
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

                </div>
            </div>
        </div>
    )
}

export default ClientDetails;