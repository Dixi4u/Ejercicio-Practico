import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetchEventData from "../components/Events/hooks/useFetchEventData";

const Dashboard = () => {
  const { events, loading } = useFetchEventData();
  const [stats, setStats] = useState({
    totalEvents: 0,
    culturalEvents: 0,
    educationalEvents: 0,
    socialEvents: 0,
  });

  useEffect(() => {
    document.title = "Dashboard - Impulso Creativo";
  }, []);

  useEffect(() => {
    if (events && events.length > 0) {
      const totalEvents = events.length;
      const culturalEvents = events.filter(event => event.tipoEvento === "Cultural").length;
      const educationalEvents = events.filter(event => event.tipoEvento === "Educativo").length;
      const socialEvents = events.filter(event => event.tipoEvento === "Social").length;

      setStats({
        totalEvents,
        culturalEvents,
        educationalEvents,
        socialEvents,
      });
    }
  }, [events]);

  const dashboardCards = [
    {
      title: "Gestionar Eventos",
      description: "Crear, leer, actualizar y eliminar eventos",
      icon: "🎪",
      link: "/events",
      color: "#667eea",
      bgGradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      isClickable: true,
    },
    {
      title: "Total de Eventos",
      description: `${stats.totalEvents} eventos registrados`,
      icon: "📊",
      color: "#f093fb",
      bgGradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      isClickable: false,
    }
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
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
          top: "15%",
          right: "15%",
          width: "300px",
          height: "300px",
          background: "linear-gradient(45deg, #667eea, #764ba2)",
          borderRadius: "50%",
          filter: "blur(120px)",
          opacity: 0.15,
          animation: "float 8s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "10%",
          width: "250px",
          height: "250px",
          background: "linear-gradient(45deg, #f093fb, #f5576c)",
          borderRadius: "50%",
          filter: "blur(100px)",
          opacity: 0.15,
          animation: "float 6s ease-in-out infinite reverse",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="text-center mb-5">
          <div
            style={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontSize: "4.5rem",
              fontWeight: "900",
              letterSpacing: "3px",
              marginBottom: "1rem",
              animation: "glow 3s ease-in-out infinite alternate",
            }}
          >
            ⚡ CONTROL CENTER
          </div>
          <div
            style={{
              background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontSize: "1.8rem",
              fontWeight: "700",
              letterSpacing: "4px",
              marginBottom: "1.5rem",
            }}
          >
            IMPULSO CREATIVO
          </div>
          <p
            style={{
              color: "rgba(255,255,255,0.8)",
              fontSize: "1.2rem",
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: "1.8",
              fontWeight: "300",
            }}
          >
            Centro de comando inteligente para la gestión avanzada de eventos culturales, 
            educativos y sociales con tecnología de última generación
          </p>
        </div>

        <div className="row g-4 mb-5">
          {dashboardCards.map((card, index) => (
            <div key={index} className="col-lg-6 col-md-6 col-sm-12">
              {card.isClickable ? (
                // Tarjeta clickeable con efectos futuristas
                <Link
                  to={card.link}
                  className="text-decoration-none"
                  style={{ display: "block" }}
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
                      border: `2px solid ${card.color}`,
                      borderRadius: "25px",
                      padding: "3rem",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      cursor: "pointer",
                      position: "relative",
                      overflow: "hidden",
                      boxShadow: `
                        0 25px 50px rgba(0,0,0,0.2),
                        0 0 30px ${card.color}40
                      `,
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = "translateY(-15px) scale(1.03)";
                      e.currentTarget.style.boxShadow = `
                        0 35px 70px rgba(0,0,0,0.3),
                        0 0 50px ${card.color}60
                      `;
                      e.currentTarget.style.background = card.bgGradient;
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = "translateY(0) scale(1)";
                      e.currentTarget.style.boxShadow = `
                        0 25px 50px rgba(0,0,0,0.2),
                        0 0 30px ${card.color}40
                      `;
                      e.currentTarget.style.background = `
                        linear-gradient(135deg, 
                          rgba(255,255,255,0.1) 0%, 
                          rgba(255,255,255,0.05) 100%
                        )
                      `;
                    }}
                  >
                    <div className="text-center">
                      <div
                        style={{
                          fontSize: "4rem",
                          marginBottom: "1.5rem",
                          filter: `drop-shadow(0 0 20px ${card.color})`,
                          animation: "pulse 2s ease-in-out infinite",
                        }}
                      >
                        {card.icon}
                      </div>
                      <h3
                        style={{
                          color: "#fff",
                          fontWeight: "700",
                          fontSize: "1.5rem",
                          letterSpacing: "1px",
                          marginBottom: "1rem",
                          textShadow: `0 0 20px ${card.color}`,
                        }}
                      >
                        {card.title}
                      </h3>
                      <p
                        style={{
                          color: "rgba(255,255,255,0.8)",
                          fontSize: "1.1rem",
                          lineHeight: "1.6",
                          fontWeight: "400",
                        }}
                      >
                        {card.description}
                      </p>
                      

                      <div
                        style={{
                          marginTop: "1.5rem",
                          padding: "0.75rem 1.5rem",
                          background: "rgba(255,255,255,0.1)",
                          borderRadius: "15px",
                          border: `1px solid ${card.color}`,
                          backdropFilter: "blur(10px)",
                        }}
                      >
                        <small style={{ 
                          color: card.color, 
                          fontWeight: "600",
                          fontSize: "0.9rem"
                        }}>
                          🚀 Clic para acceder
                        </small>
                      </div>
                    </div>
                  </div>
                </Link>
              ) : (
                // Tarjeta solo informativa con diseño futurista
                <div
                  style={{
                    background: `
                      linear-gradient(135deg, 
                        rgba(255,255,255,0.1) 0%, 
                        rgba(255,255,255,0.05) 100%
                      )
                    `,
                    backdropFilter: "blur(20px)",
                    border: `2px solid ${card.color}`,
                    borderRadius: "25px",
                    padding: "3rem",
                    cursor: "default",
                    position: "relative",
                    overflow: "hidden",
                    boxShadow: `
                      0 25px 50px rgba(0,0,0,0.2),
                      0 0 30px ${card.color}40
                    `,
                  }}
                >
                  <div className="text-center">
                    <div
                      style={{
                        fontSize: "4rem",
                        marginBottom: "1.5rem",
                        filter: `drop-shadow(0 0 20px ${card.color})`,
                      }}
                    >
                      {card.icon}
                    </div>
                    <h3
                      style={{
                        color: "#fff",
                        fontWeight: "700",
                        fontSize: "1.5rem",
                        letterSpacing: "1px",
                        marginBottom: "1rem",
                        textShadow: `0 0 20px ${card.color}`,
                      }}
                    >
                      {card.title}
                    </h3>
                    <p
                      style={{
                        color: "rgba(255,255,255,0.8)",
                        fontSize: "1.1rem",
                        lineHeight: "1.6",
                        fontWeight: "400",
                        marginBottom: "1.5rem",
                      }}
                    >
                      {card.description}
                    </p>
                    
                    <div
                      style={{
                        background: card.bgGradient,
                        borderRadius: "15px",
                        padding: "1rem",
                        boxShadow: `0 10px 25px ${card.color}30`,
                      }}
                    >
                      <div style={{
                        color: "#fff",
                        fontWeight: "700",
                        fontSize: "2rem",
                        marginBottom: "0.5rem"
                      }}>
                        {stats.totalEvents}
                      </div>
                      <small style={{ 
                        color: "rgba(255,255,255,0.9)", 
                        fontWeight: "600",
                        fontSize: "0.9rem"
                      }}>
                        📈 Datos en tiempo real
                      </small>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

    

        {loading && (
          <div 
            className="text-center mt-5"
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "20px",
              padding: "3rem",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <div
              style={{
                width: "80px",
                height: "80px",
                border: "4px solid rgba(102, 126, 234, 0.2)",
                borderTop: "4px solid #667eea",
                borderRadius: "50%",
                animation: "spin 1.5s linear infinite",
                margin: "0 auto 2rem",
              }}
            />
            <p style={{ 
              color: "#fff", 
              fontSize: "1.2rem", 
              fontWeight: "500",
              marginBottom: "0.5rem"
            }}>
              Sincronizando sistema...
            </p>
            <small style={{ color: "rgba(255,255,255,0.7)" }}>
              Cargando estadísticas en tiempo real
            </small>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(5deg); }
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
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Dashboard;