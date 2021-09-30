import React from 'react';
import './register.css';

const Register = ({routeChange}) => {
    return(
        <div>
            
            <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-1 mw5 center br-black">
            <form >
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="ph0 mh0 fw6 clip">Sign In</legend>
                <h3 className="f3">Register</h3>
                <div className="mt3">
                    <label className="db fw4 lh-copy f6" >Full Name</label>
                    <input className="pa2 input-reset ba bg-transparent w-100 measure" type="text" />
                </div>
                <div className="mt3">
                    <label className="db fw4 lh-copy f6" >Email address</label>
                    <input className="pa2 input-reset ba bg-transparent w-100 measure" type="email" />
                </div>
                <div className="mt3">
                    <label className="db fw4 lh-copy f6" >Password</label>
                    <input className="b pa2 input-reset ba bg-transparent" type="password" />
                </div>
                </fieldset>
                <div className="mt3">
                    <input
                     onClick={() => routeChange('register')}
                     className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" 
                    type="submit" 
                    value="Register"
                    
                    />
                  
                </div>
            </form>
</article>
        </div>
    )
}
export default Register;