import Link from "next/link"
import Image from "next/image"
import website from "@/images/website.png"

import { MdStorefront, MdInvertColors } from "react-icons/md";

import { Textarea } from "@/components/ui/textarea";

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

import { Separator } from "@/components/ui/separator"

import { Button } from "@/components/ui/button"

const SettingsDesign = () => {
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
                                            <p className="text-[#5E4D9D] font-semibold text-sm">تصميم</p>
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
                        <Tabs defaultValue="website" className="">
                            <TabsList className="flex items-center justify-end bg-white pb-0 rounded-none">
                                <TabsTrigger value="code" className="tabs-btn mb-0">عرض الكود البرمجي</TabsTrigger>
                                <TabsTrigger value="template" className="tabs-btn mb-0">تغيير القالب</TabsTrigger>
                                <TabsTrigger value="website" className="tabs-btn mb-0">عرض الموقع</TabsTrigger>
                            </TabsList>

                            <Separator />

                            {/* Website */}
                            <TabsContent value="website">
                                <div className="flex gap-4 py-8">
                                    <div className="flex-1 flex flex-col gap-2">
                                        <Button className="flex items-center gap-2 py-2 bg-transparent border rounded-xl border-[#C74D0A] text-[#C74D0A] hover:bg-transparent">
                                            <span>تغيير الالوان</span>
                                            <MdInvertColors />
                                        </Button>
                                        <Button className="flex items-center gap-2 py-2 bg-transparent border rounded-xl border-[#C74D0A] text-[#C74D0A] hover:bg-transparent">
                                            <span>تغيير الخطوط</span>
                                            <MdInvertColors />
                                        </Button>
                                        <Button className="flex items-center gap-2 py-2 bg-transparent border rounded-xl border-[#C74D0A] text-[#C74D0A] hover:bg-transparent">
                                            <span>اضافة شعار</span>
                                            <MdInvertColors />
                                        </Button>
                                    </div>
                                    <div className="flex-[4]">
                                        <Image src={website} alt="website" />
                                    </div>
                                </div>
                            </TabsContent>

                            {/* Template */}
                            <TabsContent value="template">
                                <div className="flex gap-4 py-8">
                                    <div className="flex-[4]">
                                        <Image src={website} alt="website" />
                                    </div>
                                    <div className="flex-1 flex flex-col gap-2">
                                        <Button className="bg-[#C74D0A] rounded-xl">القالب الأول</Button>
                                        <Button className="bg-[#C74D0A] rounded-xl">القالب الثاني</Button>
                                        <Button className="bg-[#C74D0A] rounded-xl">القالب الثالث</Button>
                                    </div>
                                </div>
                            </TabsContent>

                            {/* Code */}
                            <TabsContent value="code">
                                <div className="py-6">
                                    <Tabs defaultValue="html" className="w-full gap-0">

                                        <div className="flex items-end justify-between flex-row-reverse border-b border-[#C74D0A]">
                                            <TabsList className="flex items-end justify-end gap-0 bg-white pb-0 rounded-none">
                                                <TabsTrigger value="js" className="code-tabs-btn m-0 rounded-none rounded-tl-xl border border-[#C74D0A]">JavaScript</TabsTrigger>
                                                <TabsTrigger value="css" className="code-tabs-btn m-0 rounded-none border-y border-y-[#C74D0A]">CSS</TabsTrigger>
                                                <TabsTrigger value="html" className="code-tabs-btn m-0 rounded-none rounded-tr-xl border border-[#C74D0A]">HTML</TabsTrigger>
                                            </TabsList>

                                            <Button className="code-tabs-btn m-0 rounded-none rounded-tl-xl border border-[#C74D0A] py-0 bg-white h-[33px]">
                                                الغاء
                                            </Button>
                                        </div>

                                        <TabsContent value="html" className="-mt-[0.5px]">
                                            <Textarea placeholder="الخاصة بك هنا HTML أكتب أكواد" className="rounded-none border-t-0 border-[#C74D0A]  bg-[#FFF8F3] resize-none h-96 focus:outline-none outline-none placeholder:text-black" />
                                        </TabsContent>
                                        <TabsContent value="css" className="-mt-[0.5px]">
                                            <Textarea placeholder="الخاصة بك هنا CSS أكتب أكواد" className="rounded-none border-t-0 border-[#C74D0A] bg-[#FFF8F3] resize-none h-96 focus:outline-none outline-none placeholder:text-black" />
                                        </TabsContent>
                                        <TabsContent value="js" className="-mt-[0.5px]">
                                            <Textarea placeholder="الخاصة بك هنا JavaScript أكتب أكواد" className="rounded-none border-t-0 border-[#C74D0A]  bg-[#FFF8F3] resize-none h-96 focus:outline-none outline-none placeholder:text-black" />
                                        </TabsContent>
                                    </Tabs>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SettingsDesign;