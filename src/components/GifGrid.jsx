
import { GifItem } from "./GifItem";
import { useFetchGif } from "../hooks/useFetchGif";

export const GifGrid = ({ category }) => {

    const {image, isLoading} = useFetchGif( category );


    return (
        <>
            <h3> {category} </h3>
            { 
                isLoading && <h2>cargando...</h2>
            }
            <div className="card-grid">
                {
                    image.map( (image) => (
                        <GifItem 
                        key={image.id}
                        { ...image }
                        />
                    ))
                }
            </div>
        </>
    )
}
