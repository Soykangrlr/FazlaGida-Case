function Card({item}) {
  return (
    <div class="flex gap-x-4 w-full p-3 items-center bg-light-card-color hover:scale-105 hover:cursor-pointer  rounded-lg  max-w-md  ">
    <img class="object-cover w-[100px] h-full " src={item.image[1]['#text']} alt="" />
    <div class="leading-normal w-full ">
   
      <div className="flex flex-col md:flex-row items-center  justify-between">
        <div>
          <h1 className="text-sm text-center font-bold">{item.name}</h1>
        </div>
        <div className="text-xs flex text-center flex-col gap-y-1 md:gap-y-2">
          {item.listeners &&   <p ><span className="text-orange-400">listeners:</span> {item.listeners}</p>}
          <p><span className="text-yellow-400">playcount:</span> {item.playcount}</p>
        </div>
      </div>
    </div>
  </div>
  )
}
export default Card