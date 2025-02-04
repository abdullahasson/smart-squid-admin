import Link from "next/link"
import { FaCaretLeft } from "react-icons/fa";
import { MdStorefront } from "react-icons/md";

const Settings = () => {
    return (
        <div className="flex-[4] p-9 flex flex-col gap-12">
            <div className="flex flex-col">
                <div className="w-full mb-6">
                    <h2 className="font-semibold text-xl">الإعدادات</h2>
                </div>

                <div className="w-full bg-white rounded-lg shadow-sm py-16 px-10 flex flex-wrap gap-12 column-2">
                    <div className="flex-1 flex-col flex gap-5">
                        <div className="flex-1">
                            <Link className="border border-[#5E4D9D] text-[#5E4D9D] text-lg rounded-lg py-3 px-4 flex flex-row-reverse items-center justify-between" href="/settings/a">
                                <div className="flex items-center gap-2">
                                    <p className="text-[#5E4D9D] font-semibold text-sm">تصميم</p>
                                    <MdStorefront className="text-2xl" fill="#5E4D9D" />
                                </div>
                                <div>
                                    <FaCaretLeft className="text-2xl" fill="#5E4D9D" />
                                </div>
                            </Link>
                        </div>
                        <div className="flex-1">
                            <Link className="border border-[#5E4D9D] text-[#5E4D9D] text-lg rounded-lg py-3 px-4 flex flex-row-reverse items-center justify-between" href="/settings/b">
                                <div className="flex items-center gap-2">
                                    <p className="text-[#5E4D9D] font-semibold text-sm">تصميم</p>
                                    <MdStorefront className="text-2xl" fill="#5E4D9D" />
                                </div>
                                <div>
                                    <FaCaretLeft className="text-2xl" fill="#5E4D9D" />
                                </div>
                            </Link>
                        </div>
                        <div className="flex-1">
                            <Link className="border border-[#5E4D9D] text-[#5E4D9D] text-lg rounded-lg py-3 px-4 flex flex-row-reverse items-center justify-between" href="/settings/c">
                                <div className="flex items-center gap-2">
                                    <p className="text-[#5E4D9D] font-semibold text-sm">تصميم</p>
                                    <MdStorefront className="text-2xl" fill="#5E4D9D" />
                                </div>
                                <div>
                                    <FaCaretLeft className="text-2xl" fill="#5E4D9D" />
                                </div>
                            </Link>
                        </div>
                        <div className="flex-1">
                            <Link className="border border-[#5E4D9D] text-[#5E4D9D] text-lg rounded-lg py-3 px-4 flex flex-row-reverse items-center justify-between" href="/settings/e">
                                <div className="flex items-center gap-2">
                                    <p className="text-[#5E4D9D] font-semibold text-sm">تصميم</p>
                                    <MdStorefront className="text-2xl" fill="#5E4D9D" />
                                </div>
                                <div>
                                    <FaCaretLeft className="text-2xl" fill="#5E4D9D" />
                                </div>
                            </Link>
                        </div>
                        <div className="flex-1">
                            <Link className="border border-[#5E4D9D] text-[#5E4D9D] text-lg rounded-lg py-3 px-4 flex flex-row-reverse items-center justify-between" href="/settings/d">
                                <div className="flex items-center gap-2">
                                    <p className="text-[#5E4D9D] font-semibold text-sm">تصميم</p>
                                    <MdStorefront className="text-2xl" fill="#5E4D9D" />
                                </div>
                                <div>
                                    <FaCaretLeft className="text-2xl" fill="#5E4D9D" />
                                </div>
                            </Link>
                        </div>
                    </div>


                    <div className="flex-1 flex-col flex gap-5">
                        <div className="flex-1">
                            <Link className="border border-[#5E4D9D] text-[#5E4D9D] text-lg rounded-lg py-3 px-4 flex flex-row-reverse items-center justify-between" href="/settings/design">
                                <div className="flex items-center gap-2">
                                    <p className="text-[#5E4D9D] font-semibold text-sm">تصميم</p>
                                    <MdStorefront className="text-2xl" fill="#5E4D9D" />
                                </div>
                                <div>
                                    <FaCaretLeft className="text-2xl" fill="#5E4D9D" />
                                </div>
                            </Link>
                        </div>
                        <div className="flex-1">
                            <Link className="border border-[#5E4D9D] text-[#5E4D9D] text-lg rounded-lg py-3 px-4 flex flex-row-reverse items-center justify-between" href="/domain-settings">
                                <div className="flex items-center gap-2">
                                    <p className="text-[#5E4D9D] font-semibold text-sm">اعدادات الدومين</p>
                                    <MdStorefront className="text-2xl" fill="#5E4D9D" />
                                </div>
                                <div>
                                    <FaCaretLeft className="text-2xl" fill="#5E4D9D" />
                                </div>
                            </Link>
                        </div>
                        <div className="flex-1">
                            <Link className="border border-[#5E4D9D] text-[#5E4D9D] text-lg rounded-lg py-3 px-4 flex flex-row-reverse items-center justify-between" href="/">
                                <div className="flex items-center gap-2">
                                    <p className="text-[#5E4D9D] font-semibold text-sm">وضع الصيانة</p>
                                    <MdStorefront className="text-2xl" fill="#5E4D9D" />
                                </div>
                                <div>
                                    <FaCaretLeft className="text-2xl" fill="#5E4D9D" />
                                </div>
                            </Link>
                        </div>
                        <div className="flex-1">
                            <Link className="border border-[#5E4D9D] text-[#5E4D9D] text-lg rounded-lg py-3 px-4 flex flex-row-reverse items-center justify-between" href="/">
                                <div className="flex items-center gap-2">
                                    <p className="text-[#5E4D9D] font-semibold text-sm">اعدادت التقييم</p>
                                    <MdStorefront className="text-2xl" fill="#5E4D9D" />
                                </div>
                                <div>
                                    <FaCaretLeft className="text-2xl" fill="#5E4D9D" />
                                </div>
                            </Link>
                        </div>
                        <div className="flex-1">
                            <Link className="border border-[#5E4D9D] text-[#5E4D9D] text-lg rounded-lg py-3 px-4 flex flex-row-reverse items-center justify-between" href="/">
                                <div className="flex items-center gap-2">
                                    <p className="text-[#5E4D9D] font-semibold text-sm">اعدادت الموظفين</p>
                                    <MdStorefront className="text-2xl" fill="#5E4D9D" />
                                </div>
                                <div>
                                    <FaCaretLeft className="text-2xl" fill="#5E4D9D" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings;