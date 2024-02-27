"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

type LineWithAnimationProps = {
  line: string;
};

const LineWithAnimation = ({ line }: LineWithAnimationProps) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  return (
    <motion.div ref={scope}>
      {line.split(" ").map((word, idx) => (
        <motion.span
          key={word + idx}
          className="dark:text-white text-black opacity-0"
          style={{ lineHeight: "3.0" }}
        >
          {word}{" "}
        </motion.span>
      ))}
    </motion.div>
  );
};

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const lines: string[] = words.split("\n"); // Ensure that lines are explicitly typed as an array of strings

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="dark:text-white text-black text-2xl leading-snug tracking-wide">
          {lines.map((line, lineIndex) => (
            <LineWithAnimation key={lineIndex} line={line} />
          ))}
        </div>
      </div>
    </div>
  );
};