// const ReusableCard = () =>{
//     return (
//         <div>Hello first card</div>
//     );
// }
// export default ReusableCard;

export default function ReusableCard({name,address,age,image}){
    return(
    <div className="bg-gray-100 relative flex items-center justify-center flex-col  group p-11 w-fit h-fit">
        <img src= {image} alt="Ronish" className="h-[180px] w-[180px]  rounded-full m-5" ></img>
        <h1 className="m-5">{name}</h1>
        <div className="flex flex-col absolute  bg-[rgb(0,0,0)]/[0.5] top-0 bottom-0 right-0 left-0 items-center justify-center opacity-0 group-hover:opacity-100 p-4 transition-opacity">
            <h1 className="text-white">{name}</h1>
            <h1 className="text-white">{address}</h1>
            <h1 className="text-white">{age}</h1>
        </div>
    </div>
    );
}