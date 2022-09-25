import React, {useState} from 'react';


function FeedBackForm() {
	const [name , setName] = useState('');
	const [age , setAge] = useState('');
	const [email , setEmail] = useState('');
	const [password , setPassword] = useState('');
	const [confPassword , setConfPassword] = useState('');

	// function to update state of name with
	// value enter by user in form
	const handleChange =(e)=>{
	setName(e.target.value);
	}
	// function to update state of age with value
	// enter by user in form
	const handleAgeChange =(e)=>{
	setAge(e.target.value);
	}
	// function to update state of email with value
	// enter by user in form
	const handleEmailChange =(e)=>{
	setEmail(e.target.value);
	}
	// function to update state of password with
	// value enter by user in form
	const handlePasswordChange =(e)=>{
	setPassword(e.target.value);
	}
	// function to update state of confirm password
	// with value enter by user in form
	const handleConfPasswordChange =(e)=>{
	setConfPassword(e.target.value);
	}
	// below function will be called when user
	// click on submit button .
	const handleSubmit=(e)=>{
	if(password!=confPassword)
	{
		// if 'password' and 'confirm password'
		// does not match.
		alert("password Not Match");
	}
	else{
		// display alert box with user
		// 'name' and 'email' details .
		alert('A form was submitted with Name :"' + name +
		'" ,Age :"'+age +'" and Email :"' + email + '"');
	}
	e.preventDefault();

	}
return (
    <div className='FeeBackFormContainer'>
        <div className="App">
        <header className="App-header">
        <form onSubmit={(e) => {handleSubmit(e)}}>
        {/*when user submit the form , handleSubmit()
            function will be called .*/}
        <h4> Thank you so much for taking the time</h4>
        <h3> Sign-up Form </h3>
            <label >
            Name:
            </label><br/>
            <input type="text" value={name} required onChange={(e)=>handleChange(e)}/><br/>

            <label >
            Age:
            </label><br/>
            <input type="text" value={age} required onChange={(e)=>handleAgeChange(e)}/><br/>


            <label>
            Email:
            </label><br/>
            <input type="email" value={email} required onChange={(e)=> handleEmailChange(e)} /><br/>

            <label>
            Password:
            </label><br/>
            <input type="password" value={password} required onChange={(e)=> handlePasswordChange(e)} /><br/>

            <label>
            Confirm Password:
            </label><br/>
            <input type="password" value={confPassword} required onChange={(e)=> handleConfPasswordChange(e)} /><br/>
                    
            <input type="submit" value="Submit"/>
        </form>
        </header>
        </div>
    </div>
);
}

export default FeedBackForm;
