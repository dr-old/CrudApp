const initialState = {
  modalList: {
    id: '',
    status: false,
    detail: [],
  },
  favoriteList: [],
  cartList: [],
  userList: [],
  user: {
    tokenFirebase: null,
    token: null,
    data: {},
  },
  transactionList: [],
  formTodo: {
    title: '',
    description: '',
    reminderStartDate: '',
    reminderEndDate: '',
    reminderStatus: '',
  },
  formEmployee: {
    first_name: '',
    last_name: '',
    company_name: '',
    address: '',
    city: '',
    county: '',
    state: '',
    zip: null,
    phone1: '',
    phone2: '',
    email: '',
    web: '',
    job: '',
  },
  formTopup: {
    nominal: 0,
    paymentMethod: {},
  },
  formCheckout: {
    name: '',
    email: '',
    address: '',
    shippingCost: 0,
    discount: 0,
    total: 0,
    detail: [],
  },
  formRegister: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneId: '',
    phone: '',
  },
  formLogin: {
    email: '',
    password: '',
  },
  formVerify: {
    otp: '',
  },
  formLocation: {
    location: {},
    description: '',
    placeId: '',
    latitude: '',
    longitude: '',
  },
  formSearchMaps: {
    origin: '',
    originDetail: {},
    destination: '',
    destinationDetail: {},
  },
};

