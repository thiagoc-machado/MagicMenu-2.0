import { userState } from "react";

import { getCategoriesApi, addategoryApi } from "../api/categories";
import { useState } from "react";
import { useEffect } from "react";
import { useAuth } from "./";
import { set } from "lodash";

export const useCategory = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [categories, setCategories] = useState(null);
    const { auth } = useAuth();

    const getCategories = async () => {
        try {
            setLoading(true);
            const response = await getCategoriesApi();
            setLoading(false);
            setCategories(response);
        } catch (error) {
            setLoading(false);
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    const addCategory = async (data) => {
        try {
            setLoading(true);
            await addategoryApi(data, auth.token);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    };

    return {
        loading,
        error,
        categories,
        getCategories,
        addCategory,
    };
};
