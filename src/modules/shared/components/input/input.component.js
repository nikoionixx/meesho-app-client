import {Input} from '@material-tailwind/react';
import { useContext } from 'react';
import { RegisterContext } from '../../context/register.context';

const  OutlinedInput = ({label , type = 'text' ,validationSchema , name}) => {
    const register = useContext(RegisterContext);
    return (
        <Input {...register(name,validationSchema)} variant='outlined' type={type} label={label} size={'lg'} color={"pink"}></Input>
    )
};



export default OutlinedInput;