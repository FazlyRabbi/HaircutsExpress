import { useEffect, useState } from 'react';
import moment from 'moment';

export function useSevenDaysFromToday() {
  const [dates, setDates] = useState([]);

  useEffect(() => {
    const today = moment();
    const formattedDates = [];
  

    for (let i = 0; i < 7; i++) {
      const formattedDate = today.clone().add(i, 'days').format('MM/DD/YYYY');
      formattedDates.push(formattedDate);

    ;
    }

    setDates({ formattedDates });
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return dates;
}
