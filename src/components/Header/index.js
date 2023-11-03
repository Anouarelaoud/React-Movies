import React from "react";

import RMDBLogo from "../../images/react-movie-logo.svg";
import TMDBLogo from "../../images/tmdb_logo.svg";

import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles";
import SearchBar from "../SearchBar";
import { useHomeFetch } from "../../hooks/useHomeFetch";

const Header = () => {
  const { setSearchTerm } = useHomeFetch();
  return (
    <Wrapper>
      <Content>
        <LogoImg src={RMDBLogo} alt="rmdb-logo" />
        <SearchBar setSearchTerm={setSearchTerm} />
        <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
      </Content>
    </Wrapper>
  );
};

export default Header;
