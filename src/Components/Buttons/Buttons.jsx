import {
  AntDesignOutlined,
  CustomerServiceOutlined,
  PoweroffOutlined,
  QuestionCircleOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import {
  Button,
  ConfigProvider,
  Divider,
  Flex,
  FloatButton,
  Radio,
  Space,
  Tooltip,
} from "antd";
import { createStyles } from "antd-style";
import React, { useState } from "react";
import "./Buttons.css";

const useStyle = createStyles(({ prefixCls, css }) => ({
  linearGradientButton: css`
    &.${prefixCls}-btn-primary:not([disabled]):not(
        .${prefixCls}-btn-dangerous
      ) {
      border-width: 0;

      > span {
        position: relative;
      }

      &::before {
        content: "";
        background: linear-gradient(135deg, #6253e1, #04befe);
        position: absolute;
        inset: 0;
        opacity: 1;
        transition: all 0.3s;
        border-radius: inherit;
      }

      &:hover::before {
        opacity: 0;
      }
    }
  `,
}));

const Buttons = () => {
  const [position, setPosition] = useState("end");
  const [loadings, setLoadings] = useState([]);
  const { styles } = useStyle();
  const [rows, setRows] = useState(1);

  const article =
    "To be, or not to be, that is the question: Whether it is nobler in the mind to suffer. The slings and arrows of outrageous fortune Or to take arms against a sea of troubles, And by opposing end them? To die: to sleep; No more; and by a sleep to say we end The heart-ache and the thousand natural shocks That flesh is heir to, 'tis a consummation Devoutly to be wish'd. To die, to sleep To sleep- perchance to dream: ay, there's the rub! For in that sleep of death what dreams may come When we have shuffled off this mortal coil, Must give us pause. There 's the respect That makes calamity of so long life";

  const enterLoading = (index) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  };

  return (
    <div>
      <Space size={20} wrap>
        <Button className="button-class">button 0</Button>
        <Button className="button-class">button 1</Button>
        <Button className="button-class">button 2</Button>
        <Button className="button-class">button 3</Button>
        <Button className="button-class">button 4</Button>
        <Button className="button-class">button 5</Button>
        <Button className="button-class">button 6</Button>
      </Space>
      <Flex gap="20px" wrap>
        <Button className="button-class" type="primary">
          Primary Button
        </Button>
        <Button className="button-class">Default Button</Button>
        <Button className="button-class" type="dashed">
          Dashed Button
        </Button>
        <Button className="button-class" type="text">
          Text Button
        </Button>
        <Button className="button-class" type="link" href="https://ant.design/">
          Link Button
        </Button>
        <Flex wrap gap="small">
          <Tooltip title="search">
            <Button
              className="button-class"
              type="primary"
              shape="default"
              icon={<SearchOutlined />}
            />
          </Tooltip>
          <Button type="primary" shape="circle">
            A
          </Button>
          <Button type="primary" icon={<SearchOutlined />}>
            Search
          </Button>
          <Tooltip title="search">
            <Button shape="circle" icon={<SearchOutlined />} />
          </Tooltip>
          <Button icon={<SearchOutlined />}>Search</Button>
          <Tooltip title="search">
            <Button shape="circle" icon={<SearchOutlined />} />
          </Tooltip>
          <Button icon={<SearchOutlined />}>Search</Button>
          <Tooltip title="search">
            <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
          </Tooltip>
          <Button type="dashed" icon={<SearchOutlined />}>
            Search
          </Button>
          <Button icon={<SearchOutlined />} href="https://www.google.com" />
        </Flex>
      </Flex>
      <Divider orientation="left">next examples</Divider>
      <Space>
        <Radio.Group
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          buttonStyle="solid"
        >
          <Radio.Button className="button-class" value="start">
            start
          </Radio.Button>
          <Radio.Button className="button-class" value="middle">
            fun1
          </Radio.Button>
          <Radio.Button className="button-class" value="route">
            fun2
          </Radio.Button>
          <Radio.Button className="button-class" value="end">
            end
          </Radio.Button>
        </Radio.Group>
      </Space>
      <Divider orientation="left">Preview</Divider>
      <Flex gap="small">
        <Flex wrap gap="small">
          <Tooltip title="search">
            <Button type="primary" shape="circle" icon={<SearchOutlined />} />
          </Tooltip>
          <Button type="primary" shape="circle">
            A
          </Button>
          <Button
            type="primary"
            icon={<SearchOutlined />}
            iconPosition={position}
          >
            Search
          </Button>
          <Tooltip title="search">
            <Button shape="circle" icon={<SearchOutlined />} />
          </Tooltip>
          <Button icon={<SearchOutlined />} iconPosition={position}>
            Search
          </Button>
        </Flex>
        <Flex wrap gap="small">
          <Tooltip title="search">
            <Button shape="circle" icon={<SearchOutlined />} />
          </Tooltip>
          <Button icon={<SearchOutlined />} type="text" iconPosition={position}>
            Search
          </Button>
          <Tooltip title="search">
            <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
          </Tooltip>
          <Button
            type="dashed"
            icon={<SearchOutlined />}
            iconPosition={position}
          >
            Search
          </Button>
          <Button
            icon={<SearchOutlined />}
            href="https://www.google.com"
            iconPosition={position}
          />
          <Button type="primary" loading={true} iconPosition={position}>
            Loading
          </Button>
        </Flex>
        <Flex gap="small" wrap>
          <Button type="primary">Primary</Button>
          <Button type="primary" disabled>
            Primary(disabled)
          </Button>
        </Flex>
        <Flex gap="small" wrap>
          <Button ghost>Ghost</Button>
          <Button ghost disabled>
            Ghost(disabled)
          </Button>

          <Button
            type="primary"
            loading={loadings[0]}
            onClick={() => enterLoading(0)}
          >
            Click me!
          </Button>
          <Button
            type="primary"
            icon={<PoweroffOutlined />}
            loading={loadings[1]}
            onClick={() => enterLoading(1)}
          >
            Click me!
          </Button>
          <Button
            type="primary"
            icon={<PoweroffOutlined />}
            loading={loadings[2]}
            onClick={() => enterLoading(2)}
          />
          <Button type="primary" danger>
            Primary
          </Button>
          <Button danger>Default</Button>
          <Button type="dashed" danger>
            Dashed
          </Button>
          <Button type="text" danger>
            Text
          </Button>
          <Button type="link" danger>
            Link
          </Button>
        </Flex>
      </Flex>
      <Divider orientation="left">Preview</Divider>
      <ConfigProvider
        button={{
          className: styles.linearGradientButton,
        }}
      >
        <Space>
          <Button type="primary" size="large" icon={<AntDesignOutlined />}>
            Gradient Button
          </Button>
          <Button size="large">Button</Button>
        </Space>
      </ConfigProvider>
      <Divider orientation="center">floating button</Divider>
      <div>
        <FloatButton
          style={{
            insetInlineEnd: 24,
          }}
          onClick={() => console.log("floating button Clicked")}
        />
        ;
        <FloatButton
          icon={<QuestionCircleOutlined />}
          type="primary"
          style={{
            insetInlineEnd: 84,
          }}
        />
        <FloatButton
          icon={<QuestionCircleOutlined />}
          type="default"
          style={{
            insetInlineEnd: 144,
          }}
        />
        <FloatButton
          style={{
            insetInlineEnd: 204,
          }}
          tooltip={<div>Documents</div>}
        />
        <FloatButton.Group
          shape="circle"
          style={{
            insetInlineEnd: 264,
          }}
        >
          <FloatButton icon={<QuestionCircleOutlined />} />
          <FloatButton />
          <FloatButton.BackTop visibilityHeight={0} />
        </FloatButton.Group>
        <FloatButton
          shape="square"
          type="primary"
          style={{
            insetInlineEnd: 324,
          }}
          icon={<CustomerServiceOutlined />}
        />
        <FloatButton.BackTop
          shape="circle"
          style={{
            insetInlineEnd: 384,
          }}
        />
      </div>
      <Divider>floating menu</Divider>
      <div>
        {/* <FloatButton
          shape="circle"
          style={{
            insetInlineEnd: 24 + 70 + 70,
          }}
          badge={{
            dot: true,
          }}
        />
        <FloatButton.Group
          shape="circle"
          style={{
            insetInlineEnd: 24 + 70,
          }}
        >
          <FloatButton
            href="https://ant.design/index-cn"
            tooltip={<div>custom badge color</div>}
            badge={{
              count: 5,
              color: "blue",
            }}
          />
          <FloatButton
            badge={{
              count: 5,
            }}
          />
        </FloatButton.Group> */}
        {/* <FloatButton.Group shape="circle">
          <FloatButton
            badge={{
              count: 12,
            }}
            icon={<QuestionCircleOutlined />}
          />
          <FloatButton
            badge={{
              count: 123,
              overflowCount: 999,
            }}
          />
          <FloatButton.BackTop visibilityHeight={0} />
        </FloatButton.Group> */}
      </div>
      <Divider>Typographu</Divider>
    </div>
  );
};

export default Buttons;
