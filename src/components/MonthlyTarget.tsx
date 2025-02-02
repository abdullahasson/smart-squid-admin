import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "@/components/ui/card"

import {
    Button
} from "@/components/ui/button"

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


const MonthlyTarget = () => {
    return (
        <>
            <Card className="p-10">
                <CardHeader className="flex flex-row-reverse justify-between items-center mb-4">
                    <CardTitle className="text-lg">
                        الهدف الشهري
                    </CardTitle>
                    <div>
                        {/* <button className="rounded-md bg-[#C74D0A] text-white py-2 px-6 text-center">
                            تعيين هدف جديد
                        </button> */}

                        <Dialog>
                            <DialogTrigger asChild>
                                <Button className="rounded-md bg-[#C74D0A] text-white py-2 px-6 text-center hover:bg-[#c74c0ad7]">تعيين هدف جديد</Button>
                            </DialogTrigger>
                            <DialogContent className="w-[600px] border-none rounded-3xl py-28">
                                <DialogHeader>
                                    <DialogTitle className="text-center text-[#5E4D9D] text-xl font-semibold">
                                        الهدف الشهري
                                    </DialogTitle>
                                </DialogHeader>

                                <div className="grid gap-4 py-4">
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="name" className="text-right">
                                            ادخال قيمة الهدف الشهري?
                                        </Label>
                                        <Input
                                            id="name"
                                            defaultValue="Pedro Duarte"
                                            className="col-span-3"
                                        />
                                    </div>
                                </div>

                                <DialogFooter className="flex justify-center items-center gap-4 px-10">
                                    <Button className="flex-1 rounded-md text-[#C74D0A] bg-transparent hover:bg-[#C74D0A] hover:text-white py-2 px-6 text-center border border-[#C74D0A]">الغاء</Button>
                                    <Button type="submit" className="flex-1 rounded-md bg-[#C74D0A] hover:bg-[#C74D0A] text-white py-2 px-6 text-center">تعيين</Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    </div>
                </CardHeader>

                <CardContent className="flex justify-between items-center gap-8 flex-row-reverse">
                    <div className="bg-[#F8F7FD] flex-1 h-14 rounded-md flex items-center justify-around gap-2">
                        <span className="font-bold text-xl">75.000 دولار</span>
                        <p className="text-sm font-normal">اجمالي المبيعات</p>
                    </div>
                    <div className="bg-[#F8F7FD] flex-1 h-14 rounded-md flex items-center justify-around gap-2">
                        <span className="font-bold text-xl">100.000 دولار</span>
                        <p>الهدف الشهري</p>
                    </div>
                    <div className="bg-[#F8F7FD] flex-1 h-14 rounded-md flex items-center justify-around gap-2">
                        <span className="font-bold text-xl">75%</span>
                        <p>نسبة الأنجاز</p>
                    </div>
                </CardContent>
            </Card>
        </>

    )
}

export default MonthlyTarget;