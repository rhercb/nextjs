import Head from "next/head";
import {getFeaturedEvents} from "../helpers/api-util";
import EventList from "../components/Events/EventList";

const HomePage = (props) => {
    return (
        <div>
            <Head>
                <title>Next JS Events</title>
                <meta name="description" content="Next js meta desc"/>
            </Head>
            <EventList items={props.events}/>
        </div>
    )
}

export async function getStaticProps() {
    const featuredEvents = await getFeaturedEvents();
    return {
        props: {
            events: featuredEvents
        },
        revalidate: 10
    }
}

export default HomePage;