import { render } from '@testing-library/react';
import LoginFormComponent from './login-form.component';



describe('Login Form',() => {

    it('Check if intial state for loader is false',() => {
        render(<LoginFormComponent />)
    });

});