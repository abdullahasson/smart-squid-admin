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
import { Button } from "@/components/ui/button"


const AppAdded = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button className="bg-[#8977CC] text-white rounded-md hover:bg-[#8977CC] hover:text-white absolute -top-14 left-0">
                    أضافة عرض جديد
                </Button>
            </DialogTrigger>


            <DialogContent className="sm:rounded-3xl shadow-lg p-10">
                <DialogHeader>
                    <DialogTitle className="text-center text-[#5E4D9D] text-xl font-semibold">
                        أضافة عرض جديد
                    </DialogTitle>
                </DialogHeader>

 
                <DialogFooter className="flex items-center sm:justify-evenly">
                    <DialogClose asChild>
                        <Button className="btn-orange w-48">اضافة</Button>
                    </DialogClose>

                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default AppAdded;