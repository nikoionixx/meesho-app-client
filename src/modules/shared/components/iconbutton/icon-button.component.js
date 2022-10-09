import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import RenderIf from '../renderIf/renderIf';

const IconButtonComponent = ({type,icon,title}) => {
    function _renderText(){
        return     <span className="text-gray-700 text-sm hover:text-primary">{title}</span>
    }
    
    function VeriticalIconButton(){
        return (
            <div className="flex flex-col items-center justify-center gap-1 cursor-pointer hover:text-primary">
                <FontAwesomeIcon icon={icon}/>
                {_renderText()}
            </div>
        );
    }

    function HorizontalIconButton(){
        return (
        <div className="flex items-center justify-center gap-2 cursor-pointer hover:text-primary">
            <RenderIf isTrue={icon}>
                <FontAwesomeIcon icon={icon}/>
            </RenderIf>
            {_renderText()}
        </div>
        );
    }
    
    return (
        <React.Fragment>
            <RenderIf isTrue={type === 'vertical'}>
                <VeriticalIconButton />
            </RenderIf>
            <RenderIf isTrue={type === 'horizontal'}>
                <HorizontalIconButton />
            </RenderIf>
        </React.Fragment>
    );
};

export default IconButtonComponent;