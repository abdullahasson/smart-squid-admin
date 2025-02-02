import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

const EditeOrder = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className="border-[#C74D0A] border-2 text-[#C74D0A] py-2 px-8 rounded-md hover:bg-[#C74D0A] hover:text-white">
                    تعديل الطلب
                </button>
            </DialogTrigger>
            <DialogContent className="w-[900px] border-none rounded-3xl py-28">
                <DialogHeader>
                    <DialogTitle className="text-center text-[#5E4D9D] text-xl font-semibold">
                        تعديل الاجتماع
                    </DialogTitle>
                </DialogHeader>

                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Input
                            id="name"
                            defaultValue="Pedro Duarte"
                            className="col-span-3"
                        />
                        <Label htmlFor="name" className="text-right">
                            ادخال قيمة الهدف الشهري الجديد
                        </Label>
                    </div>
                </div>

                <DialogFooter className="flex justify-center items-center gap-4 px-10">
                    <Button className="flex-1 rounded-md text-[#C74D0A] bg-transparent hover:bg-[#C74D0A] hover:text-white py-2 px-6 text-center border border-[#C74D0A]">الغاء</Button>
                    <Button type="submit" className="flex-1 rounded-md bg-[#C74D0A] hover:bg-[#C74D0A] text-white py-2 px-6 text-center">تعيين</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default EditeOrder;
