import React from "react";
import { useParams } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
    id
    title
    rating
    year
    summary
    medium_cover_image
    language
    }
  }
`;

const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
`;

const Column = styled.div`
  margin-left: 10px;
`;

const Title = styled.h1`
  font-size: 65px;
  margin-bottom: 15px;
`;

const Subtitle = styled.h4`
  font-size: 35px;
  margin-bottom: 10px;
`;

const Summary = styled.p`
  font-size: 28px;
`;

const Poster = styled.div`
  width: 25%;
  height: 60%;
  background-color: transparent;
`;

const Detail = () => {
  const { id } = useParams();
  ;
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id: +id }
  });
  console.log(`ID: ${typeof(+id)}`)
  console.log(`data:  ${data}`)
  return (
    <Container>
      <Column>
        <Title>{loading ? "Loading..." : (data.movie && data.movie.title)}</Title>
        
        {!loading && data.movie && ( //JSX에서는 하나의 부모요소로 감싸주어야함
          <>
          <Subtitle>Rating: {data.movie.rating}</Subtitle>
          <Summary>{data.movie.summary} </Summary>
          </>
        )}
        
      </Column>
      <Poster></Poster>
    </Container>
  );
};

export default Detail;