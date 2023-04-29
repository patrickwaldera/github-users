import styled from "styled-components";

export const RepoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 5.25rem 0;
  gap: 1rem;

  .title{
    font-weight: 500;
    font-size: 16px;
  }

  .repo-list{
    padding: 1.5rem 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.75rem;
    background-color: #2D3239;
    border-radius: 8px;
    @media (max-width: 992px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  .empty{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    img{
      max-height: 150px;
    }
  }

  @media (max-width: 411px) {
    margin-top: 9.5rem;
  }

  @media (max-width: 254px) {
    margin-top: 15rem;
  }

`