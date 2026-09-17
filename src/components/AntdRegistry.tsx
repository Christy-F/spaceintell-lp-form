"use client";

import React from "react";
import { StyleProvider, createCache, extractStyle } from "@ant-design/cssinjs";
import { ConfigProvider } from "antd";
import { useServerInsertedHTML } from "next/navigation";

export default function AntdRegistry({ children }: { children: React.ReactNode }) {
  const cache = React.useMemo(() => createCache(), []);
  useServerInsertedHTML(() => (
    <style
      id="antd"
      dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }}
    />
  ));
  return (
    <StyleProvider cache={cache}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#E2A63B",
            colorBgContainer: "#FAF8F4",
            colorBorder: "#C7C0AC",
            colorText: "#1B1D1F",
            colorTextSecondary: "#5B5F58",
            colorTextPlaceholder: "rgba(91,95,88,0.45)",
            borderRadius: 2,
            fontFamily: "var(--font-inter), Inter, sans-serif",
            fontSize: 14,
            colorFillTertiary: "#EDEAE2",
          },
          components: {
            Form: {
              labelFontSize: 10,
            },
            Select: {
              optionSelectedBg: "#FFF3CD",
              optionActiveBg: "#EDEAE2",
            },
            Input: {
              activeShadow: "0 0 0 2px rgba(226,166,59,0.15)",
            },
            Button: {
              defaultBg: "#E2A63B",
              defaultColor: "#1B1D1F",
              defaultBorderColor: "transparent",
              defaultHoverBg: "#BD850F",
              defaultHoverColor: "#1B1D1F",
              defaultHoverBorderColor: "transparent",
            },
          },
        }}
      >
        {children}
      </ConfigProvider>
    </StyleProvider>
  );
}
