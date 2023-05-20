import Spinner from "react-bootstrap/Spinner";

import "./Loading.css";

function Loading({ loading, children }) {
  if (loading) {
    return (
      <div className="spinner">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  } else {
    return <>{children}</>;
  }
}

export default Loading;
