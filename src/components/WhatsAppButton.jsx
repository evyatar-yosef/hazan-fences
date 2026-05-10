import Icons from './Icons';
import './WhatsAppButton.css';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/972501234567"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-fab"
      aria-label="שלח הודעה בוואטסאפ"
      id="whatsapp-button"
    >
      {Icons.whatsapp(28)}
    </a>
  );
}
