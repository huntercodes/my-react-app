import genericPhoto from './genericPhoto.jpg'

const PersonalInfo = () => {
    return (
        <div>
            <h2>Personal Information</h2>
            <h3>Hunter Downey</h3>
            <p>
                <img src={genericPhoto} alt="Hunter Downey" width="150"/>
            </p>
            <p>
                I love my family, my dog, and my friends.
            </p>
        </div>
    );
};

export default PersonalInfo;