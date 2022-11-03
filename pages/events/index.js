import { Fragment } from "react";
import { useRouter } from "next/router";
import EventList from "../../components/events/EventList";
import EventSearch from "../../components/events/EventSearch";
import { getAllEvents } from "../../dummy-data";

const EventsPage = () => {
  const events = getAllEvents();
  const router = useRouter();

  const onSearchHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };
  return (
    <Fragment>
      <EventSearch onSearch={onSearchHandler} />
      <EventList items={events} />
    </Fragment>
  );
};

export default EventsPage;
