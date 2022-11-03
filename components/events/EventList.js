import EventItem from "./EventItem";

import classes from "./event-list.module.css";

const EventList = (props) => {
  const { items } = props;
  console.log(items);
  return (
    <ul className={classes.list}>
      {items.map((el) => (
        <EventItem
          key={el.id}
          id={el.id}
          title={el.title}
          location={el.location}
          date={el.date}
          image={el.image}
        />
      ))}
    </ul>
  );
};

export default EventList;
