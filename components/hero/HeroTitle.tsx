import styled from "@emotion/styled";

const StyledHeroTitle = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.black};

  width: 50%;
  padding: ${(props) => props.theme.spacings.xLarge};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeroTitle = () => {
  return (
    <StyledHeroTitle>
      <h1>Hello World!</h1>
      <p>
        Nullam eu ante vel est convallis dignissim. Fusce suscipit, wisi nec
        facilisis facilisis, est dui fermentum leo, quis tempor ligula erat quis
        odio. Nunc porta vulputate tellus. Nunc rutrum turpis sed pede. Sed
        bibendum. Aliquam posuere. Nunc aliquet, augue nec adipiscing interdum,
        lacus tellus malesuada massa, quis varius mi purus non odio.
        Pellentesque condimentum, magna ut suscipit hendrerit, ipsum augue
        ornare nulla, non luctus diam neque sit amet urna. Curabitur vulputate
        vestibulum lorem. Fusce sagittis, libero non molestie mollis, magna orci
        ultrices dolor, at vulputate neque nulla lacinia eros. Sed id ligula
        quis est convallis tempor. Curabitur lacinia pulvinar nibh. Nam a
        sapien.
      </p>
    </StyledHeroTitle>
  );
};

export default HeroTitle;
