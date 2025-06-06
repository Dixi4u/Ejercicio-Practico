import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const useDataEvents = () => {
  const ApiRegister = "https://retoolapi.dev/JWtbTo/eventos";
  const ApiEvents = "https://retoolapi.dev/JWtbTo/eventos";

  const [activeTab, setActiveTab] = useState("list");
  const [id, setId] = useState("");
  const [evento, setEvento] = useState("");
  const [direccion, setDireccion] = useState("");
  const [tipoEvento, setTipoEvento] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [errorEvent, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState([]);

  const cleanData = () => {
    setEvento("");
    setDireccion("");
    setTipoEvento("");
    setDescripcion("");
    setId("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!evento || !direccion || !tipoEvento) {
      setError("Todos los campos obligatorios deben ser completados");
      toast.error("Todos los campos obligatorios deben ser completados");
      return;
    }

    try {
      const newEvent = {
        evento,
        direccion,
        tipoEvento,
        descripcion,
      };

      const response = await fetch(ApiRegister, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEvent),
      });

      if (!response.ok) {
        throw new Error("Hubo un error al registrar el evento");
      }

      const data = await response.json();
      toast.success("Evento registrado");
      setEvents(data);
      setSuccess("Evento registrado correctamente");
      cleanData();
      fetchData();
    } catch (error) {
      setError(error.message);
      console.error("Error:", error);
      toast.error("Ocurrió un error al registrar el evento");
    } finally {
      setLoading(false);
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch(ApiEvents);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteEvent = async (id) => {
    try {
      const response = await fetch(`${ApiEvents}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete event");
      }

      const result = await response.json();
      toast.success("Evento eliminado");
      fetchData();
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  const updateEvent = async (dataEvent) => {
    setId(dataEvent.id);
    setEvento(dataEvent.evento);
    setDireccion(dataEvent.direccion);
    setTipoEvento(dataEvent.tipoEvento);
    setDescripcion(dataEvent.descripcion);
    setError(null);
    setSuccess(null);
    setActiveTab("form");
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const updatedEvent = {
        evento,
        direccion,
        tipoEvento,
        descripcion,
      };

      const response = await fetch(`${ApiEvents}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedEvent),
      });

      if (!response.ok) {
        throw new Error("Error al actualizar el evento");
      }

      toast.success("Evento actualizado");
      setSuccess("Evento actualizado correctamente");
      cleanData();
      setId("");
      setActiveTab("list");
      fetchData();
    } catch (error) {
      setError(error.message);
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    activeTab,
    setActiveTab,
    id,
    setId,
    evento,
    setEvento,
    direccion,
    setDireccion,
    tipoEvento,
    setTipoEvento,
    descripcion,
    setDescripcion,
    errorEvent,
    setError,
    success,
    setSuccess,
    loading,
    setLoading,
    events,
    setEvents,
    cleanData,
    handleSubmit,
    fetchData,
    deleteEvent,
    updateEvent,
    handleUpdate,
  };
};

export default useDataEvents;