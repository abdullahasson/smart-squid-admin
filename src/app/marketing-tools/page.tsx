"use client"

// Data
import { marketingToolsOffers, marketingToolsCoupons, marketingToolsAdvertising } from "@/utils/data"
// Components
import AddOffer from "@/components/AddOffer"
import AddCoupons from "@/components/AddCoupons"
// Shadcn UI
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
import { 
    Bar, 
    BarChart,
    CartesianGrid, 
    Line, 
    LineChart, 
    XAxis ,
    Label,
    PolarGrid,
    PolarRadiusAxis,
    RadialBar,
    RadialBarChart,
} from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    // CardFooter,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
// React Icons
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";

// import { TrendingUp } from "lucide-react"




const radialchartData = [
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
]
const radialchartConfig = {
  visitors: {
    label: "Visitors",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

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
                            <TabsContent value="offers" className="relative">
                                
                                <AddOffer />

                                <div className="flex flex-col gap-12 py-4">
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
                                        <h2 className="text-[#5E4D9D] text-lg font-semibold">إحصائيات استخدام العروض</h2>
                                        <div className="flex justify-center gap-5 flex-row-reverse">
                                            <Card className="flex-1 bg-[#F8F7FD]">
                                                <CardHeader>
                                                    <CardTitle className="text-md">نسبةالمبيعات الناتجة</CardTitle>
                                                    <CardDescription>January - June 2024</CardDescription>
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
                                                    <CardTitle className="text-md">عدد مرات التفعيل</CardTitle>
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
                            <TabsContent value="coupons" className="relative">
                                
                                <AddCoupons />

                                <div className="flex flex-col gap-12 py-4">
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
                                                    <TableCell className="text-center">{invoice.endData}</TableCell>
                                                    <TableCell className="text-center">{invoice.usage}</TableCell>
                                                    <TableCell className="text-center">{invoice.value}</TableCell>
                                                    <TableCell className="text-center">{invoice.coupons}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>

                                    <div className="flex flex-col gap-4">
                                        <h2 className="text-[#5E4D9D] text-lg font-semibold">إحصائيات استخدام العروض</h2>
                                        <div className="flex justify-center gap-5 flex-row-reverse">
                                            <Card className="flex flex-col justify-between flex-1 bg-[#F8F7FD]">
                                                <CardHeader>
                                                    <CardTitle className="text-md">عدد مرات الأستخدام</CardTitle>
                                                    <CardDescription>العرض الاول</CardDescription>
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

                                            <Card className="flex flex-col justify-between flex-1 bg-[#F8F7FD]">
                                                <CardHeader className="text-center flex items-center">
                                                    <CardTitle className="text-md">الايرادات الناتجة</CardTitle>
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

                                            
                                            <Card className="flex flex-col flex-1 bg-[#F8F7FD]">
                                                <CardHeader className="text-center">
                                                    <CardTitle className="text-md text-center">معدل التحويل</CardTitle>
                                                </CardHeader>
                                                <CardContent className="flex-1 pb-0">
                                                    <ChartContainer
                                                    config={radialchartConfig}
                                                    className="mx-auto aspect-square max-h-[250px] max-w-[250px]"
                                                    >
                                                    <RadialBarChart
                                                        data={radialchartData}
                                                        startAngle={0}
                                                        endAngle={250}
                                                        innerRadius={80}
                                                        outerRadius={110}
                                                        
                                                    >
                                                        <PolarGrid
                                                        gridType="circle"
                                                        radialLines={false}
                                                        stroke="none"
                                                        className="first:fill-muted last:fill-background"
                                                        polarRadius={[86, 74]}
                                                        />
                                                        <RadialBar dataKey="visitors" background cornerRadius={10} />
                                                        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                                                        <Label
                                                            content={({ viewBox }) => {
                                                            if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                                                return (
                                                                <text
                                                                    x={viewBox.cx}
                                                                    y={viewBox.cy}
                                                                    textAnchor="middle"
                                                                    dominantBaseline="middle"
                                                                >
                                                                    <tspan
                                                                    x={viewBox.cx}
                                                                    y={viewBox.cy}
                                                                    className="fill-foreground text-4xl font-bold"
                                                                    >
                                                                    {/* {chartData[0].visitors} */}200
                                                                    </tspan>
                                                                    <tspan
                                                                    x={viewBox.cx}
                                                                    y={(viewBox.cy || 0) + 24}
                                                                    className="fill-muted-foreground"
                                                                    >
                                                                    Visitors
                                                                    </tspan>
                                                                </text>
                                                                )
                                                            }
                                                            }}
                                                        />
                                                        </PolarRadiusAxis>
                                                    </RadialBarChart>
                                                    </ChartContainer>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </div>

                                </div>
                            </TabsContent>

                            {/* Advertising */}
                            <TabsContent value="advertising">
                                <Button className="btn-purple absolute -top-32">اضافة حملة اعلانية جديدة</Button>
                                <div className="flex flex-col gap-8 py-4">
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
                                                    <TableCell className="text-center">{invoice.goals}</TableCell>
                                                    <TableCell className="text-center">{invoice.status}</TableCell>
                                                    <TableCell className="text-center">{invoice.name}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>

                                   <div className="flex flex-col gap-4">
                                        <h2 className="text-[#5E4D9D] text-lg font-semibold">إحصائيات استخدام العروض</h2>
                                        <div className="flex justify-center gap-5 flex-row-reverse">
                                            <Card className="flex flex-col justify-between flex-1 bg-[#F8F7FD]">
                                                <CardHeader>
                                                    <CardTitle className="text-md">عدد مرات الأستخدام</CardTitle>
                                                    <CardDescription>العرض الاول</CardDescription>
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
                                                            <Bar barSize={12} dataKey="desktop" fill="var(--color-desktop)" radius={8}>

                                                            </Bar>
                                                        </BarChart>
                                                    </ChartContainer>
                                                </CardContent>
                                            </Card>
                                            <Card className="flex flex-col flex-1 bg-[#F8F7FD]">
                                                <CardHeader className="flex items-center">
                                                    <CardTitle className="text-md text-center">معدل التحويل</CardTitle>
                                                    <CardDescription className="text-center">15 April - 15 May</CardDescription>
                                                </CardHeader>
                                                <CardContent className="flex-1 pb-0">
                                                    <ChartContainer
                                                        config={radialchartConfig}
                                                        className="mx-auto aspect-square max-h-[250px] max-w-[250px]"
                                                    >
                                                        <RadialBarChart
                                                            data={radialchartData}
                                                            startAngle={0}
                                                            endAngle={250}
                                                            innerRadius={80}
                                                            outerRadius={110}
                                                        >
                                                            <PolarGrid
                                                                gridType="circle"
                                                                radialLines={false}
                                                                stroke="none"
                                                                className="first:fill-muted last:fill-background"
                                                                polarRadius={[86, 74]}
                                                            />
                                                            {/* Add a RadialBar with a background to highlight the unfilled area */}
                                                            <RadialBar
                                                                dataKey="visitors"
                                                                background={{ fill: "#eee" }} // Set the background color for the unfilled area
                                                                cornerRadius={10}
                                                                fill="var(--color-primary)" // Set the fill color for the filled area
                                                            />
                                                            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                                                                <Label
                                                                    content={({ viewBox }) => {
                                                                        if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                                                            return (
                                                                                <text
                                                                                    x={viewBox.cx}
                                                                                    y={viewBox.cy}
                                                                                    textAnchor="middle"
                                                                                    dominantBaseline="middle"
                                                                                >
                                                                                    <tspan
                                                                                        x={viewBox.cx}
                                                                                        y={viewBox.cy}
                                                                                        className="fill-foreground text-4xl font-bold"
                                                                                    >
                                                                                        {/* {chartData[0].visitors} */}58%
                                                                                    </tspan>
                                                                                </text>
                                                                            );
                                                                        }
                                                                    }}
                                                                />
                                                            </PolarRadiusAxis>
                                                        </RadialBarChart>
                                                    </ChartContainer>
                                                </CardContent>
                                            </Card>
                                            <Card className="flex flex-col justify-between flex-1 bg-[#F8F7FD]">
                                                <CardHeader className="text-center flex items-center">
                                                    <CardTitle className="text-md">الايرادات الناتجة</CardTitle>
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
                                        </div>
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