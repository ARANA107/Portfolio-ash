const TechStack = () => {
  return (
    <>
      <div className="timeline-container">
        <h2 className="timeline-title">Tech stack</h2>
        <div
          style={{
            marginTop: "20px",
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          <img className="tech-skills-logo" src="react.png" alt="react" />
          <img className="tech-skills-logo" src="spring.png" alt="spring" />
          <img className="tech-skills-logo" src="dbs.png" alt="sql" />
          <img className="tech-skills-logo" src="figma.png" alt="figma" />
        </div>
      </div>
    </>
  );
};

export default TechStack;
