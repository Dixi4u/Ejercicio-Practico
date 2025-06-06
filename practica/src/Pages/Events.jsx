import React, { useEffect } from "react";
import RegisterEvents from "../components/Events/RegisterEvents";
import ListEvents from "../components/Events/ListEvents";
import { Toaster } from "react-hot-toast";
import useDataEvents from "../components/Events/hooks/useDataEvents";
import Card from "../components/Card";
import Title from "../components/Title";

const Events = () => {
  useEffect(() => {
    document.title = "Administrador de Eventos - Impulso Creativo";
  }, []);

  const {
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
  } = useDataEvents();

  const tabButtonStyle = (isActive) => ({
    color: isActive ? "#fff" : "#a0a0a0",
    background: isActive 
      ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" 
      : "rgba(255,255,255,0.05)",
    border: "none",
    borderRadius: "25px",
    letterSpacing: "1px",
    padding: "1rem 2rem",
    fontSize: "1rem",
    fontWeight: "600",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    cursor: "pointer",
    backdropFilter: "blur(10px)",
    boxShadow: isActive 
      ? "0 10px 30px rgba(102, 126, 234, 0.4), 0 0 30px rgba(118, 75, 162, 0.3)" 
      : "0 5px 15px rgba(0,0,0,0.1)",
    transform: isActive ? "translateY(-2px)" : "translateY(0)",
  });

  return (
    <div
      className="min-vh-100"
      style={{
        background: `
          radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 40% 80%, rgba(120, 219, 255, 0.3) 0%, transparent 50%),
          linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%)
        `,
        padding: "2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >

      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "10%",
          width: "200px",
          height: "200px",
          background: "linear-gradient(45deg, #667eea, #764ba2)",
          borderRadius: "50%",
          filter: "blur(100px)",
          opacity: 0.1,
          animation: "float 6s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          left: "5%",
          width: "300px",
          height: "300px",
          background: "linear-gradient(45deg, #f093fb, #f5576c)",
          borderRadius: "50%",
          filter: "blur(120px)",
          opacity: 0.1,
          animation: "float 8s ease-in-out infinite reverse",
        }}
      />

      <div
        className="w-100"
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
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
            borderRadius: "30px",
            padding: "3rem",
            boxShadow: `
              0 25px 50px rgba(0,0,0,0.3),
              inset 0 1px 0 rgba(255,255,255,0.2)
            `,
          }}
        >

          <div className="text-center mb-5">
            <div
              style={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontSize: "4rem",
                fontWeight: "900",
                letterSpacing: "2px",
                marginBottom: "1rem",
                textShadow: "0 0 50px rgba(102, 126, 234, 0.5)",
                animation: "glow 3s ease-in-out infinite alternate",
              }}
            >
              🎪 Event Manager
            </div>
            <div
              style={{
                background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontSize: "1.5rem",
                fontWeight: "600",
                letterSpacing: "3px",
                marginBottom: "1rem",
              }}
            >
              IMPULSO CREATIVO
            </div>
            <p
              style={{
                color: "rgba(255,255,255,0.8)",
                fontSize: "1.1rem",
                maxWidth: "600px",
                margin: "0 auto",
                lineHeight: "1.8",
                fontWeight: "300",
              }}
            >
              Plataforma inteligente para la gestión de eventos culturales, educativos y sociales
              con tecnología de vanguardia
            </p>
          </div>

          <div className="d-flex justify-content-center mb-5">
            <div
              style={{
                background: "rgba(0,0,0,0.3)",
                borderRadius: "30px",
                padding: "8px",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "inset 0 2px 10px rgba(0,0,0,0.2)",
              }}
            >
              <button
                style={tabButtonStyle(activeTab === "list")}
                onClick={() => setActiveTab("list")}
                onMouseOver={(e) => {
                  if (activeTab !== "list") {
                    e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                    e.currentTarget.style.color = "#fff";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }
                }}
                onMouseOut={(e) => {
                  if (activeTab !== "list") {
                    e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                    e.currentTarget.style.color = "#a0a0a0";
                    e.currentTarget.style.transform = "translateY(0)";
                  }
                }}
              >
                📊 Lista de Eventos
              </button>
              <button
                style={{...tabButtonStyle(activeTab === "form"), marginLeft: "8px"}}
                onClick={() => {
                  setActiveTab("form");
                  cleanData();
                }}
                onMouseOver={(e) => {
                  if (activeTab !== "form") {
                    e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                    e.currentTarget.style.color = "#fff";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }
                }}
                onMouseOut={(e) => {
                  if (activeTab !== "form") {
                    e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                    e.currentTarget.style.color = "#a0a0a0";
                    e.currentTarget.style.transform = "translateY(0)";
                  }
                }}
              >
                ✨ Gestionar Eventos
              </button>
            </div>
          </div>
          
          <div>
            {activeTab === "list" && (
              <div style={{ animation: "fadeInUp 0.6s ease-out" }}>
                <ListEvents
                  setId={setId}
                  setActiveTab={setActiveTab}
                  updateEvent={updateEvent}
                  handleUpdate={handleUpdate}
                  deleteEvent={deleteEvent}
                  events={events}
                  loading={loading}
                />
              </div>
            )}
            
            {activeTab === "form" && (
              <div style={{ animation: "fadeInUp 0.6s ease-out" }}>
                <RegisterEvents
                  id={id}
                  setId={setId}
                  evento={evento}
                  setEvento={setEvento}
                  direccion={direccion}
                  setDireccion={setDireccion}
                  tipoEvento={tipoEvento}
                  setTipoEvento={setTipoEvento}
                  descripcion={descripcion}
                  setDescripcion={setDescripcion}
                  errorEvent={errorEvent}
                  setError={setError}
                  success={success}
                  setSuccess={setSuccess}
                  loading={loading}
                  setLoading={setLoading}
                  events={events}
                  setEvents={setEvents}
                  cleanData={cleanData}
                  handleSubmit={handleSubmit}
                  handleUpdate={handleUpdate}
                />
              </div>
            )}
          </div>


          <div className="text-center mt-5 pt-4" style={{ 
            borderTop: "1px solid rgba(255,255,255,0.1)",
            marginTop: "3rem !important"
          }}>
            
            <small
              style={{
                color: "rgba(255,255,255,0.6)",
                fontSize: "0.9rem",
                marginTop: "2rem",
                display: "block",
                fontStyle: "italic",
              }}
            >
              🚀 Potenciado por tecnología de vanguardia · Impulsando la creatividad comunitaria
            </small>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
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
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: `
              linear-gradient(135deg, 
                rgba(255,255,255,0.1) 0%, 
                rgba(255,255,255,0.05) 100%
              )
            `,
            backdropFilter: "blur(20px)",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "15px",
            boxShadow: "0 15px 35px rgba(0,0,0,0.2)",
            fontSize: "1rem",
            fontWeight: "500",
          },
          success: {
            iconTheme: {
              primary: "#4ade80",
              secondary: "#fff",
            },
          },
          error: {
            iconTheme: {
              primary: "#f87171",
              secondary: "#fff",
            },
          },
        }}
      />
    </div>
  );
};

export default Events;