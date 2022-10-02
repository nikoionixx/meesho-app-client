import React from "react";
import RenderIf from "../../util/renderIf";

const Button = ({buttonTitle , type = 'button' , handleSubmit}) => {

    const PRIMARY_BUTTON_CLASS_NAMES = 'bg-primary px-10 py-3 text-white rounded w-full';

    return (
        <React.Fragment>
        <RenderIf isTrue={type === 'submit'}>
                <button type={type} className={PRIMARY_BUTTON_CLASS_NAMES}>{buttonTitle}</button>
        </RenderIf>
        <RenderIf isTrue={type === 'button'}>
                <button type={type} onClick={handleSubmit} className={PRIMARY_BUTTON_CLASS_NAMES}>{buttonTitle}</button>
        </RenderIf>
        </React.Fragment>

      
    );
}

export default Button;