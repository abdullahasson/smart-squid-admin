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
    DialogClose,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
// React Icons
import { AiOutlineDelete } from "react-icons/ai";

const DeleteClient = () => {

    const [isOpen , setIsOpen] = useState(false)

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button className="btn-delete">
                    <span>حذف</span>
                    <AiOutlineDelete />
                </Button>
            </DialogTrigger>
            
            
            <DialogContent className="w-[900px] border-none sm:rounded-[30px] sm:py-16">
                 <DialogHeader>
                    <DialogTitle className="text-center text-[#5E4D9D] text-xl font-semibold">
                        هل أنت متأكد من الغاء هذا العميل؟
                    </DialogTitle>
                </DialogHeader>

                <div className="my-4"></div>

                <DialogFooter className="flex justify-center items-center gap-4 px-10">
                    
                    <DialogClose asChild>
                        <Button className="flex-1 rounded-lg text-[#C74D0A] bg-transparent hover:bg-[#C74D0A] hover:text-white py-2 px-6 text-center border border-[#C74D0A]">لا</Button>
                    </DialogClose>

                    <Button className="flex-1 rounded-lg bg-[#C74D0A] hover:bg-[#C74D0A] text-white py-2 px-6 text-center">نعم</Button>
                </DialogFooter> 
            </DialogContent>
            
        </Dialog>
    )
}

export default DeleteClient;