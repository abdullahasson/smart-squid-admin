

const LoadHomePage = () => {
    return (
        <div className="flex flex-col">
            <div className="flex-1 h-[94px] bg-red-300">

            </div>

            <div className="flex">
                <div className="flex-[4]">

                </div>

                <div className="flex-1 flex flex-col gap-4">
                    {[1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10].map((item, index) => {
                        return (
                            <div key={index} className="flex w-full h-[48px] bg-gray-300"></div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}

export default LoadHomePage;