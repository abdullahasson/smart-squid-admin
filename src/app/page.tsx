// components
import Overview from "@/components/Overview";
import Totalsales from "@/components/TotalSales";
import MonthlyTarget from "@/components/MonthlyTarget";
import DailyMeetings from "@/components/DailyMeetings";
// fake data
import { overview } from "@/utils/data"

const Home = () => {
    return (
        <div className="flex-[4] p-9 flex flex-col gap-12">
            <div className="flex flex-col">
                <div className="w-full mb-6">
                    <h2 className="font-semibold text-xl">نظرة عامة</h2> 
                </div>
                <div dir="rtl" className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 items-end gap-4 w-full">
                    <Overview
                        text="عدد الاجتماعات اليوم"
                        percentage={2.3}
                        value="9"
                        chartData={overview}
                        chartColor='hsl(var(--chart-1))'
                    />

                    <Overview
                        text="عدد الطلبات المنفذة"
                        percentage={1.3}
                        value="620"
                        chartData={overview}
                        chartColor='hsl(var(--chart-2))'
                    />

                    <Overview
                        text="اجمالي الايرادات"
                        percentage={1.2}
                        value="306.20$"
                        chartData={overview}
                        chartColor='hsl(var(--chart-3))'
                    />

                    <Overview
                        text="عدد الزيارات"
                        percentage={2.3}
                        value="250"
                        chartData={overview}
                        chartColor='hsl(var(--chart-4))'
                    />

                    <Overview
                        text="عدد العملاء الجدد"
                        percentage={2.3}
                        value="56"
                        chartData={overview}
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