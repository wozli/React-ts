import React, {FC} from 'react';
import EventsExample from "../components/EventsExample";
import Card, {CardVariant} from "../components/Card";

const EventPage: FC = () => {
    return (
        <div>
            <h1>Events</h1>
            <EventsExample/>
            <Card width='200px'
                  height='200px'
                  variant={CardVariant.outlined}>
                <button>Press me</button>
            </Card>
        </div>
    );
};

export default EventPage;