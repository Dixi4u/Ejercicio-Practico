import { useState, useEffect } from "react";

const useFetchEventData = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const ApiEvents = "https://retoolapi.dev/JWtbTo/eventos";

  const fetchEventData = async () => {
    try {
      setLoading(true);
      const response = await fetch(ApiEvents);
      
      if (!response.ok) {
        throw new Error("Error al obtener los datos de eventos");
      }
      
      const data = await response.json();
      setEvents(data);
      setError(null);
    } catch (error) {
      console.error("Error fetching event data:", error);
      setError(error.message);
      setEvents([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEventData();
  }, []);

  return {
    events,
    loading,
    error,
    refetchEventData: fetchEventData,
  };
};

export default useFetchEventData;