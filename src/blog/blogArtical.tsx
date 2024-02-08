import IonIcon from "@reacticons/ionicons"


const blogArtical = () => {
  return (
    <div className="container mx-auto px-10">
      <div className="text-center">
        <h1 className="">Recent Scientific Publication</h1>
        <p className="">Advancing the frontiers of fundamental research</p>
      </div>
      <div className="grid grid-cols-2 gap-16 my-8">
        <div>
          <img src="https://wallpapercave.com/wp/wp2707503.jpg" alt="" className="h-full" />
          <p className="">Awareness</p>
          <p className="">Stop the next Pandemic? Stop illegal trade!</p>
          <p className=""><a href="">Read Article <IonIcon name="arrow-forward" /></a></p>
        </div>
        <div>
          <img src="https://wallpapercave.com/wp/wp2707510.jpg" alt="" className="h-full" />
        </div>
      </div>
    </div>
  )
}

export default blogArtical