// eslint-disable-next-line no-undef
export default generalReducer = (state = initialState, action) => {
  switch (action.type) {
    // REDUCER MODALLIST
    case 'SET_MODAL_LIST':
      return {
        ...state,
        modalList: {
          ...state.modalList,
          id: action.id,
          status: action.status,
          detail: action.detail,
        },
      };

    // REDUCER CART LIST
    case 'SET_CART_LIST':
      return {
        ...state,
        cartList: action.cart,
      };

    // REDUCER FAVORITELIST
    case 'SET_FAVORITE_LIST':
      return {
        ...state,
        favoriteList: action.favorite,
      };

    // REDUCER TODO
    case 'SET_USER_AUTH':
      return {
        ...state,
        user: {
          ...state.user,
          [action.inputType]: action.inputValue,
        },
      };

    // REDUCER USER
    case 'SET_USER':
      return {
        ...state,
        user: {
          tokenFirebase: action.tokenFirebase,
          token: action.token,
          data: action.user,
        },
      };

    // REDUCER USER
    case 'SET_USER_CLEAN':
      return {
        ...state,
        user: {tokenFirebase: null, token: null, data: {}},
      };

    // REDUCER USER LIST
    case 'SET_USER_LIST':
      return {
        ...state,
        userList: action.userList,
      };

    // REDUCER TRANSACTION LIST
    case 'SET_TRANSACTION_LIST':
      return {
        ...state,
        transactionList: action.data,
      };

    // REDUCER TODO
    case 'SET_FORM_TODO':
      return {
        ...state,
        formTodo: {
          ...state.formTodo,
          [action.inputType]: action.inputValue,
        },
      };

    // REDUCER TODO
    case 'SETALL_FORM_TODO':
      return {
        ...state,
        formTodo: {
          ...state.formTodo,
          title: action.title,
          description: action.description,
          reminderStartDate: action.reminderStartDate,
          reminderEndDate: action.reminderEndDate,
          reminderStatus: action.reminderStatus,
        },
      };

    // REDUCER TODO
    case 'CLEAN_FORM_TODO':
      return {
        ...state,
        formTodo: initialState.formTodo,
      };

    // REDUCER EMPLOYEE
    case 'SET_FORM_EMPLOYEE':
      return {
        ...state,
        formEmployee: {
          ...state.formEmployee,
          [action.inputType]: action.inputValue,
        },
      };

    // REDUCER EMPLOYEE
    case 'SETALL_FORM_EMPLOYEE':
      return {
        ...state,
        formEmployee: {
          ...state.formEmployee,
          first_name: action.first_name,
          last_name: action.last_name,
          company_name: action.company_name,
          address: action.address,
          city: action.city,
          county: action.county,
          state: action.state,
          zip: action.zip,
          phone1: action.phone1,
          phone2: action.phone2,
          email: action.email,
          web: action.web,
          job: action.job,
        },
      };

    // REDUCER EMPLOYEE
    case 'CLEAN_FORM_EMPLOYEE':
      return {
        ...state,
        formEmployee: {
          first_name: '',
          last_name: '',
          company_name: '',
          address: '',
          city: '',
          county: '',
          state: '',
          zip: null,
          phone1: '',
          phone2: '',
          email: '',
          web: '',
          job: '',
        },
      };

    // REDUCER TOPUP
    case 'SET_FORM_TOPUP':
      return {
        ...state,
        formTopup: {
          ...state.formTopup,
          [action.inputType]: action.inputValue,
        },
      };

    // REDUCER TOPUP
    case 'CLEAN_FORM_TOPUP':
      return {
        ...state,
        formTopup: {
          nominal: 0,
          paymentMethod: {},
        },
      };

    // REDUCER CHECKOUT
    case 'SET_FORM_CHECKOUT':
      return {
        ...state,
        formCheckout: {
          ...state.formCheckout,
          [action.inputType]: action.inputValue,
        },
      };

    // REDUCER CHECKOUT
    case 'SET_CHECKOUT':
      return {
        ...state,
        formCheckout: {
          ...state.formCheckout,
          name: action.name,
          email: action.email,
          address: action.address,
          shippingCost: action.shippingCost,
          discount: action.discount,
          total: action.total,
          detail: action.detail,
        },
      };

    // REDUCER CHECKOUT
    case 'SET_CHECKOUT_CLEAN':
      return {
        ...state,
        formCheckout: {
          ...state.formCheckout,
          name: '',
          email: '',
          address: '',
          shippingCost: 0,
          discount: 0,
          total: 0,
          detail: [],
        },
      };

    //REDUCER FORM REGISTER
    case 'SET_FORM_REGISTER':
      return {
        ...state,
        formRegister: {
          ...state.formRegister,
          [action.inputType]: action.inputValue,
        },
      };

    //REDUCER FORM REGISTER
    case 'CLEAN_FORM_REGISTER':
      return {
        ...state,
        formRegister: {
          ...state.formRegister,
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          phoneId: '',
          phone: '',
        },
      };

    //REDUCER FORM LOGIN
    case 'SET_FORM_LOGIN':
      return {
        ...state,
        formLogin: {
          ...state.formLogin,
          [action.inputType]: action.inputValue,
        },
      };

    //REDUCER FORM LOGIN
    case 'CLEAN_FORM_LOGIN':
      return {
        ...state,
        formLogin: {
          ...state.formLogin,
          email: '',
          password: '',
        },
      };

    //REDUCER FORM VERIFY OTP
    case 'SET_FORM_VERIFY':
      return {
        ...state,
        formVerify: {
          ...state.formVerify,
          [action.inputType]: action.inputValue,
        },
      };

    //REDUCER FORM VERIFY
    case 'CLEAN_FORM_VERIFY':
      return {
        ...state,
        formVerify: {
          ...state.formVerify,
          otp: '',
        },
      };

    //REDUCER FORM LOCATION
    case 'SET_FORM_LOCATION':
      return {
        ...state,
        formLocation: {
          ...state.formLocation,
          [action.inputType]: action.inputValue,
        },
      };

    //REDUCER FORM PLACE
    case 'SET_FORM_CURRENT_PLACE':
      return {
        ...state,
        formLocation: {
          ...state.formLocation,
          description: action.description,
          placeId: action.placeId,
          latitude: action.latitude,
          longitude: action.longitude,
        },
      };

    //REDUCER FORM LOCATION
    case 'CLEAN_FORM_LOCATION':
      return {
        ...state,
        formLocation: {
          ...state.formLocation,
          location: {},
          description: '',
          placeId: '',
          latitude: '',
          longitude: '',
        },
      };

    //REDUCER FORM SEARCH MAPS
    case 'SET_FORM_SEARCHMAPS':
      return {
        ...state,
        formSearchMaps: {
          ...state.formSearchMaps,
          [action.inputType]: action.inputValue,
        },
      };

    //REDUCER FORM SEARCH MAPS
    case 'CLEAN_FORM_SEARCHMAPS':
      return {
        ...state,
        formSearchMaps: {
          ...state.formSearchMaps,
          origin: '',
          destination: '',
        },
      };

    default:
      return state;
  }
};
