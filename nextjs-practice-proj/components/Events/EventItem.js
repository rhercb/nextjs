import Image from "next/image";
import classes from "./EventItem.module.css";
import Button from "../ui/Button/Button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";

const EventItem = (props) => {
    const { title, img, date, location, id } = props;

    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const formattedAddress = location.replace(", ", "\n");
    const exploreLink = `/events/${id}`;

    return (
        <li className={classes.item}>
            <Image src={'/' + img} alt={title} width={250} height={160} />
            <div className={classes.content}>
                <div>
                    <h2>{ title }</h2>
                    <div className={classes.date}>
                        <DateIcon/>
                        <time>{ humanReadableDate }</time>
                    </div>
                    <div className={classes.address}>
                        <AddressIcon/>
                        <address>{ formattedAddress }</address>
                    </div>
                </div>
                <div className={classes.actions}>
                    <Button link={exploreLink}>
                        <span>Explore event</span>
                        <span className={classes.icon}><ArrowRightIcon/></span>
                    </Button>
                </div>
            </div>
        </li>
    )
}

export default EventItem