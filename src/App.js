import logo from './logo.svg';
import './App.css';
import ContactCard from './components/contactCard';

function App() {

    return <div>
    <ContactCard
        name='Anyi Chen' 
        mobileNumber='555-555-5555' 
        workPhone ='123-456-7890' 
        email='anyi@google.com' />

    <ContactCard 
        name='Rahima' 
        mobileNumber='666-666-6666' 
        workPhone ='123-456-7890' 
        email='rahima@google.com' />

    <ContactCard 
        name='Kyaw' 
        mobileNumber='777-777-777' 
        workPhone ='123-456-7890' 
        email='google@google.com' />

    </div> 
}

export default App;
