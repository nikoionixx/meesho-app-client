import {Input} from '@material-tailwind/react';
import React, { useContext } from 'react';
import { RegisterContext } from '../../../auth/context/register.context';
import RenderIf from '../renderIf/renderIf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const  OutlinedInput = ({label , type = 'text' ,validationSchema , name , icon}) => {
    const {register,errors} = useContext(RegisterContext);
    const errorKeyCount = Object.keys(errors);
    const isRequired = errorKeyCount.length > 0 && errors[name] && errors[name].type === 'required';
    const isMinLength = errorKeyCount.length > 0 && errors[name] && errors[name].type === 'minLength';
    const isPattern = errorKeyCount.length > 0 && errors[name] && errors[name].type === 'pattern';

    function RenderError({message}){
        return <span className='text-sm text-red-400'>{message}</span>
    }

    return (
        <div className='flex flex-col gap-1'>
                <Input {...register(name,validationSchema)} icon={<FontAwesomeIcon icon={icon} />} error={isRequired || isMinLength || isPattern} variant='outlined' type={type} label={label} size={'lg'}></Input>
                <RenderIf isTrue={isRequired}>
                    <RenderError message={`${label} is required`}></RenderError>
                </RenderIf>
                <RenderIf isTrue={isMinLength}>
                    <RenderError message={`Please enter valid ${label}`}></RenderError>
                </RenderIf>
                <RenderIf isTrue={isPattern}>
                    <RenderError message={`Please enter valid ${label}`}></RenderError>
                </RenderIf>
        </div>
       
    )
};



export default OutlinedInput;