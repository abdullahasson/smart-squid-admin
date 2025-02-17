// Home data
// Overview data type
export interface Overview {
    month: string;
    desktop: number;
}
export const overview: Overview[] = [
    { month: "January", desktop: 186 },
    { month: "February", desktop: 305 },
    { month: "March", desktop: 237 },
    { month: "April", desktop: 73 },
    { month: "May", desktop: 209 },
    { month: "June", desktop: 214 },
]


export interface TotalSales {
    date: string,
    finished: number,
    inProgress: number      
}
export const totalSales: TotalSales[] = [
    { date: "2024-05-01", finished: 210, inProgress: 160 },
    { date: "2024-05-02", finished: 120, inProgress: 190 },
    { date: "2024-05-03", finished: 180, inProgress: 130 },
    { date: "2024-05-04", finished: 250, inProgress: 270 },
    { date: "2024-05-05", finished: 390, inProgress: 300 },
    { date: "2024-05-06", finished: 310, inProgress: 350 },
    { date: "2024-05-07", finished: 240, inProgress: 200 },
    { date: "2024-05-08", finished: 420, inProgress: 330 },
    { date: "2024-05-09", finished: 70,  inProgress: 120 },
    { date: "2024-05-10", finished: 270, inProgress: 200 },
    { date: "2024-05-11", finished: 330, inProgress: 360 },
    { date: "2024-05-12", finished: 300, inProgress: 220 },
    { date: "2024-05-13", finished: 350, inProgress: 390 },
    { date: "2024-05-14", finished: 140, inProgress: 230 },
    { date: "2024-05-15", finished: 130, inProgress: 180 },
    { date: "2024-05-16", finished: 150, inProgress: 200 },
    { date: "2024-05-17", finished: 460, inProgress: 370 },
    { date: "2024-05-18", finished: 370, inProgress: 420 },
    { date: "2024-05-19", finished: 250, inProgress: 190 },
    { date: "2024-05-20", finished: 100, inProgress: 160 },
    { date: "2024-05-21", finished: 140, inProgress: 210 },
    { date: "2024-05-22", finished: 230, inProgress: 180 },
    { date: "2024-05-23", finished: 150, inProgress: 240 },
    { date: "2024-05-24", finished: 400, inProgress: 300 },
    { date: "2024-05-25", finished: 220, inProgress: 260 },
    { date: "2024-05-26", finished: 80,  inProgress: 140 },
    { date: "2024-05-27", finished: 390, inProgress: 430 },
    { date: "2024-05-28", finished: 130, inProgress: 190 },
    { date: "2024-05-29", finished: 320, inProgress: 250 },
    { date: "2024-05-30", finished: 460, inProgress: 390 },
]

