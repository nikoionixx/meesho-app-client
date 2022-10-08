import React from "react";
import RenderIf from "../renderIf/renderIf";
import { Oval } from "react-loader-spinner";

const Button = ({ buttonTitle, type = "button", handleSubmit , isLoader = false }) => {
  const PRIMARY_BUTTON_CLASS_NAMES =
    "bg-primary px-10 py-3 text-white rounded w-full flex justify-center items-center gap-2";

  function _renderSpinner() {
    return (
      <Oval
        height={20}
        width={20}
        color="#ffffff"
        wrapperStyle={{}}
        wrapperClass=""
        visible={isLoader}
        ariaLabel="oval-loading"
        secondaryColor="#fafafa"
        strokeWidth={5}
        strokeWidthSecondary={5}
      />
    );
  }

  return (
    <React.Fragment>
      <RenderIf isTrue={type === "submit"}>
        <button type={type} className={PRIMARY_BUTTON_CLASS_NAMES}>
          {_renderSpinner()}
          {buttonTitle}
        </button>
      </RenderIf>
      <RenderIf isTrue={type === "button"}>
        <button
          type={type}
          onClick={handleSubmit}
          className={PRIMARY_BUTTON_CLASS_NAMES}
        >
          {_renderSpinner()}
          {buttonTitle}
        </button>
      </RenderIf>
    </React.Fragment>
  );
};

export default Button;
