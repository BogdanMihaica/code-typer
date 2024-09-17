import { useEffect, useState } from "react";
import Background from "../../helpers/Background/Background";
import "./Landing.css";
import { OptionButton } from "../../custom/OptionButton/OptionButton";
import { ContentWrapper } from "../../helpers/ContentWrapper/ContentWrapper";
import { FancyBackground } from "../../helpers/FancyBackground/FancyBackground";
import { Outlet } from "react-router-dom";

const Landing = () => {
  const [typedText, setTypedText] = useState("");
  const [isAnimationDone, setIsAnimationDone] = useState(false);
  const fullText = "CodeTyper!";
  const typingDelay = 100;
  const initialDelay = 1000;
  const mistakeIndex = 4;

  useEffect(() => {
    let timeout;

    const typeText = (index, typoDone = false) => {
      if (index < fullText.length) {
        if (index === mistakeIndex && !typoDone) {
          setTypedText((prev) => prev + "r");
          timeout = setTimeout(() => {
            setTypedText((prev) => prev.slice(0, -1));
            typeText(index, true);
          }, 220);
        } else {
          setTypedText((prev) => prev + fullText[index]);
          timeout = setTimeout(
            () => typeText(index + 1, typoDone),
            typingDelay
          );
        }
      } else {
        // Animation completed
        setIsAnimationDone(true);
      }
    };

    timeout = setTimeout(() => typeText(0), initialDelay);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Background color="var(--primary-color)" />
      <FancyBackground />
      <h1 className="title">{"Welcome to " + typedText}</h1>
      <div
        className="wrapper"
        style={{
          opacity: isAnimationDone ? 1 : 0,
          transition: "opacity 1s ease-out, transform 1s ease-out",
          transform: isAnimationDone ? "translateY(0)" : "translateY(-20px)",
        }}
      >
        <OptionButton
          text="Practice typing skills"
          color="var(--valid-hover)"
          hoverColor="var(--valid)"
          nav="type"
        />
        <OptionButton
          text="Sign in"
          color="#ffffff90"
          nav="login"
          hoverColor="white"
        />
      </div>
    </>
  );
};
export default Landing;
