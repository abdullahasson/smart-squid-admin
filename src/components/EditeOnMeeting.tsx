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
    DialogClose,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
// React Icons
import { FiEdit } from "react-icons/fi";


export interface PropsDataType {
    clientName: string;
    subject: string;
    date: string; // Time string
    status: string;
    email: string;
    phone: string;
}

const EditeOnMeeting = ({ defaultData }: { defaultData: PropsDataType }) => {

    const [isOpen , setIsOpen] = useState(false)

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button className="btn-edit">
                    <span>تعديل</span>
                    <FiEdit />
                </Button>
            </DialogTrigger>



            <DialogContent className="sm:rounded-3xl shadow-lg text-[#5E4D9D] max-w-[66vw] h-[60vh] overflow-y-auto p-12">
                <DialogHeader className="text-center">
                    <DialogTitle className="text-lg font-bold text-[#5E4D9D] text-center">
                        تعديل الاجتماع
                    </DialogTitle>
                </DialogHeader>

                <div className="flex flex-col gap-6 my-10">
                    <div className="flex items-center justify-between flex-1 gap-12">
                        <div className="flex itmes-center flex-1">
                            <Input className="rounded-lg p-2 border border-[#5E4D9D] text-black" readOnly value={defaultData.date}/>
                            <Label className="w-[170px] flex items-center justify-end">
                                وقت الاجتماع
                            </Label>
                        </div>

                        <div className="flex itmes-center flex-1">
                            <Input className="rounded-lg p-2 border border-[#5E4D9D] text-black" readOnly value={defaultData.clientName} />
                            <Label className="w-[170px] flex items-center justify-end">
                                اسم العميل
                            </Label>
                        </div>
                    </div>
                    
                    <div className="flex items-center justify-between flex-1 gap-12">
                        <div className="flex itmes-center flex-1 ">
                            <Input className="rounded-lg p-2 border border-[#5E4D9D] text-black" readOnly value={defaultData.status} />
                            <Label className="w-[170px] flex items-center justify-end">
                                حالة الاجتماع
                            </Label>
                        </div>

                        <div className="flex itmes-center flex-1">
                            <Input className="rounded-lg p-2 border border-[#5E4D9D] text-black" readOnly value={defaultData.subject} />
                            <Label className="w-[170px] flex items-center justify-end">
                                موضوع الاجتماع
                            </Label>
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

export default EditeOnMeeting;