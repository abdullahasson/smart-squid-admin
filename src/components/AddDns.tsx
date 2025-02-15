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
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"


const AddDns = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button className="bg-[#8977CC] text-white rounded-md hover:bg-[#8977CC] hover:text-white">
                    أضافة DNS جديد
                </Button>
            </DialogTrigger>


            <DialogContent className="sm:rounded-3xl shadow-lg p-10">
                <DialogHeader>
                    <DialogTitle className="text-center text-[#5E4D9D] text-xl font-semibold">
                        أضافة DNS جديد
                    </DialogTitle>
                </DialogHeader>


                <div className="flex items-center justify-between flex-col flex-1 gap-6 my-8">
                    <div className="flex itmes-center flex-1">
                        <Select>
                            <SelectTrigger dir="rtl" className="w-[220px] border border-[#5E4D9D]">
                                <SelectValue placeholder="قم باختيار نوع السجل" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Fruits</SelectLabel>
                                    <SelectItem value="spf">SPF</SelectItem>
                                    <SelectItem value="dkim">DKIM</SelectItem>
                                    <SelectItem value="txt">TXT</SelectItem>
                                    <SelectItem value="aaaa">AAAA</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <Label className="w-[170px] flex items-center justify-end">
                            نوع السجل
                        </Label>
                    </div>

                    <div className="flex itmes-center flex-1 ">
                        <Input className="w-[220px] rounded-lg p-2 border border-[#5E4D9D] text-black" />
                        <Label className="w-[170px] flex items-center justify-end">
                            القيمة
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

export default AddDns;