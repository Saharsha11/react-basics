function Grid() {
    return (
        <div>
            <div className="grid grid-cols-6 gap-2">
                <div className="h-28  bg-primary-50"></div>
                <div className="h-28  bg-blue-500"></div>
                <div className="bg-green-400 "></div>
                <div className=" bg-secondary-100 row-span-2"></div>
                <div className="h-28 bg-blue-500 col-span-2"></div>
                <div className="h-28 bg-green-400"></div>
                <div className="h-28 bg-primary-100"></div>
                <div className=" bg-blue-500 row-span-2"></div>
                <div className="h-28 bg-green-400"></div>
                <div className="h-28 bg-orange-500 row"></div>
                <div className="h-28 bg-blue-500"></div>
                <div className="h-28 bg-primary-50"></div>
                <div className="h-28 bg-orange-500"></div>
                <div className="h-28 bg-violet-500"></div>
                <div className="h-28 bg-slate-700"></div>
                <div className="h-28 bg-orange-500"></div>
                <div className="h-28 bg-third col-span-3"></div>
                <div className="h-28  bg-red-500"></div>
                <div className="h-28  bg-secondary-100"></div>
                <div className="bg-green-400"></div>
            </div>
        </div>
    );
}
export default Grid;