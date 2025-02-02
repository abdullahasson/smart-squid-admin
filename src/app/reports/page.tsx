"use client"
import { reports } from "@/utils/data"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import MonthlyTarget from "@/components/MonthlyTarget"

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
    ChartLegend,
    ChartLegendContent
} from "@/components/ui/chart"


import * as React from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"


const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "#0062FF",
    },
    mobile: {
        label: "Mobile",
        color: "#29CB97",
    },
} satisfies ChartConfig

const AdminReports = () => {
    const [date, setDate] = React.useState<Date>()

    return (
        <div className="flex-[4] p-9 flex flex-col gap-12">
            <div className="flex flex-col">
                <div className="w-full mb-6">
                    <h2 className="font-semibold text-xl">التقارير</h2>
                </div>

                <div className="w-full bg-white rounded-lg shadow-sm py-5">
                    <div className="flex flex-row items-center justify-between px-4 pb-4">
                        <div></div>

                        <h2 className="text-lg font-semibold">ادارة التقارير</h2>
                    </div>

                    <Card className="border-none">
                        <CardHeader className="flex flex-row-reverse justify-between items-center gap-4">
                            <div className="flex-1 bg-[#F8F7FD] flex flex-row-reverse items-center justify-between rounded-md shadow-md py-3 px-4">
                                <h5 className="flex-1 text-[#5E4D9D] text-sm">ايرادات</h5>
                                <h3 className="flex-1 font-semibold">2500$</h3>
                                <Popover>
                                    <PopoverTrigger asChild className="flex-1 p-0 py-0">
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
                            <div className="flex-1 flex items-center justify-between flex-row-reverse bg-[#F8F7FD] rounded-md shadow-md py-3 px-4">
                                <h5 className="text-[#5E4D9D] text-sm">ايرادات</h5>
                                <h3 className="font-semibold">2000$</h3>
                            </div>
                            <div className="flex-1 flex items-center justify-between flex-row-reverse bg-[#F8F7FD] rounded-md shadow-md py-3 px-4">
                                <h5 className="text-[#5E4D9D] text-sm">ايرادات</h5>
                                <h3 className="font-semibold">2000$</h3>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <ChartContainer config={chartConfig}>
                                <BarChart accessibilityLayer data={reports}>
                                    <ChartLegend content={<ChartLegendContent />} />
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
                                        content={<ChartTooltipContent indicator="dashed" />}
                                    />
                                    <Bar dataKey="desktop" fill="var(--color-desktop)" radius={[100, 100, 0, 0]} />
                                    <Bar dataKey="mobile" fill="var(--color-mobile)" radius={[100, 100, 0, 0]} />

                                </BarChart>

                            </ChartContainer>
                        </CardContent>

                    </Card>

                </div>
            </div>

            <MonthlyTarget />
        </div>
    )
}

export default AdminReports;