import styled from "styled-components";

export const SearchContainer = styled.div`
  margin: 0 auto;
  width: 64rem;
  min-width: 90%;
  max-width: 90%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 48px;

  logo-img {
    img{
      max-width: 90%;
      height: auto;
    }
  }

  .form-wrapper{
    min-width: 100%;
    max-width: 100%;
  }


  form {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 90%;
    width: 400px;
    gap: 24px;
  }
`