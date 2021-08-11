import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";
import Movie from "../components/Movie";
const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
    }
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const Header = styled.header`
  background-image: linear-gradient(-30deg, #d754ab, #fd723a);
  height: 45vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const Title = styled.h1`
  font-size: 50px;
  font-weight: 550;
  margin-bottom: 20px;
`;
const Subtitle = styled.h3`
  font-size: 20px;
`;
const Loading = styled.div`
  font-size: 18px;
  opacity: 0.5;
  font-weight: 500;
  margin-top: 10px;
`;

const Movies = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
  width: 60%;
  position: relative;
  top: -50px;
`;

export default () => {
  const { loading, data } = useQuery(GET_MOVIES);
  return (
    <Container>
      <Header>
        <Title>JM movie theater👏👏</Title>
        <Subtitle>CHOOSE WHAT YOU WANT!✔✔</Subtitle>
      </Header>
      {console.log(data)}
      {loading && <Loading>Loading...</Loading>}
      {!loading && data.movies && (
        <Movies>
          {data.movies.map(m => (
            <Movie key={m.id} id={m.id} bg={m.medium_cover_image} />
          ))}
        </Movies>
      )}
    </Container>
  );
};