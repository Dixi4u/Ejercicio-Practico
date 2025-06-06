import React from "react";

const Message = ({ type = "info", message, onClose, autoClose = true }) => {
  const getMessageStyles = () => {
    const baseStyles = {
      padding: "1rem 1.5rem",
      borderRadius: "0.75rem",
      marginBottom: "1rem",
      border: "2px solid",
      boxShadow: "0 4px 15px 0 rgba(0,0,0,0.2)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      animation: "slideIn 0.3s ease-out",
    };

    switch (type) {
      case "success":
        return {
          ...baseStyles,
          background: "linear-gradient(135deg, #1a4c2e 0%, #2d5a3d 100%)",
          borderColor: "#00ff88",
          color: "#00ff88",
        };
      case "error":
        return {
          ...baseStyles,
          background: "linear-gradient(135deg, #4c1a1a 0%, #5a2d2d 100%)",
          borderColor: "#ff6b6b",
          color: "#ff6b6b",
        };
      case "warning":
        return {
          ...baseStyles,
          background: "linear-gradient(135deg, #4c4c1a 0%, #5a5a2d 100%)",
          borderColor: "#ffe66d",
          color: "#ffe66d",
        };
      default:
        return {
          ...baseStyles,
          background: "linear-gradient(135deg, #1a4c4c 0%, #2d5a5a 100%)",
          borderColor: "#00fff7",
          color: "#00fff7",
        };
    }
  };

  const getIcon = () => {
    switch (type) {
      case "success":
        return "✅";
      case "error":
        return "❌";
      case "warning":
        return "⚠️";
      default:
        return "ℹ️";
    }
  };

  React.useEffect(() => {
    if (autoClose && onClose) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [autoClose, onClose]);

  if (!message) return null;

  return (
    <>
      <div style={getMessageStyles()}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span style={{ fontSize: "1.2rem" }}>{getIcon()}</span>
          <span style={{ fontWeight: "500", letterSpacing: "0.5px" }}>
            {message}
          </span>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            style={{
              background: "transparent",
              border: "none",
              color: "inherit",
              fontSize: "1.2rem",
              cursor: "pointer",
              padding: "0.25rem",
              borderRadius: "50%",
              transition: "all 0.2s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.1)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "transparent";
            }}
          >
            ✕
          </button>
        )}
      </div>
      
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default Message;