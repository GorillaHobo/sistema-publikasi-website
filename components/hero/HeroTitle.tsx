import styled from "@emotion/styled";

import ButtonNormal from "../buttons/ButtonNormal";

const StyledHeroTitle = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.black};

  width: 50%;
  padding: ${(props) => props.theme.spacings.xl};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & span {
    color: ${(props) => props.theme.colors.blackLight};
  }
  @media ${(props) => props.theme.breakpoints.tablet} {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    background-color: rgba(40, 40, 40, 0.5);
    z-index: 10;
    & span {
      color: ${(props) => props.theme.colors.white};
    }
  }
`;

const HeroTitle = () => {
  return (
    <StyledHeroTitle>
      <h1>Hello World!</h1>
      <p>
        <span>
          Nullam eu ante vel est convallis dignissim. Fusce suscipit, wisi nec
          facilisis facilisis, est dui fermentum leo, quis tempor ligula erat
          quis odio. Nunc porta vulputate tellus. Nunc rutrum turpis sed pede.
          Sed bibendum. Aliquam posuere. Nunc aliquet, augue nec adipiscing
          interdum, lacus tellus malesuada massa, quis varius mi purus non odio.
          Pellentesque condimentum, magna ut suscipit hendrerit, ipsum augue
          ornare nulla, non luctus diam neque sit amet urna. Curabitur vulputate
          vestibulum lorem. Fusce sagittis, libero non molestie mollis, magna
          orci ultrices dolor, at vulputate neque nulla lacinia eros. Sed id
          ligula quis est convallis tempor. Curabitur lacinia pulvinar nibh. Nam
          a sapien.
        </span>
      </p>
      <ButtonNormal />
    </StyledHeroTitle>
  );
};

export default HeroTitle;
