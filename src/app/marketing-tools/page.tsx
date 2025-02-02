"use client"
import { Bar, BarChart, CartesianGrid, Line, LineChart, XAxis } from "recharts"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
    { month: "January", desktop: 186 },
    { month: "February", desktop: 305 },
    { month: "March", desktop: 237 },
    { month: "April", desktop: 73 },
    { month: "May", desktop: 209 },
    { month: "June", desktop: 214 },
]
const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-1))",
    },
} satisfies ChartConfig


import { marketingToolsOffers , marketingToolsCoupons , marketingToolsAdvertising } from "@/utils/data"



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


const MarketingTools = () => {
    return (
        <div className="flex-[4] p-9 flex flex-col gap-12">
            <div className="flex flex-col">
                <div className="w-full mb-6">
                    <h2 className="font-semibold text-xl">أدوات التسويق</h2>
                </div>


                <div className="table-container">
                    <div className="table-head">
                        <div></div>

                        <h2 className="text-lg font-semibold">أدوات التسويق</h2>
                    </div>

                    <div>
                        <Tabs defaultValue="offers" className="">
                            <TabsList className="flex items-center justify-end bg-white pb-0 rounded-none">
                                <TabsTrigger value="advertising" className="tabs-btn mb-0">الحملات الأعلانية</TabsTrigger>
                                <TabsTrigger value="coupons" className="tabs-btn mb-0">الكوبونات</TabsTrigger>
                                <TabsTrigger value="offers" className="tabs-btn mb-0">العروض</TabsTrigger>
                            </TabsList>

                            <Separator />

                            {/* Offers */}
                            <TabsContent value="offers">
                                <Button className="btn-purple absolute -top-32">اضافة عرض جديد</Button>
                                <div className="flex flex-col gap-8 py-4">
                                    <Table>
                                        <TableHeader>
                                            <TableRow className="bg-gray-50">
                                                <TableHead className="text-center font-semibold">الاجراءات</TableHead>
                                                <TableHead className="text-center font-semibold">الفئة المستهدفة</TableHead>
                                                <TableHead className="text-center font-semibold">تاريخ النهاية</TableHead>
                                                <TableHead className="text-center font-semibold">تاريخ البداية</TableHead>
                                                <TableHead className="text-center font-semibold">نوع الخصم</TableHead>
                                                <TableHead className="text-center font-semibold">اسم العرض</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {marketingToolsOffers.map((invoice, index: number) => (
                                                <TableRow key={index}>
                                                    <TableCell>
                                                        <div className="flex items-center justify-center gap-2">
                                                            <Button className="bg-[#C74D0A] text-white rounded-md hover:bg-[#C74D0A] hover:text-white">
                                                                حذف
                                                            </Button>
                                                            <Button className="bg-[#8977CC] text-white rounded-md hover:bg-[#8977CC] hover:text-white">
                                                                تعديل
                                                            </Button>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell className="text-center">{invoice.targetGroup}</TableCell>
                                                    <TableCell className="text-center">{invoice.endDate}</TableCell>
                                                    <TableCell className="text-center">{invoice.startDate}</TableCell>
                                                    <TableCell className="text-center">{invoice.discountType}</TableCell>
                                                    <TableCell className="text-center">{invoice.offerName}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>

                                    <div className="flex flex-col gap-4">
                                        <h2 className="text-[#5E4D9D]">إحصائيات استخدام العروض</h2>
                                        <div className="flex justify-center gap-5 flex-row-reverse">
                                            <Card className="flex-1 bg-[#F8F7FD]">
                                                <CardHeader>
                                                    <CardTitle>نسبةالمبيعات الناتجة</CardTitle>
                                                    {/* <CardDescription>January - June 2024</CardDescription> */}
                                                </CardHeader>
                                                <CardContent>
                                                    <ChartContainer config={chartConfig}>
                                                        <BarChart accessibilityLayer data={chartData}>
                                                            <CartesianGrid vertical={false} />
                                                            <XAxis
                                                                dataKey="month"
                                                                tickLine={false}
                                                                tickMargin={10}
                                                                axisLine={false}
                                                                tickFormatter={(value) => value.slice(0, 3)}
                                                            />
                                                            <ChartTooltip
                                                                cursor={false}
                                                                content={<ChartTooltipContent hideLabel />}
                                                            />
                                                            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
                                                        </BarChart>
                                                    </ChartContainer>
                                                </CardContent>
                                            </Card>

                                            <Card className="flex-1 bg-[#F8F7FD]">
                                                <CardHeader className="text-center">
                                                    <CardTitle>عدد مرات التفعيل</CardTitle>
                                                    <CardDescription>15 April - 21 April</CardDescription>
                                                </CardHeader>
                                                <CardContent>
                                                    <ChartContainer config={chartConfig}>
                                                        <LineChart
                                                            accessibilityLayer
                                                            data={chartData}
                                                            margin={{
                                                                left: 12,
                                                                right: 12,
                                                            }}
                                                        >
                                                            <CartesianGrid vertical={false} />
                                                            <XAxis
                                                                dataKey="month"
                                                                tickLine={false}
                                                                axisLine={false}
                                                                tickMargin={8}
                                                                tickFormatter={(value) => value.slice(0, 3)}
                                                            />
                                                            <ChartTooltip
                                                                cursor={false}
                                                                content={<ChartTooltipContent hideLabel />}
                                                            />
                                                            <Line
                                                                dataKey="desktop"
                                                                type="natural"
                                                                stroke="var(--color-desktop)"
                                                                strokeWidth={2}
                                                                dot={false}
                                                            />
                                                        </LineChart>
                                                    </ChartContainer>
                                                </CardContent>
                                            </Card>

                                            <div className="flex-1"></div>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>

                            {/* Coupons */}
                            <TabsContent value="coupons">
                                <Button className="btn-purple absolute -top-32">اضافة كوبون جديد</Button>
                                <div className="flex flex-col gap-8 py-4">
                                    <Table>
                                        <TableHeader>
                                            <TableRow className="bg-gray-50">
                                                <TableHead className="text-center font-semibold">الاجراءات</TableHead>
                                                <TableHead className="text-center font-semibold">تاريخ الأنتهاء</TableHead>
                                                <TableHead className="text-center font-semibold">عدد مرات الأستخدام</TableHead>
                                                <TableHead className="text-center font-semibold">قيمة الخصم</TableHead>
                                                <TableHead className="text-center font-semibold">رمز الكوبون</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {marketingToolsCoupons.map((invoice, index: number) => (
                                                <TableRow key={index}>
                                                    <TableCell>
                                                        <div className="flex items-center justify-center gap-2">
                                                            <Button className="bg-[#C74D0A] text-white rounded-md hover:bg-[#C74D0A] hover:text-white">
                                                                حذف
                                                            </Button>
                                                            <Button className="bg-[#8977CC] text-white rounded-md hover:bg-[#8977CC] hover:text-white">
                                                                تعديل
                                                            </Button>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell className="text-center">{invoice.endData}</TableCell>
                                                    <TableCell className="text-center">{invoice.usage}</TableCell>
                                                    <TableCell className="text-center">{invoice.value}</TableCell>
                                                    <TableCell className="text-center">{invoice.coupons}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>

                                    <div className="flex flex-col gap-4">
                                        <h2 className="text-[#5E4D9D] text-xl">إحصائيات استخدام العروض</h2>
                                        <div className="flex justify-center gap-5 flex-row-reverse">
                                            <Card className="flex-1 bg-[#F8F7FD] pb-0 pt-6">
                                                <CardHeader>
                                                    <CardTitle className="text-sm">نسبةالمبيعات الناتجة</CardTitle>
                                                    <CardDescription>العرض الأول</CardDescription>
                                                </CardHeader>
                                                <CardContent className="bg-blue-500 flex items-end justify-center">
                                                    <ChartContainer className="bg-slate-950" config={chartConfig}>
                                                        <BarChart accessibilityLayer data={chartData}>
                                                            <CartesianGrid vertical={false} />
                                                            <XAxis
                                                                dataKey="month"
                                                                tickLine={false}
                                                                tickMargin={10}
                                                                axisLine={false}
                                                                tickFormatter={(value) => value.slice(0, 3)}
                                                            />
                                                            <ChartTooltip
                                                                cursor={false}
                                                                content={<ChartTooltipContent hideLabel />}
                                                            />
                                                            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
                                                        </BarChart>
                                                    </ChartContainer>
                                                </CardContent>
                                            </Card>

                                            <Card className="flex-1 bg-[#F8F7FD]">
                                                <CardHeader className="flex items-center justify-center bg-red-50 w-full">
                                                    <CardTitle className="text-sm">عدد مرات التفعيل</CardTitle>
                                                    <CardDescription>15 April - 21 April</CardDescription>
                                                </CardHeader>
                                                <CardContent>
                                                    <ChartContainer config={chartConfig}>
                                                        <LineChart
                                                            accessibilityLayer
                                                            data={chartData}
                                                            margin={{
                                                                left: 12,
                                                                right: 12,
                                                            }}
                                                        >
                                                            <CartesianGrid vertical={false} />
                                                            <XAxis
                                                                dataKey="month"
                                                                tickLine={false}
                                                                axisLine={false}
                                                                tickMargin={8}
                                                                tickFormatter={(value) => value.slice(0, 3)}
                                                            />
                                                            <ChartTooltip
                                                                cursor={false}
                                                                content={<ChartTooltipContent hideLabel />}
                                                            />
                                                            <Line
                                                                dataKey="desktop"
                                                                type="natural"
                                                                stroke="var(--color-desktop)"
                                                                strokeWidth={2}
                                                                dot={false}
                                                            />
                                                        </LineChart>
                                                    </ChartContainer>
                                                </CardContent>
                                            </Card>

                                            <div className="flex-1"></div>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>

                            {/* Advertising */}
                            <TabsContent value="advertising">
                                <Button className="btn-purple absolute -top-32">اضافة حملة اعلانية جديدة</Button>
                                <div className="flex flex-col gap-4 py-6">
                                    <Table>
                                        <TableHeader>
                                            <TableRow className="bg-gray-50">
                                                <TableHead className="text-center font-semibold">الاجراءات</TableHead>
                                                <TableHead className="text-center font-semibold">الأهداف المحققة</TableHead>
                                                <TableHead className="text-center font-semibold">الحالة</TableHead>
                                                <TableHead className="text-center font-semibold">اسم الحملة</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {marketingToolsAdvertising.map((invoice, index: number) => (
                                                <TableRow key={index}>
                                                    <TableCell>
                                                        <div className="flex items-center justify-center gap-2">
                                                            <Button className="bg-[#C74D0A] text-white rounded-md hover:bg-[#C74D0A] hover:text-white">
                                                                حذف
                                                            </Button>
                                                            <Button className="bg-[#8977CC] text-white rounded-md hover:bg-[#8977CC] hover:text-white">
                                                                تعديل
                                                            </Button>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell className="text-center">{invoice.goals}</TableCell>
                                                    <TableCell className="text-center">{invoice.status}</TableCell>
                                                    <TableCell className="text-center">{invoice.name}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>

                                    <div className="flex justify-end gap-8 items-center">

                                    </div>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MarketingTools;