export const dailyMeetings = [
    {day: "" , subject: "", time: "", place: "", clientName: "", note: "" },
    { day: 1, subject: "", time: "", place: "", clientName: "", note: "" },
    { day: 2, subject: "اجتماع مع فريق التطوير", time: "10:00 AM", place: "قاعة الاجتماعات", clientName: "فريق التطوير", note: "مناقشة التقدم في المشروع" },
    { day: 3, subject: "", time: "", place: "", clientName: "", note: "" },
    { day: 4, subject: "مراجعة المشروع الحالي مع العميل", time: "11:00 AM", place: "مكتب الشركة", clientName: "أحمد سعيد", note: "مناقشة المراجعة الأخيرة على التصميم" },
    { day: 5, subject: "", time: "", place: "", clientName: "", note: "" },
    { day: 6, subject: "", time: "", place: "", clientName: "", note: "" },
    { day: 7, subject: "", time: "", place: "", clientName: "", note: "" },
    { day: 8, subject: "", time: "", place: "", clientName: "", note: "" },
    { day: 9, subject: "", time: "", place: "", clientName: "", note: "" },
    { day: 10, subject: "", time: "", place: "", clientName: "", note: "" },
    { day: 11, subject: "", time: "", place: "", clientName: "", note: "" },
    { day: 12, subject: "اجتماع مع فريق التسويق", time: "9:00 AM", place: "قاعة الاجتماعات", clientName: "فريق التسويق", note: "تخطيط الحملة القادمة" },
    { day: 13, subject: "", time: "", place: "", clientName: "", note: "" },
    { day: 14, subject: "", time: "", place: "", clientName: "", note: "" },
    { day: 15, subject: "", time: "", place: "", clientName: "", note: "" },
    { day: 16, subject: "", time: "", place: "", clientName: "", note: "" },
    { day: 17, subject: "عرض تقديمي للعميل الجديد", time: "2:00 PM", place: "فندق جراند", clientName: "شركة التقنية الحديثة", note: "تحضير العرض التقديمي" },
    { day: 18, subject: "", time: "", place: "", clientName: "", note: "" },
    { day: 19, subject: "", time: "", place: "", clientName: "", note: "" },
    { day: 20, subject: "", time: "", place: "", clientName: "", note: "" },
    { day: 21, subject: "", time: "", place: "", clientName: "", note: "" },
    { day: 22, subject: "", time: "", place: "", clientName: "", note: "" },
    { day: 23, subject: "اجتماع مع فريق الجودة", time: "10:00 AM", place: "قاعة الاجتماعات", clientName: "فريق الجودة", note: "مراجعة معايير الجودة" },
    { day: 24, subject: "", time: "", place: "", clientName: "", note: "" },
    { day: 25, subject: "", time: "", place: "", clientName: "", note: "" },
    { day: 26, subject: "", time: "", place: "", clientName: "", note: "" },
    { day: 27, subject: "", time: "", place: "", clientName: "", note: "" },
    { day: 28, subject: "اجتماع مع فريق الدعم الفني", time: "3:00 PM", place: "قاعة الاجتماعات", clientName: "فريق الدعم الفني", note: "تحسين خدمات العملاء" },
    { day: 29, subject: "", time: "", place: "", clientName: "", note: "" },
    { day: 30, subject: "", time: "", place: "", clientName: "", note: "" },
    { day: 31, subject: "", time: "", place: "", clientName: "", note: "" },
    {day: "" , subject: "", time: "", place: "", clientName: "", note: "" },
    {day: "" , subject: "", time: "", place: "", clientName: "", note: "" },
    {day: "" , subject: "", time: "", place: "", clientName: "", note: "" },
];


// Meetings data
export interface Meetings {
    clientName: string;
    subject: string;
    date: string; // Time string
    status: string;
    email: string;
    phone: string;
}
export const meetings: Meetings[] = [
    {
        clientName: "خالد علي",
        subject: "تحديث حول المشروع",
        date: "3:00pm",
        status: "قيد التنفيذ",
        email: "khaled.ali@gmail.com",
        phone: "01345678901",
    },
    {
        clientName: "محمد محمد",
        subject: "مراجعة خطة العمل",
        date: "6:00pm",
        status: "قيد التنفيذ",
        email: "laila.hassan@gmail.com",
        phone: "01678901234",
    },
    {
        clientName: "ليلى حسن",
        subject: "مراجعة خطة العمل",
        date: "6:00pm",
        status: "قيد التنفيذ",
        email: "laila.hassan@gmail.com",
        phone: "01678901234",
    },
    {
        clientName: "سلمان فهد",
        subject: "تقييم الأداء",
        date: "7:00pm",
        status: "قيد التنفيذ",
        email: "salman.fahd@gmail.com",
        phone: "01789012345",
    },
]


// Orders data
export interface Orders {
    clientName: string;
    orderPrice: number;
}
export const orders: Orders[] = [
    {
        clientName: "محمد سعيد",
        orderPrice: 300,
    },
    {
        clientName: "فاطمة الزهراء",
        orderPrice: 450,
    },
    {
        clientName: "علي حسن",
        orderPrice: 150,
    },
    {
        clientName: "سارة محمد",
        orderPrice: 600,
    },
    {
        clientName: "يوسف عبد الله",
        orderPrice: 200,
    },
    {
        clientName: "ليلى أحمد",
        orderPrice: 350,
    },
    {
        clientName: "خالد علي",
        orderPrice: 400,
    },
    {
        clientName: "نورة محمد",
        orderPrice: 250,
    },
    {
        clientName: "سلمان فهد",
        orderPrice: 500,
    },
    {
        clientName: "منى يوسف",
        orderPrice: 700,
    },
]


