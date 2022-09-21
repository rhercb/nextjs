import {getEventById, getFeaturedEvents} from "../../helpers/api-util";
import EventSummary from "../../components/EventDetail/event-summary";
import EventLogistics from "../../components/EventDetail/event-logistics";
import EventContent from "../../components/EventDetail/event-content";
import Head from "next/head";

const EventDetailPage = (props) => {
    const event = props.selectedEvent;

    if (!event) {
        return <div className="center">Loading...</div>
    }

    return (
        <>
            <Head>
                <title>{ event.title }</title>
                <meta name="description" content="Next js meta desc"/>
            </Head>
            <EventSummary title={event.title} />
            <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
            <EventContent>
                <p>{ event.description }</p>
            </EventContent>
        </>
    )
}

export async function getStaticProps(context) {
    const { params } = context;
    const eventId = params.eventId;
    const event = await getEventById(eventId);

    return {
        props: {
            selectedEvent: event
        },
        revalidate: 10
    }
}

export async function getStaticPaths() {
    const events = await getFeaturedEvents();
    const paths = events.map(event => ({ params: { eventId: event.id } }))
    return {
        paths: paths,
        fallback: true
    }
}

export default EventDetailPage;