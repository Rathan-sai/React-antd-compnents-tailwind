import {
  Button,
  ConfigProvider,
  DatePicker,
  Select,
  Space,
  Typography,
} from "antd";
import arEG from "antd/es/locale/ar_EG";
import azAZ from "antd/es/locale/az_AZ";
import deDE from "antd/es/locale/de_DE";
import enUS from "antd/es/locale/en_US";
import esES from "antd/es/locale/es_ES";
import hiIN from "antd/es/locale/hi_IN";
import jaJP from "antd/es/locale/ja_JP";
import kaGE from "antd/es/locale/ka_GE";
import koKR from "antd/es/locale/ko_KR";
import roRO from "antd/es/locale/ro_RO";
import React from "react";

const { Title, Paragraph, Text } = Typography;

const locales = [
  { value: "esES", label: "Spanish (Spain)", locale: esES },
  { value: "arEG", label: "Arabic (Egypt)", locale: arEG },
  { value: "azAZ", label: "Azerbaijani (Azerbaijan)", locale: azAZ },
  { value: "deDE", label: "German (Germany)", locale: deDE },
  { value: "hiIN", label: "Hindi (India)", locale: hiIN },
  { value: "kaGE", label: "Georgian (Georgia)", locale: kaGE },
  { value: "jaJP", label: "Japanese (Japan)", locale: jaJP },
  { value: "koKR", label: "Korean (South Korea)", locale: koKR },
  { value: "roRO", label: "Romanian (Romania)", locale: roRO },
  { value: "enUS", label: "United States (America)", locale: enUS },
];

const Language = () => {
  const [locale, setLocale] = React.useState(enUS);

  const handleChange = (value) => {
    const selectedLocale = locales.find(
      (locale) => locale.value === value
    )?.locale;
    setLocale(selectedLocale || enUS);
  };

  const theme = {
    padding: "20px",
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#1DA57A",
          borderRadius: "15px",
        },
      }}
      componentSize="large"
      locale={locale}
    >
      <Space
        style={{
          display: "Flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
        size={20}
      >
        <DatePicker style={{ textAlign: "center", width: 220 }} />
        <Select
          style={{ width: 220 }}
          defaultValue="enUS"
          placeholder="Select a language"
          options={locales.map(({ value, label }) => ({ value, label }))}
          onSelect={handleChange}
        />
        <Button type="primary" style={{ width: 220 }}>
          Custom Themed Button
        </Button>
        <Button type="primary" style={{ width: 220 }}>
          Custom Themed Button
        </Button>
        <Button type="primary" style={{ width: 220 }}>
          Custom Themed Button
        </Button>
        <Button type="primary" style={{ width: 220 }}>
          Custom Themed Button
        </Button>
        <Button type="primary" style={{ width: 220 }}>
          Custom Themed Button
        </Button>
        <Button type="primary" style={{ width: 220 }}>
          Custom Themed Button
        </Button>
        <Typography>
          <Title level={2}>This is a Title</Title>
          <Paragraph>
            This is a paragraph that contains a passage of text. You can use the
            `Typography.Paragraph` component to format long blocks of text in
            your application.
          </Paragraph>
        </Typography>
      </Space>
    </ConfigProvider>
  );
};

export default Language;
