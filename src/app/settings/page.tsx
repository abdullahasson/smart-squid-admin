// Next
import Link from "next/link"
// React Icons
import { FaCaretLeft , FaCheck } from "react-icons/fa";
import { MdStorefront } from "react-icons/md";
import { LuWallet , LuImport } from "react-icons/lu";
import { PiExportBold , PiLinkSimpleBold } from "react-icons/pi";
import { TbInputSearch } from "react-icons/tb";
import { AiFillTool } from "react-icons/ai";
import { RiUserSettingsLine } from "react-icons/ri";
import { SiInternetcomputer } from "react-icons/si";

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
                            <Link className="border border-[#5E4D9D] text-[#5E4D9D] text-lg rounded-lg py-3 px-4 flex flex-row-reverse items-center justify-between" href="/settings">
                                <div className="flex items-center gap-2">
                                    <p className="text-[#5E4D9D] font-semibold text-sm">المحفظة</p>
                                    <LuWallet className="text-2xl text-[#5E4D9D]" />
                                </div>
                                <div>
                                    <FaCaretLeft className="text-2xl" fill="#5E4D9D" />
                                </div>
                            </Link>
                        </div>
                        <div className="flex-1">
                            <Link className="border border-[#5E4D9D] text-[#5E4D9D] text-lg rounded-lg py-3 px-4 flex flex-row-reverse items-center justify-between" href="/settings">
                                <div className="flex items-center gap-2">
                                    <p className="text-[#5E4D9D] font-semibold text-sm">قوالب التصدير</p>
                                    <PiExportBold className="text-2xl text-[#5E4D9D]" />
                                </div>
                                <div>
                                    <FaCaretLeft className="text-2xl" fill="#5E4D9D" />
                                </div>
                            </Link>
                        </div>
                        <div className="flex-1">
                            <Link className="border border-[#5E4D9D] text-[#5E4D9D] text-lg rounded-lg py-3 px-4 flex flex-row-reverse items-center justify-between" href="/settings">
                                <div className="flex items-center gap-2">
                                    <p className="text-[#5E4D9D] font-semibold text-sm">روابط مخصصة</p>
                                    <PiLinkSimpleBold className="text-2xl text-[#5E4D9D]" />
                                </div>
                                <div>
                                    <FaCaretLeft className="text-2xl" fill="#5E4D9D" />
                                </div>
                            </Link>
                        </div>
                        <div className="flex-1">
                            <Link className="border border-[#5E4D9D] text-[#5E4D9D] text-lg rounded-lg py-3 px-4 flex flex-row-reverse items-center justify-between" href="/settings">
                                <div className="flex items-center gap-2">
                                    <p className="text-[#5E4D9D] font-semibold text-sm">تحسين محركات البحث</p>
                                    <TbInputSearch className="text-2xl text-[#5E4D9D]" />
                                </div>
                                <div>
                                    <FaCaretLeft className="text-2xl" fill="#5E4D9D" />
                                </div>
                            </Link>
                        </div>
                        <div className="flex-1">
                            <Link className="border border-[#5E4D9D] text-[#5E4D9D] text-lg rounded-lg py-3 px-4 flex flex-row-reverse items-center justify-between" href="/settings">
                                <div className="flex items-center gap-2">
                                    <p className="text-[#5E4D9D] font-semibold text-sm">استيراد البيانات</p>
                                    <LuImport className="text-2xl text-[#5E4D9D]" />
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
                                    <MdStorefront className="text-2xl text-[#5E4D9D]" />
                                </div>
                                <div>
                                    <FaCaretLeft className="text-2xl" fill="#5E4D9D" />
                                </div>
                            </Link>
                        </div>
                        <div className="flex-1">
                            <Link className="border border-[#5E4D9D] text-[#5E4D9D] text-lg rounded-lg py-3 px-4 flex flex-row-reverse items-center justify-between" href="/settings/domain">
                                <div className="flex items-center gap-2">
                                    <p className="text-[#5E4D9D] font-semibold text-sm">اعدادات الدومين</p>
                                    <SiInternetcomputer className="text-2xl text-[#5E4D9D]" />
                                </div>
                                <div>
                                    <FaCaretLeft className="text-2xl" fill="#5E4D9D" />
                                </div>
                            </Link>
                        </div>
                        <div className="flex-1">
                            <Link className="border border-[#5E4D9D] text-[#5E4D9D] text-lg rounded-lg py-3 px-4 flex flex-row-reverse items-center justify-between" href="/settings/maintenance-mode">
                                <div className="flex items-center gap-2">
                                    <p className="text-[#5E4D9D] font-semibold text-sm">وضع الصيانة</p>
                                    
                                    <AiFillTool className="text-2xl text-[#5E4D9D]" />
                                </div>
                                <div>
                                    <FaCaretLeft className="text-2xl" fill="#5E4D9D" />
                                </div>
                            </Link>
                        </div>
                        <div className="flex-1">
                            <Link className="border border-[#5E4D9D] text-[#5E4D9D] text-lg rounded-lg py-3 px-4 flex flex-row-reverse items-center justify-between" href="/settings/evaluation">
                                <div className="flex items-center gap-2">
                                    <p className="text-[#5E4D9D] font-semibold text-sm">اعدادت التقييم</p>
                                    <FaCheck className="text-2xl text-[#5E4D9D]" />
                                </div>
                                <div>
                                    <FaCaretLeft className="text-2xl" fill="#5E4D9D" />
                                </div>
                            </Link>
                        </div>
                        <div className="flex-1">
                            <Link className="border border-[#5E4D9D] text-[#5E4D9D] text-lg rounded-lg py-3 px-4 flex flex-row-reverse items-center justify-between" href="/settings/employees">
                                <div className="flex items-center gap-2">
                                    <p className="text-[#5E4D9D] font-semibold text-sm">اعدادت الموظفين</p>
                                    <RiUserSettingsLine className="text-2xl text-[#5E4D9D]" />
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