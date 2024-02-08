import IonIcon from "@reacticons/ionicons"


const blogArtical = () => {
  return (
    <div className="container mx-auto px-16">
        <div className="text-center">
        <h1 className="">Recent Scientific Publication</h1>
        <p className="">Advancing the frontiers of fundamental research</p>
    </div>
    <div className="md:grid md:grid-cols-2 gap-20">
        <div>
            <div className="bg-cover bg-center w-full h-full" style={{backgroundImage:"url('https://www.hdcarwallpapers.com/thumbs/2024/porsche_taycan_2024_4k-t1.jpg')"}}>
            </div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus eaque dignissimos laborum iure aut quaerat, libero, nostrum repudiandae quibusdam dolorem nobis nihil voluptas fugit assumenda iste totam quae pariatur quia!
            <p className="">Awareness</p>
            <p className="">Stop the next pandemic? Stop illegal trade!</p>
            <a href="" className="flex">
                <p>Read Article</p>
                <span className="pt-[3px] pl-2"><IonIcon name="arrow-forward" /></span>
            </a>
        </div>
        <div>
            <div className="bg-cover bg-center w-full h-96" style={{backgroundImage:"url('https://www.hdcarwallpapers.com/thumbs/2024/audi_q7_55_tfsi_quattro_s_line_2024-t1.jpg')"}}>
                hi all
            </div>
            
        </div>        
    </div>



    </div>
  )
}

export default blogArtical