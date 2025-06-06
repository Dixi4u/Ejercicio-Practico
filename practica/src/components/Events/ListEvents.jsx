import React, { useState } from "react";
import Title from "../Title";
import Message from "../Message";

const ListEvents = ({ deleteEvent, updateEvent, loading, events }) => {
  const [sortField, setSortField] = useState("evento");
  const [sortDirection, setSortDirection] = useState("asc");
  const [filterType, setFilterType] = useState("all");

  // Función para ordenar eventos
  const sortEvents = (field) => {
    const direction = sortField === field && sortDirection === "asc" ? "desc" : "asc";
    setSortField(field);
    setSortDirection(direction);
  };

  // Función para filtrar eventos
  const getFilteredAndSortedEvents = () => {
    if (!Array.isArray(events)) return [];

    let filteredEvents = events;
    
    // Filtrar por tipo
    if (filterType !== "all") {
      filteredEvents = events.filter(event => event.tipoEvento === filterType);
    }

    // Ordenar
    return filteredEvents.sort((a, b) => {
      const aValue = a[sortField] || "";
      const bValue = b[sortField] || "";
      
      if (sortDirection === "asc") {
        return aValue.toString().localeCompare(bValue.toString());
      } else {
        return bValue.toString().localeCompare(aValue.toString());
      }
    });
  };

  const sortedEvents = getFilteredAndSortedEvents();
  const uniqueTypes = [...new Set(events.map(event => event.tipoEvento))];

  const getSortIcon = (field) => {
    if (sortField !== field) return "⟷";
    return sortDirection === "asc" ? "↗️" : "↙️";
  };

  const getTypeColor = (type) => {
    const typeColors = {
      "Cultural": "#667eea",
      "Educativo": "#764ba2",
      "Social": "#f093fb",
      "Deportivo": "#f5576c",
      "Musical": "#4facfe",
      "Conferencia": "#43e97b",
      "Taller": "#fa709a",
      "Exposición": "#fee140",
      "Festival": "#a8edea",
      "Charity": "#ff9a9e",
      "Networking": "#c2e9fb",
      "Virtual": "#a18cd1",
      "Presencial": "#fad0c4"
    };
    return typeColors[type] || "#667eea";
  };

  return (
    <>
      {/* Título futurista */}
      <div className="text-center mb-5">
        <h1
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontSize: "3rem",
            fontWeight: "900",
            letterSpacing: "2px",
            marginBottom: "0.5rem",
            animation: "glow 3s ease-in-out infinite alternate",
          }}
        >
          📊 Event Database
        </h1>
        <p style={{
          color: "rgba(255,255,255,0.7)",
          fontSize: "1.1rem",
          fontWeight: "300",
        }}>
          Sistema inteligente de gestión y visualización de eventos
        </p>
      </div>

      {/* Panel de control futurista */}
      <div 
        className="mb-4"
        style={{
          background: `
            linear-gradient(135deg, 
              rgba(255,255,255,0.1) 0%, 
              rgba(255,255,255,0.05) 100%
            )
          `,
          backdropFilter: "blur(15px)",
          border: "1px solid rgba(255,255,255,0.2)",
          borderRadius: "20px",
          padding: "2rem",
          boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
        }}
      >
        <div className="d-flex flex-wrap gap-4 align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-3">
            <div
              style={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                borderRadius: "12px",
                padding: "0.75rem",
                color: "#fff",
                fontWeight: "600",
                fontSize: "0.9rem",
              }}
            >
              🔍 FILTROS
            </div>
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              style={{
                background: "rgba(255,255,255,0.1)",
                color: "#fff",
                border: "2px solid rgba(255,255,255,0.2)",
                borderRadius: "12px",
                padding: "0.75rem 1rem",
                fontSize: "1rem",
                fontWeight: "500",
                backdropFilter: "blur(10px)",
                cursor: "pointer",
              }}
            >
              <option value="all" style={{ background: "#1a1a2e", color: "#fff" }}>
                Todos los tipos
              </option>
              {uniqueTypes.map((type) => (
                <option key={type} value={type} style={{ background: "#1a1a2e", color: "#fff" }}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          
          <div 
            style={{
              background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
              borderRadius: "12px",
              padding: "0.75rem 1.5rem",
              color: "#fff",
              fontWeight: "600",
              fontSize: "1rem",
              boxShadow: "0 5px 15px rgba(240, 147, 251, 0.3)",
            }}
          >
            📈 {sortedEvents.length} evento{sortedEvents.length !== 1 ? "s" : ""} encontrado{sortedEvents.length !== 1 ? "s" : ""}
          </div>
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div 
          className="text-center my-5"
          style={{
            background: "rgba(255,255,255,0.05)",
            borderRadius: "20px",
            padding: "3rem",
            backdropFilter: "blur(10px)",
          }}
        >
          <div
            style={{
              width: "60px",
              height: "60px",
              border: "4px solid rgba(102, 126, 234, 0.2)",
              borderTop: "4px solid #667eea",
              borderRadius: "50%",
              animation: "spin 1s linear infinite",
              margin: "0 auto 1rem",
            }}
          />
          <p style={{ color: "#fff", fontSize: "1.1rem", fontWeight: "500" }}>
            Sincronizando base de datos...
          </p>
        </div>
      )}

      {/* Tabla futurista */}
      {!loading && (
        <>
          {sortedEvents.length > 0 ? (
            <div 
              style={{
                background: `
                  linear-gradient(135deg, 
                    rgba(255,255,255,0.1) 0%, 
                    rgba(255,255,255,0.05) 100%
                  )
                `,
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
              }}
            >
              <div style={{ overflowX: "auto" }}>
                <table 
                  className="table mb-0" 
                  style={{ 
                    borderCollapse: "separate",
                    borderSpacing: 0,
                    background: "transparent",
                    color: "#fff",
                  }}
                >
                  <thead>
                    <tr>
                      {[
                        { field: "evento", label: "🎪 Evento", width: "25%" },
                        { field: "tipoEvento", label: "🎭 Categoría", width: "20%" },
                        { field: "direccion", label: "📍 Ubicación", width: "25%" },
                        { field: "descripcion", label: "📝 Descripción", width: "25%" },
                        { field: "actions", label: "⚡ Acciones", width: "15%" }
                      ].map((header) => (
                        <th 
                          key={header.field}
                          style={{
                            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                            color: "#fff",
                            border: "none",
                            padding: "1.5rem 1rem",
                            textAlign: "left",
                            fontWeight: "700",
                            fontSize: "1rem",
                            cursor: header.field !== "actions" ? "pointer" : "default",
                            transition: "all 0.3s ease",
                            width: header.width,
                            position: "sticky",
                            top: 0,
                            zIndex: 10,
                          }}
                          onClick={() => header.field !== "actions" && sortEvents(header.field)}
                          onMouseOver={(e) => {
                            if (header.field !== "actions") {
                              e.currentTarget.style.background = "linear-gradient(135deg, #764ba2 0%, #f093fb 100%)";
                            }
                          }}
                          onMouseOut={(e) => {
                            if (header.field !== "actions") {
                              e.currentTarget.style.background = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
                            }
                          }}
                        >
                          {header.label} {header.field !== "actions" && getSortIcon(header.field)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {sortedEvents.map((event, index) => (
                      <tr 
                        key={event.id}
                        style={{
                          background: index % 2 === 0 
                            ? "rgba(255,255,255,0.03)" 
                            : "rgba(255,255,255,0.06)",
                          borderBottom: "1px solid rgba(255,255,255,0.1)",
                          transition: "all 0.3s ease",
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.background = "rgba(102, 126, 234, 0.1)";
                          e.currentTarget.style.transform = "scale(1.01)";
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.background = index % 2 === 0 
                            ? "rgba(255,255,255,0.03)" 
                            : "rgba(255,255,255,0.06)";
                          e.currentTarget.style.transform = "scale(1)";
                        }}
                      >
                        <td style={{
                          padding: "1.5rem 1rem",
                          verticalAlign: "middle",
                          borderBottom: "1px solid rgba(255,255,255,0.1)",
                        }}>
                          <div>
                            <strong style={{ 
                              color: "#fff", 
                              fontSize: "1.1rem",
                              display: "block",
                              marginBottom: "0.25rem"
                            }}>
                              {event.evento}
                            </strong>
                            <small style={{ color: "rgba(255,255,255,0.6)" }}>
                              ID: {event.id}
                            </small>
                          </div>
                        </td>
                        <td style={{
                          padding: "1.5rem 1rem",
                          verticalAlign: "middle",
                          borderBottom: "1px solid rgba(255,255,255,0.1)",
                        }}>
                          <span 
                            style={{
                              background: `linear-gradient(135deg, ${getTypeColor(event.tipoEvento)} 0%, rgba(255,255,255,0.2) 100%)`,
                              color: "#fff",
                              padding: "0.5rem 1rem",
                              borderRadius: "20px",
                              fontSize: "0.9rem",
                              fontWeight: "600",
                              border: `1px solid ${getTypeColor(event.tipoEvento)}`,
                              boxShadow: `0 2px 10px ${getTypeColor(event.tipoEvento)}30`,
                            }}
                          >
                            {event.tipoEvento}
                          </span>
                        </td>
                        <td style={{
                          padding: "1.5rem 1rem",
                          verticalAlign: "middle",
                          borderBottom: "1px solid rgba(255,255,255,0.1)",
                          color: "rgba(255,255,255,0.8)",
                        }}>
                          <div style={{ maxWidth: "200px" }}>
                            {event.direccion || "No especificada"}
                          </div>
                        </td>
                        <td style={{
                          padding: "1.5rem 1rem",
                          verticalAlign: "middle",
                          borderBottom: "1px solid rgba(255,255,255,0.1)",
                          color: "rgba(255,255,255,0.8)",
                        }}>
                          <div 
                            style={{ 
                              maxWidth: "250px",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              display: "-webkit-box",
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: "vertical",
                            }}
                            title={event.descripcion}
                          >
                            {event.descripcion || "Sin descripción"}
                          </div>
                        </td>
                        <td style={{
                          padding: "1.5rem 1rem",
                          verticalAlign: "middle",
                          borderBottom: "1px solid rgba(255,255,255,0.1)",
                        }}>
                          <div className="d-flex gap-2 flex-wrap">
                            <button
                              onClick={() => updateEvent(event)}
                              style={{
                                background: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
                                color: "#fff",
                                border: "none",
                                borderRadius: "10px",
                                padding: "0.5rem 1rem",
                                fontSize: "0.9rem",
                                fontWeight: "600",
                                cursor: "pointer",
                                transition: "all 0.3s ease",
                                boxShadow: "0 4px 15px rgba(250, 112, 154, 0.3)",
                              }}
                              onMouseOver={(e) => {
                                e.currentTarget.style.transform = "scale(1.05)";
                                e.currentTarget.style.boxShadow = "0 6px 20px rgba(250, 112, 154, 0.5)";
                              }}
                              onMouseOut={(e) => {
                                e.currentTarget.style.transform = "scale(1)";
                                e.currentTarget.style.boxShadow = "0 4px 15px rgba(250, 112, 154, 0.3)";
                              }}
                            >
                              ✏️ Editar
                            </button>
                            <button
                              onClick={() => {
                                if (window.confirm(`¿Estás seguro de eliminar el evento "${event.evento}"?`)) {
                                  deleteEvent(event.id);
                                }
                              }}
                              style={{
                                background: "linear-gradient(135deg, #f5576c 0%, #f093fb 100%)",
                                color: "#fff",
                                border: "none",
                                borderRadius: "10px",
                                padding: "0.5rem 1rem",
                                fontSize: "0.9rem",
                                fontWeight: "600",
                                cursor: "pointer",
                                transition: "all 0.3s ease",
                                boxShadow: "0 4px 15px rgba(245, 87, 108, 0.3)",
                              }}
                              onMouseOver={(e) => {
                                e.currentTarget.style.transform = "scale(1.05)";
                                e.currentTarget.style.boxShadow = "0 6px 20px rgba(245, 87, 108, 0.5)";
                              }}
                              onMouseOut={(e) => {
                                e.currentTarget.style.transform = "scale(1)";
                                e.currentTarget.style.boxShadow = "0 4px 15px rgba(245, 87, 108, 0.3)";
                              }}
                            >
                              🗑️ Eliminar
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <Message 
              type="info" 
              message="No hay eventos disponibles. ¡Crea tu primer evento para comenzar!" 
            />
          )}
        </>
      )}

      {/* Información adicional */}
      {sortedEvents.length > 0 && (
        <div className="mt-4 text-center">
          <small style={{ color: "rgba(255,255,255,0.6)" }}>
            💡 Haz clic en los encabezados de las columnas para ordenar los eventos
          </small>
        </div>
      )}

      {/* Estilos CSS para animaciones */}
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes glow {
          0% { 
            text-shadow: 0 0 20px rgba(102, 126, 234, 0.5),
                         0 0 40px rgba(118, 75, 162, 0.3),
                         0 0 60px rgba(240, 147, 251, 0.2);
          }
          100% { 
            text-shadow: 0 0 30px rgba(102, 126, 234, 0.8),
                         0 0 60px rgba(118, 75, 162, 0.5),
                         0 0 90px rgba(240, 147, 251, 0.3);
          }
        }
      `}</style>
    </>
  );
};

export default ListEvents;