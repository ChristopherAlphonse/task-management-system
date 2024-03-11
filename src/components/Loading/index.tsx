import "./index.css";

import { motion } from "framer-motion";

function renderElements() {
  const elements = [];
  for (let i = 0; i < 10; i++) {
    elements.push(
      <motion.div key={i} className="banter-loader__box"></motion.div>,
    );
  }
  return elements;
}

const LoadingComponent = () => {
  return (
    <motion.div className="h-screen z-50 bg-white">
      <div className="banter-loader">{renderElements()}</div>
    </motion.div>
  );
};

export default LoadingComponent;
