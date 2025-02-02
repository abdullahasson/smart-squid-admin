import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"

const DeleteOrder = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className="bg-[#C74D0A] py-2 px-8 text-white rounded-md hover:bg-[#C74D0A] hover:text-white">
                    حذف الطلب
                </button>
            </DialogTrigger>
            <DialogContent className="w-[900px] border-none sm:rounded-[30px] sm:py-16">
                <DialogHeader>
                    <DialogTitle className="text-center text-[#5E4D9D] text-xl font-semibold">
                        هل أنت متأكد من الغاء هذا الطلب؟
                    </DialogTitle>
                </DialogHeader>

                <div className="my-4"></div>

                <DialogFooter className="flex justify-center items-center gap-4 px-10">
                    <Button className="flex-1 rounded-lg text-[#C74D0A] bg-transparent hover:bg-[#C74D0A] hover:text-white py-2 px-6 text-center border border-[#C74D0A]">لا</Button>
                    <Button className="flex-1 rounded-lg bg-[#C74D0A] hover:bg-[#C74D0A] text-white py-2 px-6 text-center">نعم</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default DeleteOrder;