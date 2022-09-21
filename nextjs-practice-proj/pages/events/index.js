import {getAllEvents} from "../../dummy-data";
import EventList from "../../components/Events/EventList";
import EventsSearch from "../../components/Events/EventsSearch";
import {useRouter} from "next/router";
import Head from "next/head";

const EventsPage = (props) => {
    const { events } = props;
    const router = useRouter();

    const searchHandler = (year, month) => {
        const fullPath = `/events/${year}/${month}`;
        router.push(fullPath)
    }

    return (
        <>
            <Head>
                <title>All events</title>
                <meta name="description" content="Next js meta desc"/>
            </Head>
            <EventsSearch onSearch={searchHandler}/>
            <EventList items={events}/>
        </>
    )
}

export async function getStaticProps() {
    const events = await getAllEvents()

    return {
        props: {
            events: events
        },
        revalidate: 60
    }
}

export default EventsPage;