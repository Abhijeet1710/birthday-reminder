import './App.css'
import Contact from './Contact'

function ContactList(props) {

  console.log(props.dataset);

  return (
  <>
     {
     props.dataset.map((contact) => {
       return(
        <Contact person={contact} />
       );
     })
     }
  </>
  );
}

export default ContactList;
