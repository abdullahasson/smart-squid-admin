// Next
import Link from "next/link"
// Data
import { applicationInterfacesEndPoints, applicationInterfacesWebhooks } from "@/utils/data"
// Components
import AddApi from "@/components/AddApi"
import AddWebhook from "@/components/AddWebhook"
// Shadcn UI
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
// React Icons
import { MdStorefront } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";

const ApplicationInterface = () => {
    return (
        <div className="flex-[4] p-9 flex flex-col gap-12">
            <div className="flex flex-col">
                <div className="w-full mb-6">
                    <h2 className="font-semibold text-xl">API  واجهة التطبيقات</h2>
                </div>


                <div className="table-container">
                    <div className="table-head">
                        <div></div>

                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbPage>
                                        <div className="flex items-center gap-2">
                                            <p className="text-[#5E4D9D] font-semibold text-sm">واجهة التطبيقات</p>
                                            <MdStorefront className="text-2xl" fill="#5E4D9D" />
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
                        <Tabs defaultValue="endpoints" className="">                            
                            <TabsList className="flex items-center justify-end bg-white pb-0 rounded-none">
                                <TabsTrigger value="weebhooks" className="tabs-btn mb-0">Webhooks</TabsTrigger>
                                <TabsTrigger value="endpoints" className="tabs-btn mb-0">EndPoints</TabsTrigger>
                            </TabsList>

                            <Separator />

                            {/* EndPoints */}
                            <TabsContent value="endpoints" className="relative">
                                <AddApi />
                                <div className="py-4">
                                    <Table>
                                        <TableHeader>
                                            <TableRow className="bg-gray-50">
                                                <TableHead className="text-center font-semibold">الاجراءات</TableHead>
                                                <TableHead className="text-center font-semibold">حالة التفعيل</TableHead>
                                                <TableHead className="text-center font-semibold">ربط Endpoints</TableHead>
                                                <TableHead className="text-center font-semibold">الطريقة</TableHead>
                                                <TableHead className="text-center font-semibold">الوصف</TableHead>
                                                <TableHead className="text-center font-semibold">اسم API</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {applicationInterfacesEndPoints.map((invoice, index: number) => (
                                                <TableRow key={index}>
                                                    <TableCell>
                                                        <div className="flex items-center justify-center gap-2">
                                                            <Button className="btn-delete">
                                                                <span>حذف</span>
                                                                <AiOutlineDelete />
                                                            </Button>
                                                            <Button className="btn-edit">
                                                                <span>تعديل</span>
                                                                <FiEdit />
                                                            </Button>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell className="text-center">{invoice.active ? "نشط" : "غير نشط"}</TableCell>
                                                    <TableCell className="text-center">{invoice.apiUrl}</TableCell>
                                                    <TableCell className="text-center">{invoice.wayToAccess}</TableCell>
                                                    <TableCell className="text-center">{invoice.description}</TableCell>
                                                    <TableCell className="text-center">{invoice.apiName}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </div>
                            </TabsContent>

                            {/* Webhooks */}
                            <TabsContent value="weebhooks" className="relative">
                                <AddWebhook />
                                <div className="py-4">
                                    <Table>
                                        <TableHeader>
                                            <TableRow className="bg-gray-50">
                                                <TableHead className="text-center font-semibold">الاجراءات</TableHead>
                                                <TableHead className="text-center font-semibold">حالة التفعيل</TableHead>
                                                <TableHead className="text-center font-semibold">ربط Webhooks</TableHead>
                                                <TableHead className="text-center font-semibold">الطريقة</TableHead>
                                                <TableHead className="text-center font-semibold">الوصف</TableHead>
                                                <TableHead className="text-center font-semibold">اسم API</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {applicationInterfacesWebhooks.map((invoice, index: number) => (
                                                <TableRow key={index}>
                                                    <TableCell>
                                                        <div className="flex items-center justify-center gap-2">
                                                        <Button className="btn-delete">
                                                                <span>حذف</span>
                                                                <AiOutlineDelete />
                                                            </Button>
                                                            <Button className="btn-edit">
                                                                <span>تعديل</span>
                                                                <FiEdit />
                                                            </Button>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell className="text-center">{invoice.active ? "نشط" : "غير نشط"}</TableCell>
                                                    <TableCell className="text-center">{invoice.apiUrl}</TableCell>
                                                    <TableCell className="text-center">{invoice.wayToAccess}</TableCell>
                                                    <TableCell className="text-center">{invoice.description}</TableCell>
                                                    <TableCell className="text-center">{invoice.apiName}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApplicationInterface;    