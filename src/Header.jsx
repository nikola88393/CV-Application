import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";

export function Header() {
  return (
    <div className="header">
      <div className="logo">
        <FontAwesomeIcon icon={faFile} />
        <h2>CV Creator tool</h2>
      </div>
    </div>
  );
}
