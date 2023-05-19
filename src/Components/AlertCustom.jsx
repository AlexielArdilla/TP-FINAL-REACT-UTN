import Alert from "react-bootstrap/Alert";
import { useNavigate } from "react-router-dom";

function AlertCustom({ variant, text, duration = 3000, link }) {
  const navigate = useNavigate();
  if (duration !== 0 && link) {
    setTimeout(() => {
      navigate(link);
    }, duration);
  }
  return <Alert variant={variant}>{text}</Alert>;
}

export default AlertCustom;
