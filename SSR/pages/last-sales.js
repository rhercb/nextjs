import {useEffect, useState} from "react";

function LastSalesPage(props) {
    const [sales, setSales] = useState(props.sales); // Prerendered data for initial state
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        fetch("https://nextjs-course-c6b75-default-rtdb.firebaseio.com/sales.json").then(res => res.json()).then(data => {
                const transformedData = [];

                for (const transformedDataKey in data) {
                    transformedData.push({ id: transformedDataKey, username: data[transformedDataKey].username, volume: data[transformedDataKey].volume })
                }
                setSales(transformedData)
                setIsLoading(false)
            })
    }, [])

    if(!sales && !loading) return <p>Loading...</p>

    return (
        <ul>
            { sales.map((sale) => (
                <li key={sale.id}>{ sale.username } - { sale.volume }</li>)
            )}
        </ul>
    )
}

export async function getStaticProps(context) {
    // Can use fetch, and in getServerSideProps

    return fetch("https://nextjs-course-c6b75-default-rtdb.firebaseio.com/sales.json").then(res => res.json()).then(data => {
        const transformedData = [];

        for (const transformedDataKey in data) {
            transformedData.push({ id: transformedDataKey, username: data[transformedDataKey].username, volume: data[transformedDataKey].volume })
        }

        return {
            props: { sales: transformedData },
            revalidate: 10
        }
    })
}

export default LastSalesPage;