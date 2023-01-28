import React, {useState} from 'react';


function FeedBackForm() {
	const [name , setName] = useState('');
	const [lastName , setLastName] = useState('');
	const [email , setEmail] = useState('');


	// function to update state of name with
	// value enter by user in form
	const handleChange =(e)=>{
	setName(e.target.value);
	}
	// function to update state of age with value
	// enter by user in form
	const handleLastChange =(e)=>{
		setLastName(e.target.value);
	}
	// function to update state of email with value
	// enter by user in form
	const handleEmailChange =(e)=>{
	setEmail(e.target.value);
	}


return (
    <div  className='FeeBackFormContainer'>
        <div className="App">
        <header className="App-header">
        <form>
        {/*when user submit the form , handleSubmit()
            function will be called .*/}
           <h3> Feedback Form </h3>
		   <br />
            <label >
            First Name:
            </label><br/>
            <input type="text" value={name} required onChange={(e)=>handleChange(e)}/><br/>

            <label >
            Last Name:
            </label><br/>
            <input type="text" value={lastName} required onChange={(e)=>handleLastChange(e)}/><br/>


            <label>
            Email:
            </label><br/>
            <input type="email" value={email} required onChange={(e)=> handleEmailChange(e)} /><br/>
			<label htmlFor="btn">Description</label>
			<br />
			<textarea name="" id="" cols="60" rows="40"></textarea>
			<br />
            <input className="form-btn" type="submit"  id="btn"/>
			
        </form>
        </header>
        </div>
    </div>
);
}

export default FeedBackForm;
