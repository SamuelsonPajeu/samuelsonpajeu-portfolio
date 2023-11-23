import { useRouteError } from "react-router-dom";
import './error.css'

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="Error" id="error-page">
      <div className="title">
        <h1>OOPS!</h1>
      </div>
      
      <div className="message">
        <p>something went wrong</p>
      </div>

      {error.status && error.status === 404 && (
        <div className="subtitle">
          <p> 404 </p>
        </div>)}
      
      <div className="message">
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}