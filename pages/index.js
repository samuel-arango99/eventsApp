import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/EventList";

const StartingPage = () => {
  const featuredEvents = getFeaturedEvents();
  console.log(featuredEvents);
  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
};

export default StartingPage;
