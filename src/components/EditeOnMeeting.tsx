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


const EditeOnMeeting = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-[#8977CC] text-white rounded-md hover:bg-[#8977CC] hover:text-white">
                    تعديل
                </Button>
            </DialogTrigger>


            <DialogContent className="border-none sm:min-w-[600px] sm:px-0 sm:py-0 flex flex-col gap-4 p-5 sm:rounded-3xl overflow-hidden shadow-xl">
                <DialogHeader className="h-20 flex items-center justify-center">
                    <DialogTitle>
                        تعديل الأجتماع
                    </DialogTitle>
                </DialogHeader>

                <div className="h-30 w-full py-10 px-5 flex flex-col gap-4">
                    <div className="flex items-center w-full justify-between">
                        <div className="flex-1 flex items-center gap-3">
                            <Input className="flex-1" />
                            <Label className="flex-1 text-center">وقت الاجتماع</Label>
                        </div>
                        <div className="flex-1 flex items-center gap-3">
                            <Input className="flex-1" />
                            <Label className="flex-1 text-center">اسم العميل</Label>
                        </div>
                    </div>

                    <div className="flex items-center w-full justify-between">
                        <div className="flex-1 flex items-center">
                            <Input className="flex-1" />
                            <Label className="flex-1 text-center">حالة الاجتماع</Label>
                        </div>
                        <div className="flex-1 flex items-center">
                            <Input className="flex-1" />
                            <Label className="flex-1 text-center">موضوع الاجتماع</Label>
                        </div>
                    </div>
                </div>

                <DialogFooter className="h-20 flex items-center gap-8 sm:justify-center">
                    <Button className="btn-orange-t w-48">الغاء</Button>
                    
                    <Button className="btn-orange w-48">حفظ</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default EditeOnMeeting;
