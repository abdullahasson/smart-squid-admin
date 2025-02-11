"use client"
// Next
import * as React from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
// data
import { reports } from "@/utils/data"
// components
import MonthlyTarget from "@/components/MonthlyTarget"
// Shadcn UI
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
// React Icons
import { VscCloudDownload } from "react-icons/vsc";


// config
const chartConfig = {
    income: {
        label: "الدخل",
        color: "#0062FF",
    },
    expenses: {
        label: "المصروف",
        color: "#29CB97",
    },
} satisfies ChartConfig



const AdminReports = () => {
    const [date, setDate] = React.useState<Date>()
    

    return (
        <div className="flex-[4] p-9 flex flex-col gap-12">

            {/* Expenses and income */}
            <div className="flex flex-col">
                <div className="w-full mb-6">
                    <h2 className="font-semibold text-xl">التقارير</h2>
                </div>

                <div className="w-full bg-white rounded-lg shadow-sm py-5 px-4">
                    <div className="flex flex-row items-center justify-between pb-5">
                        <Popover>
                            <PopoverTrigger asChild>
                                <button className="w-32 border rounded-md p-2 shadow-sm bg-white text-[#5A607F] flex items-center gap-1 justify-center">
                                    <VscCloudDownload />
                                    <span>
                                        تصدير
                                    </span>
                                </button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <ul className="w-32 flex flex-col rounded-md border border-[#5A607F] bg-white border-collapse">
                                    <li className="w-full">
                                        <button className="text-[#5A607F] text-sm text-center w-full py-2">Excel   تصدير الى</button>
                                    </li>
                                    <li className="w-full">
                                        <button className="text-[#5A607F] text-sm text-center w-full py-2 border-y border-[#5A607F]">PDF   تصدير الى</button>
                                    </li>
                                    <li className="w-full">
                                        <button className="text-[#5A607F] text-sm text-center w-full py-2">CSV   تصدير الى</button>
                                    </li>
                                </ul>
                            </PopoverContent>
                        </Popover>

                        <h2 className="text-lg font-semibold">ادارة التقارير</h2>
                    </div>

                    <div className="flex flex-row-reverse justify-between items-center gap-4 pb-4">
                        <div className="flex-1 bg-[#F8F7FD] flex flex-row-reverse items-center justify-between rounded-md shadow-md py-3 px-4 h-[55px]">
                            <h5 className="flex-1 text-[#5E4D9D] text-sm">ايرادات</h5>
                            <h3 className="flex-1 font-semibold">12000$</h3>
                            <Popover>
                                <PopoverTrigger asChild className="flex-1">
                                    <Button
                                        variant={"outline"}
                                        className={cn(
                                            "w-[280px] justify-start text-left font-normal",
                                            !date && "text-muted-foreground"
                                        )}
                                    >
                                        <CalendarIcon />
                                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                    <Calendar
                                        mode="single"
                                        selected={date}
                                        onSelect={setDate}
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>
                        <div className="flex-1 flex items-center justify-between flex-row-reverse bg-[#F8F7FD] rounded-md shadow-md py-3 px-4 h-[55px]">
                            <h5 className="text-[#5E4D9D] text-sm">الضرائب</h5>
                            <h3 className="font-semibold">2000$</h3>
                        </div>
                        <div className="flex-1 flex items-center justify-between flex-row-reverse bg-[#F8F7FD] rounded-md shadow-md py-3 px-4 h-[55px]">
                            <h5 className="text-[#5E4D9D] text-sm">الأرباح الصافية</h5>
                            <h3 className="font-semibold">10000$</h3>
                        </div>
                    </div>

                    <Card className="bg-[#F8F7FD] rounded-md shadow-md border-none">
                        <CardHeader className="flex flex-col space-y-0 p-0">
                            <div className="w-full py-4 px-10 flex justify-between flex-row-reverse items-center">
                                <h4 className="text-lg font-semibold">ايرادات الشهر</h4>
                                <div></div>
                            </div>
                            <div className="w-full h-10 flex items-center justify-center gap-6">
                                <div className="flex items-center gap-2">
                                    <p className="text-sm">الدخل</p>
                                    <div className="rounded-full w-3 h-3 bg-blue-500"></div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <p className="text-sm">المصروفات</p>
                                    <div className="rounded-full w-3 h-3 bg-green-500"></div>
                                </div>
                            </div>
                        </CardHeader>

                        <CardContent>
                            <ChartContainer config={chartConfig} style={{ height: "324px", width: "100%" }}>
                                <BarChart
                                    accessibilityLayer
                                    data={reports}
                                    margin={{ top: 20, right: 12, left: 12, bottom: 5 }}
                                >

                                    <CartesianGrid vertical={false} />
                                    <YAxis
                                        orientation="right" // Move YAxis to the right side
                                        tickLine={false}
                                        axisLine={false}
                                        tickFormatter={(value) => `${value}K`}
                                        domain={[0, 400]} // Set domain to fit your data range
                                        ticks={[0, 100, 200, 300, 400]} // Define ticks for better readability
                                    />
                                    <XAxis
                                        dataKey="month"
                                        tickLine={false}
                                        tickMargin={10}
                                        axisLine={false}
                                        tickFormatter={(value) => value}
                                    />
                                    <ChartTooltip
                                        cursor={true}
                                        content={<ChartTooltipContent indicator="dot" />}
                                    />
                                    <Bar
                                        dataKey="expenses"
                                        fill="var(--color-expenses)"
                                        radius={[100, 100, 0, 0]}
                                        barSize={12}
                                        animationDuration={1000} // Adjust animation duration (in milliseconds)
                                        animationEasing="ease-in-out" // Customize easing function
                                    />
                                    <Bar
                                        dataKey="income"
                                        fill="var(--color-income)"
                                        radius={[100, 100, 0, 0]}
                                        barSize={12}
                                        animationDuration={1000} // Adjust animation duration (in milliseconds)
                                        animationEasing="ease-in-out" // Customize easing function
                                    />
                                </BarChart>
                            </ChartContainer>
                        </CardContent>
                    </Card>
                </div>
            </div>


            {/* Monthly Target */}
            <MonthlyTarget />
        </div>
    )
}

export default AdminReports;