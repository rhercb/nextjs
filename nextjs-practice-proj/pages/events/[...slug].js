import {getFilteredEvents} from "../../helpers/api-util";
import EventList from "../../components/Events/EventList";
import ResultsTitle from "../../components/EventDetail/results-title";
import Head from "next/head";

const FilteredEventsPage = (props) => {
    const Header = () => {
        return (
            <Head>
                <title> Filtered Events </title>
                <meta name="description" content={`All events for ${props.date.month} in ${props.date.year}`}/>
            </Head>
        )
    }
    if (props.hasError) {
        return (
            <>
                <Header/>
                <p>Error</p>
            </>
        )
    }

    const filteredEvents = props.events;

    const date = new Date(props.date.year, props.date.month - 1)
    return (
        <>
            <Header/>
            <ResultsTitle date={date}/>
            <EventList items={filteredEvents} />
        </>
    )
}

export async function getServerSideProps(context) {
    const { params } = context;
    const filteredData = params.slug;

    const filteredYear = +filteredData[0];
    const filteredMonth = +filteredData[1];

    if (isNaN(filteredYear) || isNaN(filteredMonth) || filteredYear > 2030 || filteredYear < 2021 || filteredMonth < 1 || filteredMonth > 12) {
        return {
            props: { hasError: true }
        }
    }

    const filteredEvents = await getFilteredEvents({
        year: filteredYear,
        month: filteredMonth
    })

    return {
        props: {
            events: filteredEvents,
            date: {
                year: filteredYear,
                month: filteredMonth
            }
        }
    }
}

export default FilteredEventsPage;