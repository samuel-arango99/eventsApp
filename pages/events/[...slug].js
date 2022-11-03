import { useRouter } from "next/router";
import { Fragment } from "react";

import ResultsTitle from "../../components/events/ResultsTitle";
import EventList from "../../components/events/EventList";
import ErrorAlert from "../../components/UI/ErrorAlert";

import { getFilteredEvents } from "../../dummy-data";
import Button from "../../components/UI/Button";

const FilteredEventsPage = () => {
  const router = useRouter();
  const filteredData = router.query.slug;

  if (!filteredData) {
    return <p className="center">Loading...</p>;
  }

  const filteredYear = Number(filteredData[0]);
  const filteredMonth = Number(filteredData[1]);

  if (
    isNaN(filteredYear) ||
    isNaN(filteredMonth) ||
    filteredYear > 2030 ||
    filteredYear < 2021 ||
    filteredMonth < 1 ||
    filteredMonth > 12
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const events = getFilteredEvents({
    year: filteredYear,
    month: filteredMonth,
  });

  if (!events || events.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(filteredYear, filteredMonth - 1);

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={events} />
    </Fragment>
  );
};

export default FilteredEventsPage;
