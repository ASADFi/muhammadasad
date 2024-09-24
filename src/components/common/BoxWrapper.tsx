export default function BoxWrapper({ title, icon } : { title: string, icon: string }) {
    return (
        <div className="py-12 md:py-16 px-3 sm:px-6 bg-gray-text/25 rounded sm:rounded-lg w-[150px] sm:w-[220px]">
            <div className="flex flex-col gap-6 sm:gap-8 group text-center">
                <div className="size-9 sm:size-12 mx-auto">
                    <img src={icon} alt="" className="w-full h-full object-contain"/>
                </div>
                <h4 className="text-lg mb-2 xl:text-2xl font-medium">{title}</h4>
                {/*<p className="text-gray-text text-base xl:text-lg">{value.description}</p>*/}
                {/*<div className="flex gap-3 items-center">*/}
                {/*    <div className="flex-1 h-2 bg-white rounded-lg">*/}
                {/*        <div className="bg-primary rounded-lg h-full" style={{ width: `${value.rating}%` }}></div>*/}
                {/*    </div>*/}
                {/*    <div>{value.rating}%</div>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}
