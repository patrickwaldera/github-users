import styled from 'styled-components'

export const ProfileContainer = styled.div`
  margin: 0 auto;
  width: 1024px;
  max-width: 90%;

  footer {
    width: 100%;
    display: flex;
    justify-content: center;
    padding-bottom: 1.5rem;
  }

  .footer-img {
    max-width: 70px;
  }
`

export const Header = styled.header`
  position: relative;
  background-color: #0e4429;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-items: center;
  width: 100%;
  padding: 2.25rem 0 4rem 0;
  gap: 1rem;
  border-radius: 0px 0px 25px 25px;

  .back-btn {
    cursor: pointer;
    text-decoration: none;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0 2.25rem;
  }

  @media (max-width: 768px) {
    padding: 1.5rem 0 4rem 0;

    .back-btn {
      padding: 0 1rem;
    }
  }
`
export const UserInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  .info {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 0.75rem;

    h2 {
      font-weight: 700;
      font-size: 1.75rem;
    }

    .username-link {
      cursor: pointer;
      text-decoration: none;
      font-weight: 600;
      font-size: 1rem;
      color: #499f68;
    }

    p {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.375rem;
      font-weight: 500;
      font-size: 0.75rem;
    }
  }
`

export const ProfileImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 156px;
  height: 156px;
  border-radius: 100%;
  outline: 3px solid #ffffff;
  margin: 0.5rem 0;

  .profile-img {
    margin: auto;
    overflow: hidden;
    width: 148px;
    height: 148px;
    border-radius: 100%;

    img {
      width: 148px;
      height: 148px;
    }
  }
`

export const Stats = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  position: absolute;
  bottom: -2rem;
  width: 100%;
  max-width: 90%;

  @media (max-width: 411px) {
    bottom: -8rem;
  }

  @media (max-width: 254px) {
    bottom: -13.5rem;
  }
`

export const StatsItem = styled.div`
  background-color: #161b22;
  border-radius: 12px;
  padding: 0.875rem;
  text-align: center;
  p {
    font-weight: 700;
    font-size: 1.5rem;
    margin-bottom: 4px;
  }

  span {
    font-weight: 500;
    font-size: 0.875rem;
  }

  @media (max-width: 411px) {
    flex: 1;
  }
`
