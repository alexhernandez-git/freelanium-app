export const getNotificationActivityMessage = (activity, actor) => {
  console.log(activity);
  switch (activity.type) {
    case "OF":
      switch (activity.activity.status) {
        case "PE":
          return "New Offer from " + actor.username;
      }
      switch (activity.activity.status) {
        case "AC":
          return "Offer Accepted";
      }
    case "DE":
      switch (activity.activity.status) {
        case "PE":
          return "Order delivered by " + actor.username;
      }
      switch (activity.activity.status) {
        case "AC":
          return "Offer Accepted";
      }
    case "RE":
      return `Revision request`;
    case "CA":
      switch (activity.activity.status) {
        case "PE":
          return "Cancelation order requested by " + actor.username;
        case "AC":
          return "Order cancelled";
        case "CA":
          return "Order not cancelled";
      }
    default:
      return "New notification";
  }
};

export const getActivityMessage = (activity__type) => {
  switch (activity__type) {
    case "OFPE":
      return "New Offer";
    case "OFAC":
      return "Offer Accepted";
    case "DEPE":
      return "Order delivered";
    case "CAPE":
      return "Cancelation order requested";
    case "CAAC":
      return "Order cancelled";
    case "CACA":
      return "Order not cancelled";
    case "RE":
      return "Revision request";
    default:
      return "";
  }
};

export const getLastMessage = (last_message) => {
  switch (last_message) {
    case "OFPE":
      return "New Offer";
    case "OFAC":
      return "Offer Accepted";
    case "DEPE":
      return "Order delivered";
    case "CAPE":
      return "Cancelation order requested";
    case "CAAC":
      return "Order cancelled";
    case "CACA":
      return "Order not cancelled";
    case "RE":
      return "Revision request";
    default:
      return last_message;
  }
};
