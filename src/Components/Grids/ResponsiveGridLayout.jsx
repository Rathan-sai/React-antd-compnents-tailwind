import { Col, Row } from "antd";
import React from "react";

const ResponsiveGridLayout = () => (
  <Row gutter={[16, 16]}>
    <Col
      xs={24}
      sm={12}
      md={8}
      lg={6}
      xl={4}
      style={{ backgroundColor: "#e6f7ff", padding: "20px" }}
    >
      Column 1
    </Col>
    <Col
      xs={24}
      sm={12}
      md={8}
      lg={6}
      xl={4}
      style={{ backgroundColor: "#d9f7be", padding: "20px" }}
    >
      Column 2
    </Col>
    <Col
      xs={24}
      sm={12}
      md={8}
      lg={6}
      xl={4}
      style={{ backgroundColor: "#fff1b8", padding: "20px" }}
    >
      Column 3
    </Col>
    <Col
      xs={24}
      sm={12}
      md={8}
      lg={6}
      xl={4}
      style={{ backgroundColor: "#ffe7ba", padding: "20px" }}
    >
      Column 4
    </Col>
  </Row>
);

export default ResponsiveGridLayout;
