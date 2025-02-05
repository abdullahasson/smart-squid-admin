"use client"
import React from "react"
import { Area, AreaChart } from "recharts"
import { FaArrowDown , FaArrowUp } from "react-icons/fa6";

import {
    ChartConfig,
    ChartContainer,
} from "@/components/ui/chart";


interface ChartData {
    month: string;
    desktop: number;
}

interface OverviewProps {
    text: string;
    percentage: number;
    value: string;
    chartColor: string;
    chartData: ChartData[];
}

const chartConfig = (color: string) => ({
    desktop: {
        label: "Desktop",
        color: color,
    },
}) satisfies ChartConfig

const Overview: React.FC<OverviewProps> = ({ text, percentage, value, chartData , chartColor }) => {
    return (
        <div dir="ltr" className="col-span-1 bg-white pr-4 py-2 flex items-end justify-center flex-row-reverse rounded-md shadow-md">
            <div className="flex-1 h-full">
                <h3 className="text-lg mb-2 font-medium text-[#7E84A3]">
                    {text}
                </h3>

                <h1 className="text-2xl font-bold">
                    {value}
                </h1>

                <p className="text-sm text-[#7E84A3] flex items-center justify-end gap-2 w-full">
                    <span>من العام الماضي</span>
                    {" "}
                    <span className={`font-bold flex items-center justify-center gap-[2px] ${percentage >= 2 ? "text-[#3DD598]" : "text-[#F0142F]"}`}>
                        {percentage >= 2 ? (<FaArrowUp />) : (<FaArrowDown />)}
                        {percentage}%
                    </span>
                </p>
            </div>
            <div className="flex-1 items-end ">
                <ChartContainer config={chartConfig(chartColor)} className="h-10 w-full">
                    <AreaChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                        className=""
                    >
                        <Area
                            dataKey="desktop"
                            type="linear"
                            fill="var(--color-desktop)"
                            fillOpacity={0.4}
                            stroke="var(--color-desktop)"
                        />
                    </AreaChart>
                </ChartContainer>
            </div>
        </div>
    )
}

export default Overview
