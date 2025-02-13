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


const AddCoupons = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button className="bg-[#8977CC] text-white rounded-md hover:bg-[#8977CC] hover:text-white absolute -top-14 left-0">
                    أضافة كوبون جديد
                </Button>
            </DialogTrigger>


            <DialogContent className="sm:rounded-3xl shadow-lg p-10">
                <DialogHeader>
                    <DialogTitle className="text-center text-[#5E4D9D] text-xl font-semibold">
                        أضافة كوبون جديد
                    </DialogTitle>
                </DialogHeader>


                <div className="flex items-center justify-between flex-col flex-1 gap-6 my-8">
                    <div className="flex itmes-center flex-1 ">
                        <Input className="rounded-lg p-2 border border-[#5E4D9D] text-black" />
                        <Label className="w-[220px] flex items-center justify-end">
                            زمز الكوبون
                        </Label>
                    </div>


                    <div className="flex itmes-center flex-1 ">
                        <Input className="rounded-lg p-2 border border-[#5E4D9D] text-black" />
                        <Label className="w-[220px] flex items-center justify-end">
                            قيمة الخصم
                        </Label>
                    </div>

                    <div className="flex itmes-center flex-1 ">
                        <Input className="rounded-lg p-2 border border-[#5E4D9D] text-black" />
                        <Label className="w-[220px] flex items-center justify-end">
                            عدد مرات الاستخدام
                        </Label>
                    </div>

                    <div className="flex itmes-center flex-1 ">
                        <Input className="rounded-lg p-2 border border-[#5E4D9D] text-black" />
                        <Label className="w-[220px] flex items-center justify-end">
                            تاريخ النهاية
                        </Label>
                    </div>
                </div>


                <DialogFooter className="flex items-center sm:justify-evenly">
                    <DialogClose asChild>
                        <Button className="btn-orange-t w-48">الغاء</Button>
                    </DialogClose>

                    <Button className="btn-orange w-48">اضافة</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default AddCoupons;