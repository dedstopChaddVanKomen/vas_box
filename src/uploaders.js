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
    token="WF8OgZj26CsIuMjerLXLWhRAJeoeJePL"
    language="en-US"
    messages={messages}
    logoUrl="https://uploads.codesandbox.io/uploads/user/d7c4d8a9-778f-4d91-b296-19937e3451f1/Hgr2-vaslogo.png"
  />,
  document.querySelector(".container")
);
