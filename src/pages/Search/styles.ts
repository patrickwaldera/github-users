import styled from 'styled-components'

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
    img {
      max-width: 90%;
      height: auto;
    }
  }

  .form-wrapper {
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

    .loader {
      color: #39d353;
      animation: spin 2s linear infinite;

      @-webkit-keyframes spin {
        0% {
          -webkit-transform: rotate(0deg);
        }
        100% {
          -webkit-transform: rotate(360deg);
        }
      }

      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    }
  }
`
