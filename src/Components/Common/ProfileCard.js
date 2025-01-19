import { RichText } from "@wordpress/block-editor";

const ProfileCard = ({ isSelected, attributes, setAttributes }) => {
  const {
    stats,
    bio,
    title,
    name,
    skills,
    nameStyle,
    buttonOneText,
    buttonTwoText,
  } = attributes;
  
  const TagName = nameStyle.NameTag || "span";

  return (
    <div>
      <body>
        <div className="container">
          <div className="profile-card">
            <div className="card-content">
              <div className="avatar-wrapper">
                <div className="avatar">
                  <div className="avatar-inner"></div>
                  <div className="avatar-glow"></div>
                  <div className="avatar-border"></div>
                </div>
              </div>

              <div className="profile-info">
                {isSelected ? (
                  <RichText
                    className="name"
                    tagName={nameStyle.NameTag}
                    value={name}
                    onChange={(NewName) => {
                      setAttributes({ name: NewName });
                    }}
                  />
                ) : (
                  <TagName className="name">{name}</TagName>
                )}
                <p className="title">{title}</p>

                <div className="stats">
                  {stats.map((data, index) => (
                    <>
                      <div className="stat" key={index}>
                        <span className="stat-value">{data?.value}</span>
                        <span className="stat-label">{data?.label}</span>
                      </div>
                    </>
                  ))}
                </div>

                <div className="bio">{bio}</div>

                <div className="skills">
                  {skills.map((data, index) => (
                    <div key={index}>
                      <span className="skill">{data}</span>
                    </div>
                  ))}
                </div>

                <div className="actions">
                  <button className="action-btn primary">
                    <span>{buttonOneText}</span>
                    <div className="btn-effect"></div>
                  </button>
                  <button className="action-btn secondary">
                    <span>{buttonTwoText}</span>
                    <div className="btn-effect"></div>
                  </button>
                </div>
              </div>
            </div>

            <div className="card-shine"></div>
            <div className="card-border"></div>
            <div className="card-glow"></div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default ProfileCard;
