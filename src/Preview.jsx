import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faBuildingColumns,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
export function CVPreview({ mainData, eduData, workData }) {
  return (
    <div className="cvContainer">
      <div className="cvPreview">
        <MainPreview mainData={mainData} />
        <EduPreview eduData={eduData} />
        <WorkPreview workData={workData} />
      </div>
    </div>
  );
}

function MainPreview({ mainData }) {
  return (
    <div className="mainPreview previewSection">
      <div className="contactInfo">
        <p>
          <strong>{mainData.name}</strong>
        </p>
        <p>
          <strong>
            <FontAwesomeIcon icon={faEnvelope} />
          </strong>{" "}
          {mainData.email}
        </p>
        <p>
          <strong>
            <FontAwesomeIcon icon={faPhone} />
          </strong>{" "}
          {mainData.phone}
        </p>
      </div>
      <p className="introductionText">{mainData.intro}</p>
    </div>
  );
}
function EduPreview({ eduData }) {
  const education = eduData.map((edu) => (
    <div key={edu.id} className="eduEntryPreview previewSection">
      <h2>
        <strong>
          <FontAwesomeIcon icon={faBuildingColumns} />
        </strong>
        {" " + edu.primary}
      </h2>
      <h3>
        <strong>Field of study: </strong>
        {edu.secondary}
      </h3>
      <p>
        <strong>Description: </strong>
        {edu.description}
      </p>
      <p>
        <strong>Date: </strong>
        {edu.startDate} - {edu.endDate}
      </p>
    </div>
  ));
  return <div className="eduPreview">{education}</div>;
}

function WorkPreview({ workData }) {
  const jobs = workData.map((work) => (
    <div key={work.id} className="workEntryPreview previewSection">
      <h2>
        <strong>
          <FontAwesomeIcon icon={faBriefcase} />
        </strong>
        {" " + work.primary}
      </h2>
      <h3>
        <strong>Field of work: </strong>
        {work.secondary}
      </h3>
      <p>
        <strong>Description: </strong>
        {work.description}
      </p>
      <p>
        <strong>Date: </strong>
        {work.startDate} - {work.endDate}
      </p>
    </div>
  ));
  return <div className="workPreview">{jobs}</div>;
}
