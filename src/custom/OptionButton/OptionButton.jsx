import { useState } from "react";
import "./OptionButton.css";
import { useNavigate } from "react-router-dom";
export const OptionButton = ({ text, color, nav, hoverColor }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const navigate = useNavigate();
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="button"
      style={{ backgroundColor: isHovered ? hoverColor : color }}
      onClick={() => navigate(nav)}
    >
      <p>{text}</p>
    </div>
  );
};
