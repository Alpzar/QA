import { useEffect, useState } from "react";

export const useFetchEvent = (id) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
 
  const getData = async () => {
    try {
      const response = await fetch("http://localhost/taskflowbackend/public/api/event/"+id);
      console.log(id);
      //const data = await response.json();
      const events = await response.json();
      setData(events);
      setIsLoading(false);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);


  return {
    data,
    isLoading,
  };
};
