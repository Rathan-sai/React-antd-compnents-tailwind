import { Button, Card } from "antd";
import { motion } from "framer-motion";
import React from "react";

const Intro = () => {
  return (
    <div style={{ padding: "20px" }}>
      <motion.div
        initial={{ opacity: 0, y: -550, x: -550 }}
        animate={{ opacity: 1, y: 200, x: 10 }}
        transition={{ duration: 2.5 }}
      >
        <Card
          title="Welcome to My App"
          style={{ width: 300, margin: "0 auto" }}
        >
          <p>This is an Ant Design Card component.</p>
          <Button type="primary">Ant Design Button</Button>
        </Card>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div
            style={{
              height: "100px",
              width: "100px",
              borderRadius: "50%",
              backgroundColor: "blue",
            }}
          ></div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Intro;
