import Spinner from "react-bootstrap/Spinner";

import "./Loading.css";

function Loading({ loading, children }) {
  if (loading) {
    return (
      <Spinner className="spinner" animation="border" variant="info" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  } else {
    return <>{children}</>;
  }
}

export default Loading;
