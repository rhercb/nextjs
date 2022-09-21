import { useRouter } from "next/router";

const ClientProjectsPage = () => {
    const router = useRouter();
    const loadProjectHandler = () => {
        // Navigato to page
        // router.push("/clients/ric/proj-a")
        router.push({
            pathname: "/clients/[id]/[clientProjectID]",
            query: { id: "text", clientProjectID: "12345" }
        })
        // Replaces link, cant go back
        // router.replace("/clients/ric/proj-a")
    }

    return (
        <div>
            <h1>Clients projects Gere</h1>
            <button onClick={loadProjectHandler}>Load Project A</button>
        </div>
    )
}

export default ClientProjectsPage;