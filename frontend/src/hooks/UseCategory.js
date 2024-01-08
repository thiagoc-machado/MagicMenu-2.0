import { userState } from "react"

import { getCategoriesApi } from "../api/categories"
import { useState } from 'react'
import { useEffect } from 'react'

export const useCategory = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [categories, setCategories] = useState(null)

    const getCategories = async () => {
        try {
            setLoading(true)
            const response = await getCategoriesApi()
            setLoading(false)
            setCategories(response)
        } catch (error) {
            setLoading(false)
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    return {
        loading,
        error,
        categories,
        getCategories,
    }
}
