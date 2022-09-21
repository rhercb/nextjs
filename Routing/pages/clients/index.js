import Link from "next/link";

const ClientsPage = () => {
    const clients = [
        { id: "ric", name: "Ricards" },
        { id: "linc", name: "Lincis" }
    ]
    return (
        <div>
            <h1>Clients page</h1>
            <ul>
                <li>
                    <Link href="/client/test">Test</Link>
                </li>
                <li>
                    <Link href="/client/ola-1">Ola 1</Link>
                </li>
            </ul>
            <ul>
                { clients.map((client) => (
                    <li key={client.id}>
                        <Link href={{
                            pathname: '/clients/[id]',
                            query: {
                                id: client.id
                            }
                        }}>{ client.name }</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ClientsPage;