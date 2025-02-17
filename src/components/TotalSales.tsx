"use client"
// React
import { useState } from "react"
// Data
import { totalSales } from "@/utils/data"
// Shadcn UI
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { CartesianGrid, Line, LineChart, XAxis , YAxis } from "recharts"
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


const chartConfig = {
    finished: {
        label: "الطلبات المنتهية",
        color: "#21D59B",
    },
    inProgress: {
        label: "طلبات قيد التنفيذ",
        color: "#0058FF",
    },
} satisfies ChartConfig

export default function TotalSales() {
    const [date, setDate] = useState<Date>()

    return (
        <Card>

            <CardHeader className="flex flex-col space-y-0 p-0">
                <div className="w-full py-4 px-10 flex justify-between flex-row-reverse items-center">
                    <h4 className="text-lg font-semibold">إجمالي المبيعات</h4>

                    <Popover>
                        <PopoverTrigger asChild>
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
                <div className="w-full h-10 flex items-center justify-center gap-6">
                    <div className="flex items-center gap-2">
                        <p className="text-sm">الطلبات المنتهية</p>
                        <div className="rounded-full w-3 h-3 bg-green-500"></div>
                    </div>
                    <div className="flex items-center gap-2">
                        <p className="text-sm">طلبات قيد التنفيذ</p>
                        <div className="rounded-full w-3 h-3 bg-blue-500"></div>
                    </div>
                </div>
            </CardHeader>

            <CardContent className="px-2 sm:p-6">
                <ChartContainer
                    config={chartConfig}
                    className="aspect-auto h-[250px] w-full"
                >
                    <LineChart
                        accessibilityLayer
                        data={totalSales}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >

                        <CartesianGrid vertical={true} horizontal={false} />
                        
                        <XAxis
                            dataKey="date"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            minTickGap={32}
                            tickFormatter={(value) => {
                                const date = new Date(value)
                                return date.toLocaleDateString("en-US", {
                                    day: "numeric",
                                })
                            }}
                        />

                        <YAxis
                            orientation="right"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            domain={['dataMin', 'dataMax']} // Adjust the domain as needed
                            tickFormatter={(value) => {
                                return value.toLocaleString(); // Format the Y-axis values
                            }}
                        />

                        <ChartTooltip
                            content={
                                <ChartTooltipContent
                                    className="w-[160px]"
                                    // nameKey="inProgress"
                                    labelFormatter={(value) => {
                                        return new Date(value).toLocaleDateString("ar-EG", {
                                            month: "short",
                                            day: "numeric",
                                            year: "numeric",
                                        })
                                    }}
                                />
                            }
                        />

                        <Line
                            dataKey={"inProgress"}
                            type="monotone"
                            stroke={`var(--color-inProgress)`}
                            strokeWidth={2}
                            dot={false}
                        />

                        <Line
                            dataKey={"finished"}
                            type="monotone"
                            stroke={`var(--color-finished)`}
                            strokeWidth={2}
                            dot={false}
                        />
                        
                    </LineChart>
                </ChartContainer>
            </CardContent>

        </Card>
    )
}
