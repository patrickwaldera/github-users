import styled from 'styled-components'

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;

  .input-label {
    width: 100%;
    font-weight: 500;
    font-size: 1rem;
    span {
      font-style: italic;
    }
  }

  .input-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
    width: 100%;
    background-color: #2d3239;
    padding: 0.75rem 1rem;
    border-radius: 8px;
    outline: 2px solid #39d35300;
    transition: all 0.3s ease;

    &:focus-within {
      outline: 2px solid #39d353;
      box-shadow: 0px 4px 35px rgba(57, 211, 83, 0.25);
    }

    input {
      flex: 1;
      max-width: 100%;
      background-color: transparent;
      border: none;
      color: #ffffff;

      &:focus {
        outline: none;
      }
    }
  }

  .error {
    font-size: 0.75rem;
    color: #ff4040;
  }
`
