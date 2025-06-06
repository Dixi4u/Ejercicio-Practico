import React from "react";

const Card = ({
  children,
  className = "",
  style = {},
  borderColor = "#00fff7",
  background = "linear-gradient(135deg, #232526 0%, #414345 100%)",
  textColor = "#00fff7",
  padding = "2rem",
  borderRadius = "1.5rem",
  shadow = true,
  hoverEffect = false,
  maxWidth = "400px",
  margin = "auto",
  onClick = null,
  ...props
}) => {
  const getCardStyles = () => {
    const baseStyles = {
      background,
      border: `2px solid ${borderColor}`,
      borderRadius,
      color: textColor,
      padding,
      maxWidth,
      margin,
      transition: "all 0.3s ease",
      cursor: onClick ? "pointer" : "default",
      ...style,
    };

    if (shadow) {
      baseStyles.boxShadow = "0 8px 32px 0 rgba(31, 38, 135, 0.37)";
    }

    return baseStyles;
  };

  const handleMouseOver = (e) => {
    if (hoverEffect) {
      e.currentTarget.style.transform = "translateY(-5px) scale(1.02)";
      e.currentTarget.style.boxShadow = "0 15px 50px 0 rgba(31, 38, 135, 0.5)";
    }
  };

  const handleMouseOut = (e) => {
    if (hoverEffect) {
      e.currentTarget.style.transform = "translateY(0) scale(1)";
      e.currentTarget.style.boxShadow = shadow 
        ? "0 8px 32px 0 rgba(31, 38, 135, 0.37)" 
        : "none";
    }
  };

  return (
    <div
      className={`card shadow-lg mb-4 ${className}`}
      style={getCardStyles()}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;