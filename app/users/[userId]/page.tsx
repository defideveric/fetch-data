import React from "react";
import Link from "next/link";

const Params = {
    params: {
        userId: ''
    }
}

async function getUser(userId: string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)

    if(!res.ok) throw new Error('Failed to fetch data')
    
    return res.json()
}


export default function UserPage({ params: {userId} }) {
  return (
    <div>page</div>
  )
}
