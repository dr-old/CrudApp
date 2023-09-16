import ApiCalendar from 'react-google-calendar-api';

const config = {
  clientId:
    '802598629686-h1dcd2ds43206goekaflt8cagqvgmr44.apps.googleusercontent.com',
  apiKey: 'AIzaSyCAvrollUzKUV0OCfwjBSnEFA1xG612O1Q',
  scope: 'https://www.googleapis.com/auth/calendar',
  discoveryDocs: [
    'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
  ],
};

const apiCalendar = new ApiCalendar(config);

export default apiCalendar;
