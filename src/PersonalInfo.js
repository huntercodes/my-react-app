const PersonalInfo = ({ headerTitle, name, photo, description }) => {
    return (
        <div>
            <h2>{headerTitle}</h2>
            <h3>{name}</h3>
            <img
                src={photo.me}
                alt={"photo of " + name}
                width={photo.width}
            />
            <p>{description}</p>
        </div>
    );
};

export default PersonalInfo;