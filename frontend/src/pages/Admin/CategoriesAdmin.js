import React, {useEffect} from "react";
import { HeaderPage } from "../../components/Admin";
import {useCategory} from "../../hooks";


export function CategoriesAdmin() {
    const {categories, error, loading,getCategories} = useCategory();
    console.log(categories);
    useEffect(() => getCategories(), [])
    return (
        <div>
            <HeaderPage title="Categories" btnTitle="Nueva categoria"/>
        </div>
    );
}
