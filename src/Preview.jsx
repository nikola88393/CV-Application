import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import {
  faEnvelope,
  faPhone,
  faBuildingColumns,
  faBriefcase,
  faHouseUser,
} from "@fortawesome/free-solid-svg-icons";

export function CVPreview({ mainData, imageUrl, eduData, workData }) {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    pageStyle: `
      @page {
        size: A4;
        margin: 1cm;
      }
      @media print {
        body {
          background-color: white;
        }
      }
    `,
    onBeforeGetContent: () => {
      const contactInfo = document.querySelector(".contactInfo");
      if (contactInfo) {
        contactInfo.style.flexDirection = "row";
      }
      return Promise.resolve();
    },
    onBeforePrint: () => {
      document.querySelector(".contactInfo").removeAttribute("style");
      return Promise.resolve();
    },
  });

  function isMainDataEmpty() {
    return Object.values(mainData).every((entry) => entry === "");
  }

  return (
    <div className="cvContainer">
      <button className="btn btnPrint" onClick={handlePrint}>
        Print CV
      </button>
      <div className="cvPreview">
        <div className="cvContent" ref={componentRef}>
          {!isMainDataEmpty() ? (
            <MainPreview mainData={mainData} imageUrl={imageUrl} />
          ) : (
            <p className="emptySectionMsg">
              Add main information to display in this section
            </p>
          )}
          {eduData.length > 0 ? (
            <EduPreview eduData={eduData} />
          ) : (
            <p className="emptySectionMsg">
              Add education history to display in this section
            </p>
          )}
          {workData.length > 0 ? (
            <WorkPreview workData={workData} />
          ) : (
            <p className="emptySectionMsg">
              Add previous work experience to display in this section
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function MainPreview({ mainData }) {
  return (
    <div className="mainPreview previewSection">
      <div className="contactInfo">
        {mainData.imageUrl ? (
          <div className="imageContainer">
            <img src={mainData.imageUrl} alt="Selected" />
          </div>
        ) : (
          <p>No image selected</p>
        )}

        <div className="contactInfoContainer">
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
              <FontAwesomeIcon icon={faHouseUser} />
            </strong>{" "}
            {mainData.address}
          </p>
          <p>
            <strong>
              <FontAwesomeIcon icon={faPhone} />
            </strong>{" "}
            {mainData.phone}
          </p>
        </div>
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
        <strong>Date: </strong>
        {edu.startDate} - {edu.endDate || "Present"}
      </p>
      <p>
        <strong>Description: </strong>
        {edu.description}
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
        <strong>Date: </strong>
        {work.startDate} - {work.endDate || "Present"}
      </p>
      <p>
        <strong>Description: </strong>
        {work.description}
      </p>
    </div>
  ));
  return <div className="workPreview">{jobs}</div>;
}
