function UserIdPage(props) {
    return <h1>{ props.id }</h1>
}

export default UserIdPage;

export async function getServerSideProps(context) {
    // pre-generates pages on each request
    // We dont ned getStaticPath for SSR with dynamic pages
    // Request is run every time, that why we dont ned getStaticPath
    const { params } = context;
    const userId = params.uid;
    return {
        props: {
            id: userId
        }
    }
}