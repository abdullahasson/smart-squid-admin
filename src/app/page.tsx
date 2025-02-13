"use client"
 
// React
import * as React from "react"

// components
import Overview from "@/components/Overview";
import Totalsales from "@/components/TotalSales";
import MonthlyTarget from "@/components/MonthlyTarget";
import DailyMeetings from "@/components/DailyMeetings";
import ReadOnlyDatePicker from "@/components/clock";

const Home = () => {
    return (
        <div className="flex-[4] p-9 flex flex-col gap-12">
            <div className="flex flex-col">
                <div className="w-full mb-6 flex items-center justify-between">
                    <ReadOnlyDatePicker />

                    <h2 className="font-semibold text-xl">نظرة عامة</h2>
                </div>
                <div dir="rtl" className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 items-end gap-4 w-full">
                    <Overview
                        text="عدد الاجتماعات اليوم"
                        percentage={2.3}
                        value="9"
                        chartData={
                            [
                                { month: "July", desktop: 150 },
                                { month: "August", desktop: 280 },
                                { month: "September", desktop: 320 },
                                { month: "October", desktop: 90 },
                                { month: "November", desktop: 210 },
                                { month: "December", desktop: 400 }
                            ]
                        }
                        chartColor='hsl(var(--chart-1))'
                    />

                    <Overview
                        text="عدد الطلبات المنفذة"
                        percentage={1.3}
                        value="620"
                        chartData={
                            [
                                { month: "January", desktop: 200 },
                                { month: "February", desktop: 250 },
                                { month: "March", desktop: 300 },
                                { month: "April", desktop: 180 },
                                { month: "May", desktop: 220 },
                                { month: "June", desktop: 270 }
                            ]
                        }
                        chartColor='hsl(var(--chart-2))'
                    />

                    <Overview
                        text="اجمالي الايرادات"
                        percentage={1.2}
                        value="306.20$"
                        chartData={
                            [
                                { month: "July", desktop: 400 },
                                { month: "August", desktop: 350 },
                                { month: "September", desktop: 420 },
                                { month: "October", desktop: 300 },
                                { month: "November", desktop: 450 },
                                { month: "December", desktop: 500 }
                            ]
                        }
                        chartColor='hsl(var(--chart-3))'
                    />

                    <Overview
                        text="عدد الزيارات"
                        percentage={2.3}
                        value="250"
                        chartData={
                            [
                                { month: "January", desktop: 120 },
                                { month: "February", desktop: 180 },
                                { month: "March", desktop: 220 },
                                { month: "April", desktop: 150 },
                                { month: "May", desktop: 190 },
                                { month: "June", desktop: 240 }
                            ]
                        }
                        chartColor='hsl(var(--chart-4))'
                    />

                    <Overview
                        text="عدد العملاء الجدد"
                        percentage={2.3}
                        value="56"
                        chartData={[
                            { month: "July", desktop: 500 },
                            { month: "August", desktop: 450 },
                            { month: "September", desktop: 600 },
                            { month: "October", desktop: 400 },
                            { month: "November", desktop: 550 },
                            { month: "December", desktop: 700 }
                        ]}
                        chartColor='hsl(var(--chart-5))'
                    />
                </div>
            </div>

            <div>
                <Totalsales />
            </div>

            <div>
                <DailyMeetings />
            </div>

            <div>
                <MonthlyTarget />
            </div>
        </div>
    )
}

export default Home;