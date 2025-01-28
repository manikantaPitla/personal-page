import React, { useEffect, useState } from "react";
import { UiButton, UiHeading, UiSection } from "../../utils/uiMaterials";
import {
  ButtonWrapper,
  GitProfileWrapper,
  ProfileCard,
  ProfileWrapper,
} from "./style";

const GitHub = () => {
  const [profile, setProfileData] = useState([]);

  useEffect(() => {
    const fetchProfileData = async () => {
      const response = await fetch(
        "https://api.github.com/users/manikantaPitla"
      );
      const user = await response.json();
      console.log("Profile: ", user);

      const profile = {
        username: user.login,
        name: user.name,
        bio: user.bio,
        avatar: user.avatar_url,
        repos: user.public_repos,
        reposURL: user.repos_url,
        createdAt: user.created_at,
        updatedAt: user.updated_at,
        profileURL: user.url,
      };

      setProfileData(profile);
    };
    fetchProfileData();
  }, []);

  return (
    <UiSection id="github">
      <UiHeading>
        <span>04. </span>
        GitHub
      </UiHeading>
      <GitProfileWrapper>
        <ProfileWrapper>
          <ProfileCard>
            <img src={profile.avatar} alt={profile.name} />
            <div>
              <h1>{profile.name}</h1>
              <p>{profile.username}</p>
              <div>
                <p>{profile.bio}</p>
              </div>
            </div>
          </ProfileCard>
          <ButtonWrapper>
            <UiButton>Show Repos</UiButton>
            <UiButton>Visit GitHub</UiButton>
          </ButtonWrapper>
        </ProfileWrapper>
        {/* <pre>{JSON.stringify(profile, null, 2)}</pre> */}
      </GitProfileWrapper>
    </UiSection>
  );
};

export default React.memo(GitHub);
