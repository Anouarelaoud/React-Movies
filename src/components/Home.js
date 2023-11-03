import React from "react";
import { useHomeFetch } from "../hooks/useHomeFetch";
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";
// import NoImage from "../images/no_image.jpg";
import HeroImage from "./HeroImage";
import Grid from "./Grid";

const Home = () => {
  const { state, loading, error } = useHomeFetch();
  console.log(state);

  return (
    <>
      {state.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[11].backdrop_path}`}
          title={state.results[11].original_title}
          text={state.results[11].overview}
        />
      ) : null}
      <Grid header="popular movies">
        {state.results.map((movie) => (
          <div key={movie.id}> {movie.title}</div>
        ))}
      </Grid>
    </>
  );
};

export default Home;
