import React from "react";
import { addLocalData } from "react-intl";
import enLocaleData from "react-intl/locale-data/en";
import { ContentUploader } from "box-ui-elements";
import { ContentExplorer } from "box-ui-elements";
import messages from "box-ui-elements/i18n/en-US";
import "box-ui-elements/dist/uploader.css";
import "box-ui-elements/dist/explorer.css";
import { render } from "react-dom";

render(
  <ContentExplorer
    token="seyWWlXK0xZ11PQq4rpptGm0O7qibnOX"
    language="en-US"
    messages={messages}
    logoUrl="https://rawcdn.githack.com/dedstopChaddVanKomen/vas_box/6d155a2ae4beeaba9347c2d567fcd9977cce4d0d/public/vaslogo.png"
  />,
  document.querySelector(".container")
);
