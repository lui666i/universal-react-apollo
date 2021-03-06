import React from "react";

import {
  REHYDRATION_STATE_DATA_KEY,
  ROOT_CONTAINER_ID
} from "./config/constants";

const Html = ({
  content,
  initialState,
  head,
  bodyBottomElement,
  htmlTagAttrs = {},
  inlineStateNonce
}) => {
  return (
    <html {...htmlTagAttrs}>
      <head dangerouslySetInnerHTML={{ __html: head }} />
      <body>
        <div
          id={ROOT_CONTAINER_ID}
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <script
          nonce={inlineStateNonce}
          dangerouslySetInnerHTML={{
            __html: `window.${REHYDRATION_STATE_DATA_KEY}=${JSON.stringify(
              initialState
            ).replace(/</g, "\\u003c")}`
          }}
        />
        {bodyBottomElement}
      </body>
    </html>
  );
};

export default Html;
