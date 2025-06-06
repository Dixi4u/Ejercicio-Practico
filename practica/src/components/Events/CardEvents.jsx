import React from "react";
import Button from "../Button";
import Card from "../Card";
import Title from "../Title";

const CardEvent = ({ event, deleteEvent, updateEvent }) => {
  if (!event) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  return (
    <Card hoverEffect={true}>
      <Title level={2} textAlign="center">
        {event.evento}
      </Title>
      <p>
        <span className="fw-semibold">📍 Dirección:</span> {event.direccion || "N/A"}
      </p>
      <p>
        <span className="fw-semibold">🎭 Tipo de Evento:</span> {event.tipoEvento}
      </p>
      <p>
        <span className="fw-semibold">📝 Descripción:</span> {event.descripcion || "N/A"}
      </p>
      <p>
        <span className="fw-semibold">🆔 ID:</span> {event.id}
      </p>
      <div className="d-flex justify-content-center mt-3 gap-2">
        <Button 
          label={"🗑️ Eliminar"}
          actionButton={() => deleteEvent(event.id)}
          colorClass={"danger"}
        />
        <Button 
          label={"✏️ Editar"}
          actionButton={() => updateEvent(event)}
          colorClass={"warning"}
        />
      </div>
    </Card>
  );
};

export default CardEvent;