// Cients data
export interface Clients {
    clientName: string;
    ordersNumber: number;
    paymentTotal: number;
    meetings: number;
}
export const clients: Clients[] = [
    {
        clientName: "محمد سعيد",
        ordersNumber: 15,
        paymentTotal: 750,
        meetings: 5,
    },
    {
        clientName: "فاطمة الزهراء",
        ordersNumber: 30,
        paymentTotal: 1500,
        meetings: 8,
    },
    {
        clientName: "علي حسن",
        ordersNumber: 10,
        paymentTotal: 500,
        meetings: 2,
    },
    {
        clientName: "سارة محمد",
        ordersNumber: 25,
        paymentTotal: 1250,
        meetings: 6,
    },
    {
        clientName: "يوسف عبد الله",
        ordersNumber: 18,
        paymentTotal: 900,
        meetings: 4,
    },
    {
        clientName: "ليلى أحمد",
        ordersNumber: 12,
        paymentTotal: 600,
        meetings: 3,
    },
    {
        clientName: "خالد علي",
        ordersNumber: 20,
        paymentTotal: 1000,
        meetings: 7,
    },
    {
        clientName: "نورة محمد",
        ordersNumber: 8,
        paymentTotal: 400,
        meetings: 1,
    },
    {
        clientName: "سلمان فهد",
        ordersNumber: 14,
        paymentTotal: 700,
        meetings: 2,
    },
    {
        clientName: "منى يوسف",
        ordersNumber: 16,
        paymentTotal: 800,
        meetings: 5,
    },
]


// Products data
export interface Products {
    productName: string;
    productPrice: number;
    productStatus: string;
}
export const products: Products[] = [
    {
        productName: "منتج أ",
        productPrice: 520,
        productStatus: "متوفر",
    },
    {
        productName: "منتج ب",
        productPrice: 603,
        productStatus: "غير متوفر",
    },
    {
        productName: "منتج ج",
        productPrice: 250,
        productStatus: "متوفر",
    },
    {
        productName: "منتج د",
        productPrice: 550,
        productStatus: "متوفر",
    },
    {
        productName: "منتج هـ",
        productPrice: 320,
        productStatus: "غير متوفر",
    },
    {
        productName: "منتج و",
        productPrice: 780,
        productStatus: "متوفر",
    },
    {
        productName: "منتج ز",
        productPrice: 450,
        productStatus: "متوفر",
    },
    {
        productName: "منتج ح",
        productPrice: 900,
        productStatus: "غير متوفر",
    },
    {
        productName: "منتج ط",
        productPrice: 150,
        productStatus: "متوفر",
    },
    {
        productName: "منتج ي",
        productPrice: 670,
        productStatus: "متوفر",
    },
]


// Reports data
export interface Reports {
    month: string;
    income: number; // Income
    expenses: number; // Expenses
}

export const reports: Reports[] = [
    { month: "يناير", income: 186, expenses: 80 },
    { month: "فبراير", income: 305, expenses: 200 },
    { month: "مارس", income: 237, expenses: 120 },
    { month: "أبريل", income: 73, expenses: 190 },
    { month: "مايو", income: 209, expenses: 130 },
    { month: "يونيو", income: 214, expenses: 140 },
    { month: "يوليو", income: 199, expenses: 120 },
    { month: "أغسطس", income: 187, expenses: 100 },
    { month: "سبتمبر", income: 209, expenses: 120 },
    { month: "أكتوبر", income: 190, expenses: 120 },
    { month: "نوفمبر", income: 186, expenses: 80 },
    { month: "ديسمبر", income: 186, expenses: 80 },
];

