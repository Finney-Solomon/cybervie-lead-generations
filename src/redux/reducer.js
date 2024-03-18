import {
  OPEN_CLOSE_REGISTRATION,
  SET_USERS_DATA,
  SWITCH_TAB,
  LOAD_CONTENT,
  UPDATE_URL,
  UPDATE_SEARCH_VALUE,
  UPDATE_SEARCH_RESULTS,
  OPEN_SNACKBAR_NOTIFICATION,
  CLOSE_SNACKBAR_NOTIFICATION,
} from "./actions";

const initialState = {
  user: {},
  registration: false,
  requestOtp: true,
  users: [],
  notification: false,
  notificationData: "",
  mobileView: false,

  snackBarNotification: {
    isOpen: false,
    notificationType: "", // error, success ,warning etc.
    notificationMessage: "",
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_CLOSE_REGISTRATION:
      return {
        ...state,
        registration: action.payload,
      };

    case SET_USERS_DATA:
      const seenEmails = new Set();
      const uniqueObjects = [];

      for (const obj of action?.payload) {
        const email = obj.email;
        if (!seenEmails.has(email)) {
          seenEmails.add(email);
          uniqueObjects.push(obj);
        }
      }

      return {
        ...state,
        users: uniqueObjects,
      };

    case SWITCH_TAB:
      return {
        ...state,
        currentTabIndex: action.payload,
      };

    case LOAD_CONTENT:
      const updatedTabsContent = [...state.tabs];
      if (updatedTabsContent[action.payload.tabIndex]) {
        updatedTabsContent[action.payload.tabIndex].url = action.payload.url;
      }
      return {
        ...state,
        tabs: updatedTabsContent,
      };
    case UPDATE_URL:
      const updatedTabsUrl = [...state.tabs];
      if (updatedTabsUrl[action.payload.tabIndex]) {
        updatedTabsUrl[action.payload.tabIndex].url = action.payload.url;
      }
      return {
        ...state,
        tabs: updatedTabsUrl,
      };

    case UPDATE_SEARCH_VALUE:
      const updateTabSearchQuery = [...state.tabs];

      updateTabSearchQuery[action.payload.tabIndex].searchQuery =
        action.payload.value;
      return {
        ...state,
        tabs: updateTabSearchQuery,
      };
    case UPDATE_SEARCH_RESULTS:
      const updateSearchResults = [...state.tabs];

      updateSearchResults[action.payload.tabIndex].results =
        action.payload.value;
      return {
        ...state,
        tabs: updateSearchResults,
      };

    case OPEN_SNACKBAR_NOTIFICATION:
      return {
        ...state,
        snackBarNotification: {
          isOpen: true,
          notificationType: action.payload.notificationType,
          notificationMessage: action.payload.notificationMessage,
        },
      };

    case CLOSE_SNACKBAR_NOTIFICATION:
      return {
        ...state,
        snackBarNotification: {
          isOpen: false,
          notificationMessage: "",
        },
      };

    default:
      return state;
  }
};
