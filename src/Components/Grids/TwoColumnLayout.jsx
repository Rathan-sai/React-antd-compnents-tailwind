import { Col, Row } from "antd";
import React from "react";

const TwoColumnLayout = () => (
  <Row>
    <Col span={12} style={{ backgroundColor: "#f0f2f5", padding: "20px" }}>
      Column 1 (50% width)
    </Col>
    <Col span={12} style={{ backgroundColor: "#fafafa", padding: "20px" }}>
      Column 2 (50% width)
    </Col>
  </Row>
);

export default TwoColumnLayout;
