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
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"


const AddEmploye = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button className="btn-purple">
                    اضافة موظف جديد
                </Button>
            </DialogTrigger>


            <DialogContent className="sm:rounded-3xl shadow-lg p-10">
                <DialogHeader>
                    <DialogTitle className="text-center text-[#5E4D9D] text-xl font-semibold">
                        أضافة موظف جديد
                    </DialogTitle>
                </DialogHeader>


                <div className="flex items-center justify-between flex-col flex-1 gap-6 my-8">
                    <div className="flex itmes-center flex-1 ">
                        <Input className="rounded-lg p-2 border border-[#5E4D9D] text-black" />
                        <Label className="w-[170px] flex items-center justify-end">
                            الاسم الكامل
                        </Label>
                    </div>

                    <div className="flex itmes-center flex-1 ">
                        <Input className="rounded-lg p-2 border border-[#5E4D9D] text-black" />
                        <Label className="w-[170px] flex items-center justify-end">
                            البريد الإلكتروني
                        </Label>
                    </div>

                    <div className="flex itmes-center flex-1 ">
                        <Input className="rounded-lg p-2 border border-[#5E4D9D] text-black" />
                        <Label className="w-[170px] flex items-center justify-end">
                            المسمى الوظيفي
                        </Label>
                    </div>

                    <div className="flex itmes-center flex-1 ">
                        <Input className="rounded-lg p-2 border border-[#5E4D9D] text-black" />
                        <Label className="w-[170px] flex items-center justify-end">
                            كلمة المرور
                        </Label>
                    </div>

                    <div className="flex itmes-center flex-1 ">
                        <div className="flex items-center flex-row-reverse gap-2">
                            <div className="flex items-center space-x-2">
                                <Checkbox id="terms" />
                                <label
                                    htmlFor="terms"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    اجتماعات
                                </label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="terms" />
                                <label
                                    htmlFor="terms"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    طلبات
                                </label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="terms" />
                                <label
                                    htmlFor="terms"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    تقارير
                                </label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="terms" />
                                <label
                                    htmlFor="terms"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    اعدادت الموقع
                                </label>
                            </div>
                        </div>

                        <Label className="w-[170px] flex items-center justify-end">
                            الصلاحيات
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

export default AddEmploye;