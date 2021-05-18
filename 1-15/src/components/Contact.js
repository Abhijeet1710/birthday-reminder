import './App.css';

function Contact(props) {
  
  const {id, name, age, image} = props.person;
  
  return (

      <div className="list-container">
        <img className="user-image" src={image} alt="error"/>
        <div className="content">
          <h4> {name} </h4> 
          <h5> {age} years </h5> 
        </div>
      </div>
    
   
  );
}

export default Contact;
