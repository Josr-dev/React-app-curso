import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([""]);

    const onAddCategory = (nuevaCategoria) => {
        if (categories.includes(nuevaCategoria)) return;
        setCategories([nuevaCategoria, ...categories])

    }

    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory
                // setCategories={ setCategories }
                onNewCategory={onAddCategory}
            />

            {/* Listado */}
            {
                categories.map(category => (
                    <GifGrid
                        key={category}
                        category={category} />
                ))
            }
        </>
    )
}

