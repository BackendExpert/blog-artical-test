import IonIcon from "@reacticons/ionicons"


const blogArtical = () => {
  return (
    <div className="container mx-auto px-10">
      <div className="text-center my-12">
        <h1 className="text-4xl font-semibold py-2">Recent Scientific Publication</h1>
        <p className="text-xl">Advancing the frontiers of fundamental research</p>
      </div>
      <div className="md:grid grid-cols-2 gap-16 my-8">
        <div className="md:my-0 my-8">
          <img src="https://wallpapercave.com/wp/wp2707503.jpg" alt="" className="h-full rounded" />
          <p className="mt-2 text-sm">Awareness</p>
          <p className="text-2xl">Stop the next Pandemic? Stop illegal trade!</p>
          <p className="text-blue-500"><a href="">Read Article <IonIcon name="arrow-forward" /></a></p>
        </div>
        <div>
          <img src="https://wallpapercave.com/wp/wp2707510.jpg" alt="" className="h-full rounded" />
          <p className="mt-2 text-sm">Awareness</p>
          <p className="text-2xl">The Science of Aji-no-moto</p>
          <p className="text-blue-500"><a href="">Read Article <IonIcon name="arrow-forward" /></a></p>
        </div>
      </div>
      <div className="mt-28">
        <span className="rounded-sm bg-blue-900 text-white">View blog Articles <span className="font-semibold"><IonIcon name="chevron-forward-circle" /></span></span>
      </div>
    </div>
  )
}

export default blogArtical