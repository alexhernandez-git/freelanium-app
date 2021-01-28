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
