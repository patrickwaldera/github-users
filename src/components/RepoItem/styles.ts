import styled from "styled-components";

export const RepoItemContainer = styled.a`
  max-width: 100%;
  width: 100%;
  text-decoration: none;
  background-color: #ffffff;
  color: #000000;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  padding: 0.875rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  overflow-x: hidden;

  .repo-title{
    max-width: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 1rem;
    font-weight: 700;
  }

  .repo-text{
    max-width: 100%;
    min-height: 110px;
    max-height: 110px;
    overflow: auto;

    p{
      max-width: 100%;
      font-size: 0.875rem;
      line-height: 120%;
      text-align: justify;
    }
  }

  .repo-footer{
    max-width: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .language{
    max-width: 100%;
    display: flex;
    align-items: center;
    gap: 0.625rem;
    div{
      width: 1rem;
      height: 1rem;
      border-radius: 100%;
      background-color: red;
    }
  }

  .stars {
    max-width: 100%;
    display: flex;
    align-items: center;
    gap: 0.625rem;
  }

`