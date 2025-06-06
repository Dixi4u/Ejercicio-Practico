import React from "react";

const Title = ({ 
  level = 1, 
  children, 
  color = "#00fff7", 
  textAlign = "center",
  className = "",
  style = {},
  glowEffect = true,
  letterSpacing = "2px"
}) => {
  const getDefaultStyles = () => {
    const baseStyles = {
      color,
      textAlign,
      letterSpacing,
      fontWeight: "bold",
      marginBottom: "1rem",
      ...style,
    };

    if (glowEffect) {
      baseStyles.textShadow = `0 0 10px ${color}, 0 0 20px ${color}`;
    }

    switch (level) {
      case 1:
        return {
          ...baseStyles,
          fontSize: "3rem",
          letterSpacing: "3px",
        };
      case 2:
        return {
          ...baseStyles,
          fontSize: "2.5rem",
          letterSpacing: "2.5px",
        };
      case 3:
        return {
          ...baseStyles,
          fontSize: "2rem",
          letterSpacing: "2px",
        };
      case 4:
        return {
          ...baseStyles,
          fontSize: "1.5rem",
          letterSpacing: "1.5px",
        };
      case 5:
        return {
          ...baseStyles,
          fontSize: "1.25rem",
          letterSpacing: "1px",
        };
      case 6:
        return {
          ...baseStyles,
          fontSize: "1rem",
          letterSpacing: "0.5px",
        };
      default:
        return baseStyles;
    }
  };

  const Tag = `h${level}`;
  const finalClassName = `fw-bold ${className}`;

  return (
    <Tag 
      className={finalClassName}
      style={getDefaultStyles()}
    >
      {children}
    </Tag>
  );
};

export default Title;