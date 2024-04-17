"use client"

import getIds from "@/actions/get-ids"
import { useEffect } from "react"

export default function Favorites() {
    useEffect(() => {
        getIds().then(ids => console.log(ids))
    },[])

    return null
}