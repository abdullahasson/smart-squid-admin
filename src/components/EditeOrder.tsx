"use client"

// React
import { useState } from "react"
// Shadcn UI
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
// React Icons
import { FaCirclePlus , FaCircleMinus } from "react-icons/fa6";

const EditeOrder = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <button className="border-[#C74D0A] border-2 text-[#C74D0A] py-2 px-8 rounded-md hover:bg-[#C74D0A] hover:text-white">
                    تعديل الطلب
                </button>
            </DialogTrigger>
 

            <DialogContent className="sm:rounded-3xl shadow-lg p-10">
                <DialogHeader>
                    <DialogTitle className="text-center text-[#5E4D9D] text-xl font-semibold">
                        تعديل الطلب
                    </DialogTitle>
                </DialogHeader>


                <div className="flex items-center justify-between flex-col flex-1 gap-6 my-8">
                    <div className="flex itmes-center flex-1 ">
                        <Input className="rounded-lg p-2 border border-[#5E4D9D] text-black"/>
                        <Label className="w-[170px] flex items-center justify-end">
                            عنوان الشحن
                        </Label>
                    </div>

                    <div className="flex itmes-center flex-1">
                        <Input className="rounded-lg p-2 border border-[#5E4D9D] text-black"/>
                        <Label className="w-[170px] flex items-center justify-end">
                            طريقة الدفع
                        </Label>
                    </div>

                    <div className="w-full flex items-center justify-center gap-5 text-[#5E4D9D]">
                        <div className="flex items-center gap-3">
                            <p>ازالة المنتج</p>
                            <FaCircleMinus />
                        </div>
                        <div className="flex items-center gap-3">
                            <p>اضافة المنتج</p>
                            <FaCirclePlus />
                        </div>
                    </div>
                </div>


                <DialogFooter className="flex items-center sm:justify-evenly">
                    <DialogClose asChild>
                        <Button className="btn-orange-t w-48">الغاء</Button>
                    </DialogClose>

                    <Button className="btn-orange w-48">حفظ</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default EditeOrder;
