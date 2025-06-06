import React, { useState } from "react";
import Message from "../Message";

const RegisterEvents = ({
  id,
  evento,
  setEvento,
  direccion,
  setDireccion,
  tipoEvento,
  setTipoEvento,
  descripcion,
  setDescripcion,
  handleSubmit,
  handleUpdate,
  errorEvent,
  success,
}) => {
  const [localErrors, setLocalErrors] = useState({});
  const [focusedField, setFocusedField] = useState("");

  const tiposDeEvento = [
    { value: "Cultural", icon: "🎭", color: "#667eea" },
    { value: "Educativo", icon: "📚", color: "#764ba2" },
    { value: "Social", icon: "🤝", color: "#f093fb" },
    { value: "Deportivo", icon: "⚽", color: "#f5576c" },
    { value: "Musical", icon: "🎵", color: "#4facfe" },
    { value: "Conferencia", icon: "🎙️", color: "#43e97b" },
    { value: "Taller", icon: "🔧", color: "#fa709a" },
    { value: "Exposición", icon: "🖼️", color: "#fee140" },
    { value: "Festival", icon: "🎉", color: "#a8edea" },
    { value: "Charity", icon: "❤️", color: "#ff9a9e" },
    { value: "Networking", icon: "🌐", color: "#c2e9fb" },
    { value: "Virtual", icon: "💻", color: "#a18cd1" },
    { value: "Presencial", icon: "🏢", color: "#fad0c4" }
  ];

  const validateForm = () => {
    const errors = {};
    
    if (!evento.trim()) {
      errors.evento = "El nombre del evento es obligatorio";
    }
    
    if (!direccion.trim()) {
      errors.direccion = "La dirección es obligatoria";
    }
    
    if (!tipoEvento) {
      errors.tipoEvento = "Debe seleccionar un tipo de evento";
    }

    setLocalErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      if (id) {
        handleUpdate(e);
      } else {
        handleSubmit(e);
      }
    }
  };

  const getInputStyle = (fieldName) => ({
    background: focusedField === fieldName 
      ? "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.1) 100%)"
      : "rgba(255,255,255,0.08)",
    color: "#fff",
    border: focusedField === fieldName
      ? "2px solid transparent"
      : "2px solid rgba(255,255,255,0.2)",
    borderRadius: "15px",
    padding: "1rem 1.5rem",
    fontSize: "1rem",
    fontWeight: "400",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    backdropFilter: "blur(10px)",
    boxShadow: focusedField === fieldName
      ? "0 10px 30px rgba(102, 126, 234, 0.3), inset 0 1px 0 rgba(255,255,255,0.2)"
      : "0 5px 15px rgba(0,0,0,0.1)",
    transform: focusedField === fieldName ? "translateY(-2px)" : "translateY(0)",
    backgroundImage: focusedField === fieldName
      ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      : "none",
    backgroundClip: focusedField === fieldName ? "border-box" : "unset",
  });

  const getLabelStyle = (fieldName) => ({
    color: focusedField === fieldName ? "#fff" : "rgba(255,255,255,0.9)",
    fontWeight: "600",
    fontSize: "1rem",
    marginBottom: "0.75rem",
    display: "block",
    transition: "all 0.3s ease",
    textShadow: focusedField === fieldName ? "0 0 10px rgba(102, 126, 234, 0.8)" : "none",
  });

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "0 auto",
        background: `
          linear-gradient(135deg, 
            rgba(255,255,255,0.1) 0%, 
            rgba(255,255,255,0.05) 100%
          )
        `,
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.2)",
        borderRadius: "25px",
        padding: "3rem",
        boxShadow: `
          0 25px 50px rgba(0,0,0,0.2),
          inset 0 1px 0 rgba(255,255,255,0.1)
        `,
      }}
    >

      <div className="text-center mb-4">
        <h1
          style={{
            background: id 
              ? "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
              : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontSize: "2.5rem",
            fontWeight: "800",
            letterSpacing: "1px",
            marginBottom: "0.5rem",
          }}
        >
          {id ? "✏️ Actualizar Evento" : "✨ Crear Nuevo Evento"}
        </h1>
        <p style={{
          color: "rgba(255,255,255,0.7)",
          fontSize: "1.1rem",
          fontWeight: "300",
        }}>
          {id ? "Modifica los detalles del evento" : "Completa la información para crear un nuevo evento"}
        </p>
      </div>

      {errorEvent && (
        <Message type="error" message={errorEvent} />
      )}
      
      {success && (
        <Message type="success" message={success} />
      )}

      <form onSubmit={handleFormSubmit}>
        <div className="row g-4">
          <div className="col-12">
            <label style={getLabelStyle("evento")}>
              🎪 Nombre del Evento *
            </label>
            <input
              className="form-control"
              style={getInputStyle("evento")}
              type="text"
              value={evento}
              onChange={(e) => {
                setEvento(e.target.value);
                if (localErrors.evento) {
                  setLocalErrors(prev => ({ ...prev, evento: "" }));
                }
              }}
              onFocus={() => setFocusedField("evento")}
              onBlur={() => setFocusedField("")}
              placeholder=""
              required
            />
            {localErrors.evento && (
              <Message type="error" message={localErrors.evento} />
            )}
          </div>

          <div className="col-12">
            <label style={getLabelStyle("direccion")}>
              📍 Ubicación del Evento *
            </label>
            <input
              className="form-control"
              style={getInputStyle("direccion")}
              type="text"
              value={direccion}
              onChange={(e) => {
                setDireccion(e.target.value);
                if (localErrors.direccion) {
                  setLocalErrors(prev => ({ ...prev, direccion: "" }));
                }
              }}
              onFocus={() => setFocusedField("direccion")}
              onBlur={() => setFocusedField("")}
              placeholder=""
              required
            />
            {localErrors.direccion && (
              <Message type="error" message={localErrors.direccion} />
            )}
          </div>

          <div className="col-12">
            <label style={getLabelStyle("tipoEvento")}>
              🎭 Categoría del Evento *
            </label>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1rem",
              marginTop: "1rem",
            }}>
              {tiposDeEvento.map((tipo) => (
                <div
                  key={tipo.value}
                  onClick={() => {
                    setTipoEvento(tipo.value);
                    if (localErrors.tipoEvento) {
                      setLocalErrors(prev => ({ ...prev, tipoEvento: "" }));
                    }
                  }}
                  style={{
                    background: tipoEvento === tipo.value
                      ? `linear-gradient(135deg, ${tipo.color} 0%, rgba(255,255,255,0.2) 100%)`
                      : "rgba(255,255,255,0.05)",
                    border: tipoEvento === tipo.value
                      ? `2px solid ${tipo.color}`
                      : "2px solid rgba(255,255,255,0.1)",
                    borderRadius: "12px",
                    padding: "1rem",
                    textAlign: "center",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    backdropFilter: "blur(10px)",
                    transform: tipoEvento === tipo.value ? "scale(1.05)" : "scale(1)",
                    boxShadow: tipoEvento === tipo.value
                      ? `0 10px 25px ${tipo.color}40`
                      : "0 5px 15px rgba(0,0,0,0.1)",
                  }}
                  onMouseOver={(e) => {
                    if (tipoEvento !== tipo.value) {
                      e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                      e.currentTarget.style.transform = "scale(1.02)";
                    }
                  }}
                  onMouseOut={(e) => {
                    if (tipoEvento !== tipo.value) {
                      e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                      e.currentTarget.style.transform = "scale(1)";
                    }
                  }}
                >
                  <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
                    {tipo.icon}
                  </div>
                  <div style={{
                    color: "#fff",
                    fontWeight: "600",
                    fontSize: "0.9rem",
                  }}>
                    {tipo.value}
                  </div>
                </div>
              ))}
            </div>
            {localErrors.tipoEvento && (
              <Message type="error" message={localErrors.tipoEvento} />
            )}
          </div>

          <div className="col-12">
            <label style={getLabelStyle("descripcion")}>
              📝 Descripción del Evento
            </label>
            <textarea
              className="form-control"
              style={{
                ...getInputStyle("descripcion"),
                minHeight: "120px",
                resize: "vertical",
              }}
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              onFocus={() => setFocusedField("descripcion")}
              onBlur={() => setFocusedField("")}
              placeholder=""
              rows="4"
            />
          </div>
        </div>

        <div className="text-center mt-4">
          <button
            type="submit"
            style={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              color: "#fff",
              border: "none",
              borderRadius: "25px",
              padding: "1rem 3rem",
              fontSize: "1.1rem",
              fontWeight: "600",
              letterSpacing: "1px",
              cursor: "pointer",
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              boxShadow: "0 15px 35px rgba(102, 126, 234, 0.4)",
              backdropFilter: "blur(10px)",
              position: "relative",
              overflow: "hidden",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-3px) scale(1.05)";
              e.currentTarget.style.boxShadow = "0 20px 40px rgba(102, 126, 234, 0.6)";
              e.currentTarget.style.background = "linear-gradient(135deg, #764ba2 0%, #f093fb 100%)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow = "0 15px 35px rgba(102, 126, 234, 0.4)";
              e.currentTarget.style.background = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
            }}
          >
            {id ? "🔄 Actualizar Evento" : "✨ Crear Evento"}
          </button>
        </div>

        <div className="text-center mt-4">
          <small style={{ 
            color: "rgba(255,255,255,0.6)", 
            fontSize: "0.9rem",
            fontStyle: "italic"
          }}>
            * Campos obligatorios • Todos los datos son seguros y privados
          </small>
        </div>
      </form>
    </div>
  );
};

export default RegisterEvents;