// Application Interface / End Points
export interface ApplicationInterfaceEndPoints {
    apiName: string;
    description: string;
    wayToAccess: string;
    apiUrl: string;
    active: boolean;

}
export const applicationInterfacesEndPoints: ApplicationInterfaceEndPoints[] = [
    {
        apiName: "A",
        description: "endpoints",
        wayToAccess: "GET",
        apiUrl: "www.example.com",
        active: true
    },
    {
        apiName: "test",
        description: "endpoints",
        wayToAccess: "POST",
        apiUrl: "www.example.com",
        active: false
    },
]


export interface ApplicationInterfaceWebhooks {
    apiName: string;
    description: string;
    wayToAccess: string;
    apiUrl: string;
    active: boolean;

}
export const applicationInterfacesWebhooks: ApplicationInterfaceWebhooks[] = [
    {
        apiName: "A",
        description: "Webhooks",
        wayToAccess: "GET",
        apiUrl: "www.example.com",
        active: true
    },
    {
        apiName: "test",
        description: "Webhooks",
        wayToAccess: "POST",
        apiUrl: "www.example.com",
        active: false
    },
]



// Marketing Tools / offers
export interface MarketingToolsOffers {
    offerName: string;
    discountType: string;
    startDate: string;
    endDate: string;    
    targetGroup: string;
}
export const marketingToolsOffers: MarketingToolsOffers[] = [
    {
        offerName: "العروض الأولى",
        discountType: "تخفيف المبلغ",
        startDate: "2024-05-01",
        endDate: "2024-05-31",
        targetGroup: "المجموعات المحددة",
    },
    {
        offerName: "عروض الصيف",
        discountType: "نسبة مئوية",
        startDate: "2024-06-01",
        endDate: "2024-06-30",
        targetGroup: "جميع العملاء",
    }
]

//  Marketing Tools / coupons
export interface MarketingToolsCoupons {
    coupons: string;
    value: string;
    usage: string;
    endData: string;
}
export const marketingToolsCoupons: MarketingToolsCoupons[] = [
    {
        coupons: "D12DB",
        value: "30%",
        usage: "3",
        endData: "30/12/2024"
    },
    {
        coupons: "A12DB",
        value: "50%",
        usage: "5",
        endData: "30/12/2024"
    }
]


// Marketing Tools / advertising
export interface MarketingToolsAdvertising {
    name: string;
    status: string;
    goals: string;
}
export const marketingToolsAdvertising: MarketingToolsAdvertising[] = [
    {
        name: "D12DB",
        status: "مكتملة",
        goals: "زيارة الموقع"
    },
    {
        name: "D12DB",
        status: "نشطة",
        goals: "تسجيل العملاء"
    }
]


// Setting / domain
export interface SettingDomain {
    type: string;
    value: string;
    lastEdited: string;
}

export const settingDomain: SettingDomain[] = [
    { type: "A", value: "192.162.1.1", lastEdited: "2024-11-30 14:00:00" },
    { type: "CNAME", value: "example.com", lastEdited: "2024-10-25 09:15:00" },
    { type: "MX", value: "mail.example.com", lastEdited: "2024-09-20 16:45:00" },
];

// Settings / Employees
export interface SettingEmployees {
    fullName: string;
    jobTitle: string;
    email: string;
    joiningDate: string;
    status: string;
}
export const settingEmployees: SettingEmployees[] = [
    {
        fullName: "علي حسن",
        jobTitle: "مهندس برمجيات",
        email: "ali@example.com",
        joiningDate: "15/03/2022",
        status: "نشط"
    },
    {
        fullName: "فاطمة خالد",
        jobTitle: "محاسبة",
        email: "fatima@example.com",
        joiningDate: "10/07/2021",
        status: "غير نشط"
    },
    {
        fullName: "يوسف أحمد",
        jobTitle: "مدير تسويق",
        email: "youssef@example.com",
        joiningDate: "22/09/2023",
        status: "نشط"
    },
    {
        fullName: "ليلى محمود",
        jobTitle: "مصممة جرافيك",
        email: "laila@example.com",
        joiningDate: "05/05/2020",
        status: "نشط"
    },
]