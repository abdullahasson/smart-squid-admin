"use client"
// React
import { useState } from "react"
// Data
import { dailyMeetings } from "@/utils/data"
// Shadcn UI
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Separator } from "@/components/ui/separator"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
// React Icons
import { CiClock1 } from "react-icons/ci";

const DailyMeetings = () => {
    const [date, setDate] = useState<Date>()

    const arabicWeekdays = ["السبت", "الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة"].reverse();



    return (
        <div className="flex flex-col gap-5 p-5 rounded-md bg-white shadow-sm">
            <div className="w-full flex justify-between flex-row-reverse items-center">
                <h4 className="text-lg font-semibold">الاجتماعات اليومية</h4>

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

            
            <div className="grid lg:grid-cols-7 xl:grid-cols-7 gap-4">
                {
                    arabicWeekdays.map((day, index) => (
                        <div key={index} className="col-span-1 h-12 bg-purple-500 shadow-md rounded-md text-white flex items-center justify-center">
                            {day}
                        </div>
                    ))
                }
            </div>

            <div className="grid lg:grid-cols-7 xl:grid-cols-7 gap-4" dir="rtl">
                {dailyMeetings.map((item, index) => item.subject ? 
                    (
                        <TooltipProvider key={index}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <div className={`
                                        col-span-1 h-16 p-1 shadow-md rounded-md text-white flex flex-col text-black
                                        ${item.subject ? "bg-[#DFD7FF]" : "bg-gray-100"}
                                    `}>
                                        <div className="flex-1 flex items-center justify-between">
                                            <div className="text-black font-semibold">
                                                {item.day}
                                            </div>
                                            <div dir="ltr" className="text-[10px] text-gray-700">
                                                {item.time || null}
                                            </div>
                                        </div>

                                        <div className="flex-[4] flex items-center justify-center text-black line-clamp-1 text-[11px] text-center">
                                            {item.subject || null}
                                        </div>
                                    </div>
                                </TooltipTrigger>
                                
                                <TooltipContent side="left" className="flex flex-col overflow-hidden border-t-[12px] border-t-[#C74D0A] rounded-lg p-2">
                                    
                                        <div className="text-center pb-2">
                                            <h3 className="text-center">اجتماع مع العميل (Client Meeting)</h3>
                                        </div>

                                        <Separator />
                                        <div>
                                            <ul className="py-1">
                                                <li className="flex gap-2 items-center my-1">
                                                    <h4 className="font-semibold text-sm">الوقت</h4>
                                                    <p className="text-[11px] flex items-center gap-1">
                                                        <span>10:00AM - 11:00AM</span>
                                                        <CiClock1 />    
                                                    </p>
                                                </li>
                                                <li className="flex gap-2 items-center my-1">
                                                    <h4 className="font-semibold text-sm">الموضوع</h4>
                                                    <p className="text-[11px]">{item.subject}</p>
                                                </li>
                                                <li className="flex gap-2 items-center my-1">
                                                    <h4 className="font-semibold text-sm">العميل</h4>
                                                    <p className="text-[11px]">{item.clientName}</p>
                                                </li>
                                                <li className="flex gap-2 items-center my-1">
                                                    <h4 className="font-semibold text-sm">المكان</h4>
                                                    <p className="text-[11px]">{item.place}</p>
                                                </li>
                                                <li className="flex gap-2 items-center my-1">
                                                    <h4 className="font-semibold text-sm">ملاحظة</h4>
                                                    <p className="text-[11px]">{item.note}</p>
                                                </li>
                                            </ul>
                                        </div>
                                    
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    ):(
                        <div key={index} className={`
                            col-span-1 h-16 p-1 shadow-md rounded-md text-white flex flex-col text-black
                            ${item.subject ? "bg-[#DFD7FF]" : "bg-gray-100"}
                        `}>
                            <div className="flex-1 flex items-center justify-between">
                                <div className="text-black font-semibold">
                                    {item.day}
                                </div>
                                <div dir="ltr" className="text-[10px] text-gray-700">
                                    {item.time || null}
                                </div>
                            </div>

                            <div className="flex-[4] flex items-center justify-center text-black line-clamp-1 text-[11px] text-center">
                                {item.subject || null}
                            </div>
                        </div>
                    )
            
            )}
            </div>
        </div>
    )

}

export default DailyMeetings;