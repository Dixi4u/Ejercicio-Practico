import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Bienvenido - Impulso Creativo";
    
    // Barra de progreso animada
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 60);

    // Auto-redirect después de completar la carga
    const timer = setTimeout(() => {
      handleProceed();
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, []);

  const handleProceed = () => {
    setShowWelcome(false);
    setTimeout(() => {
      navigate("/dashboard");
    }, 800);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: `
          radial-gradient(circle at 30% 40%, rgba(120, 119, 198, 0.4) 0%, transparent 50%),
          radial-gradient(circle at 70% 30%, rgba(255, 119, 198, 0.4) 0%, transparent 50%),
          radial-gradient(circle at 20% 70%, rgba(120, 219, 255, 0.4) 0%, transparent 50%),
          linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%)
        `,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        opacity: showWelcome ? 1 : 0,
        transition: "opacity 0.8s ease-in-out",
      }}
    >

      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "20%",
          width: "200px",
          height: "200px",
          background: "linear-gradient(45deg, #667eea, #764ba2)",
          borderRadius: "50%",
          filter: "blur(80px)",
          opacity: 0.2,
          animation: "float 6s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "30%",
          left: "15%",
          width: "250px",
          height: "250px",
          background: "linear-gradient(45deg, #f093fb, #f5576c)",
          borderRadius: "50%",
          filter: "blur(100px)",
          opacity: 0.2,
          animation: "float 8s ease-in-out infinite reverse",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "60%",
          right: "10%",
          width: "150px",
          height: "150px",
          background: "linear-gradient(45deg, #43e97b, #38f9d7)",
          borderRadius: "50%",
          filter: "blur(60px)",
          opacity: 0.2,
          animation: "float 7s ease-in-out infinite",
        }}
      />

      <div
        style={{
          textAlign: "center",
          background: `
            linear-gradient(135deg, 
              rgba(255,255,255,0.15) 0%, 
              rgba(255,255,255,0.05) 100%
            )
          `,
          backdropFilter: "blur(25px)",
          border: "1px solid rgba(255,255,255,0.3)",
          borderRadius: "30px",
          padding: "4rem 3rem",
          maxWidth: "700px",
          width: "90%",
          position: "relative",
          overflow: "hidden",
          boxShadow: `
            0 35px 80px rgba(0,0,0,0.3),
            inset 0 1px 0 rgba(255,255,255,0.2)
          `,
          animation: "slideInUp 1s ease-out",
        }}
      >

        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
              radial-gradient(circle at 20% 80%, rgba(102, 126, 234, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(240, 147, 251, 0.1) 0%, transparent 50%)
            `,
            pointerEvents: "none",
          }}
        />


        <div className="mb-4" style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              fontSize: "6rem",
              marginBottom: "1rem",
              animation: "bounce 2s ease-in-out infinite",
              filter: "drop-shadow(0 0 30px rgba(102, 126, 234, 0.8))",
            }}
          >
            🎪
          </div>
          
          <h1
            style={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontSize: "4rem",
              fontWeight: "900",
              letterSpacing: "3px",
              marginBottom: "1rem",
              animation: "glow 3s ease-in-out infinite alternate",
            }}
          >
            ¡BIENVENIDO!
          </h1>
          
          <h2
            style={{
              background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontSize: "2rem",
              fontWeight: "700",
              letterSpacing: "4px",
              marginBottom: "2rem",
            }}
          >
            IMPULSO CREATIVO
          </h2>
        </div>

        <div className="mb-4" style={{ position: "relative", zIndex: 1 }}>
          <p
            style={{
              color: "rgba(255,255,255,0.9)",
              fontSize: "1.3rem",
              lineHeight: "1.8",
              fontWeight: "300",
              marginBottom: "1.5rem",
            }}
          >
            Sistema Inteligente de Administración de Eventos
          </p>
          <p
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "1.1rem",
              lineHeight: "1.6",
              fontWeight: "300",
            }}
          >
            Plataforma de vanguardia para la gestión integral de eventos culturales, 
            educativos y sociales con tecnología de última generación
          </p>
        </div>

        <div className="mb-4" style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              background: "rgba(255,255,255,0.1)",
              borderRadius: "25px",
              height: "8px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.2)",
              backdropFilter: "blur(10px)",
            }}
          >
            <div
              style={{
                background: "linear-gradient(90deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
                height: "100%",
                width: `${progress}%`,
                borderRadius: "25px",
                transition: "width 0.3s ease",
                boxShadow: "0 0 20px rgba(102, 126, 234, 0.6)",
              }}
            />
          </div>
          <p
            style={{
              color: "rgba(255,255,255,0.8)",
              fontSize: "1rem",
              marginTop: "1rem",
              fontWeight: "500",
            }}
          >
            Inicializando sistema... {progress}%
          </p>
        </div>

        <div style={{ position: "relative", zIndex: 1 }}>
          <button
            onClick={handleProceed}
            style={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              color: "#fff",
              border: "none",
              borderRadius: "25px",
              padding: "1.2rem 3rem",
              fontSize: "1.2rem",
              fontWeight: "600",
              letterSpacing: "1.5px",
              cursor: "pointer",
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              boxShadow: "0 15px 35px rgba(102, 126, 234, 0.4)",
              backdropFilter: "blur(10px)",
              position: "relative",
              overflow: "hidden",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-5px) scale(1.05)";
              e.currentTarget.style.boxShadow = "0 25px 50px rgba(102, 126, 234, 0.6)";
              e.currentTarget.style.background = "linear-gradient(135deg, #764ba2 0%, #f093fb 100%)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow = "0 15px 35px rgba(102, 126, 234, 0.4)";
              e.currentTarget.style.background = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
            }}
          >
            🚀 Ingresar al Sistema
          </button>
        </div>

        <div className="mt-4" style={{ position: "relative", zIndex: 1 }}>
          <small
            style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: "0.9rem",
              fontStyle: "italic"
            }}
          >
            Desarrollado para la gestión eficiente de eventos comunitarios
          </small>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(3deg); }
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
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes slideInUp {
          0% { 
            transform: translateY(100px);
            opacity: 0;
          }
          100% { 
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Welcome;