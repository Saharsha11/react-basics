export default function Card() {
    return(
    <div className="bg-gray-100 relative flex items-center justify-center flex-col  group p-11 w-fit h-fit">
        <img src="https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Ronish" className="h-[180px] w-[180px]  rounded-full m-5" ></img>
        <h1 className="m-5">Ronish Shrestha</h1>
        <div className="flex flex-col absolute  bg-[rgb(0,0,0)]/[0.5] top-0 bottom-0 right-0 left-0 items-center justify-center opacity-0 group-hover:opacity-100 p-4 transition-opacity">
            <h1 className="text-white">Ronish Shrestha</h1>
            <h1 className="text-white">Swoyambhu</h1>
            <h1 className="text-white">Age = 20</h1>
        </div>
    </div>
    );
}