import React from "react";
import RenderIf from "../renderIf/renderIf";

const FormError = ({ errors }) => {
    
  function _renderErrors(errors) {
    if (errors)
    return errors.map((error,index) => <span key={index}>{error}</span>);
    else return <span>Unkown Error</span>;
  }

  return (
    <RenderIf isTrue={errors}>
      <div className="text-sm w-full py-2 px-3 rounded bg-red-100 text-red-900">{_renderErrors(errors)}</div>
    </RenderIf>
  );
};

export default FormError;
