import React from "react";
import CategoriesGames from "./CategoriesGames";
import CategoriesTrend from "./CategoriesTrend";

const Categories = () => {



    return(
        <div className="category-container">
            <CategoriesTrend />
            <div className="divition-line"></div>
            <CategoriesGames />
        </div>

        
    )   

}

export default Categories

