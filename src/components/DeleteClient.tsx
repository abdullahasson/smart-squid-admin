import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

const DeleteClient = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-[#C74D0A] text-white rounded-md hover:bg-[#C74D0A] hover:text-white">
                    حذف
                </Button>
            </DialogTrigger>
            <DialogContent className="w-[900px] border-none rounded-3xl py-28">
                <DialogHeader>
                    <DialogTitle className="text-center text-[#5E4D9D] text-xl font-semibold">
                        تعديل الاجتماع
                    </DialogTitle>
                </DialogHeader>

                <DialogFooter className="flex justify-center items-center gap-4 px-10">
                    <Button className="flex-1 rounded-md text-[#C74D0A] bg-transparent hover:bg-[#C74D0A] hover:text-white py-2 px-6 text-center border border-[#C74D0A]">الغاء</Button>
                    <Button type="submit" className="flex-1 rounded-md bg-[#C74D0A] hover:bg-[#C74D0A] text-white py-2 px-6 text-center">تعيين</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default DeleteClient
