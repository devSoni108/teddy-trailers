import './WhatsAppPopup.css'
import whatsapp from '../assets/whatsapp.png';

function WhatsAppPopup() {
    const handleOpenChat = () => {
      const phoneNumber = '+27665345139'; // Replace with your own WhatsApp phone number
      const message = encodeURIComponent('Hello, I have a question about your trailers.'); // Replace with your own message
      const url = `https://wa.me/${phoneNumber}?text=${message}`;
  
      window.open(url, '_blank');
    };
  
    return (
      <img src={whatsapp} onClick={handleOpenChat}
        Open WhatsApp Chat
      />
    );
  }
  
  export default WhatsAppPopup;