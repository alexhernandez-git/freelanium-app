export const getNotificationActivityMessage = (activity, actor) => {
  console.log(activity);
  switch (activity.type) {
    case "OF":
      switch (activity.activity.status) {
        case "PE":
          return "New Offer from " + actor.username;
      }
      break;

    default:
      return "New notification";
  }
};

export const getActivityMessage = (activity__type) => {
  switch (activity__type) {
    case "OFPE":
      return "New Offer";

    default:
      return "";
  }
};

export const getLastMessage = (last_message) => {
  switch (last_message) {
    case "OFPE":
      return "New Offer";

    default:
      return last_message;
  }
};
