import Link from "next/link";

async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')

    if (!res.ok) {
        throw new Error ('Failed to fetch data')
    }
    return res.json()
}



export default async function UsersPage() {
    const users = await getData()
    
    const content = (
        <section>
            <h2>
                <Link href='/'>Back to Home</Link>
            </h2>
            <br/>
            {users.map(user => {
                return (
                    <>
                        <p key={user.id}>
                        <Link href={`/users/${user.id}`}>{user.name}</Link>
                        </p>
                        <br/>
                    </>
                )
            })}
        </section>
    )
  return (
    content
  )
}
