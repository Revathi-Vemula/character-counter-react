import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
`
export const BannerPart = styled.div`
  display: flex;
  flex-direction: row;
  height: 70vh;
`

export const BannerRightPart = styled.div`
  display: flex;
  flex-direction: column;
  width: 40vw;
  background-color: #ffc533;
`

export const BannerDesc = styled.h1`
  color: #1e293b;
  font-size: 25px;
`
export const BannerTopPart = styled.div`
  background-color: #ffbf1f;
  height: 120px;
  padding: 20px;
`

export const InputsContainer = styled.ul`
  background-color: #ffc533;
  height: 60vh;
  padding: 30px;
  list-style-type: none;
`

export const BannerLeftPart = styled.form`
  background-color: #0f172a;
  width: 40vw;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const BannerHeading = styled.h1`
  color: #ffc533;
  font-size: 25px;
  margin-bottom: 40px;
`

export const TextInputContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const Input = styled.input`
  height: 30px;
  width: 250px;
  margin-right: 10px;
  outline: none;
  border-radius: 4px;
  border-style: none;
  padding: 8px;
  font-family: 'Consolas';
`

export const AddInputButton = styled.button`
  width: 70px;
  background-color: #ffc533;
  border-style: none;
  border-radius: 4px;
  color: #272c47;
  font-weight: 700;
`

export const NoEntriesImage = styled.img`
  height: 200px;
  width: 300px;
`
export const InputDetails = styled.li`
  color: #272c47;
  font-size: 15px;
  font-weight: 700;
`

export const InputNameAndLength = styled.p`
  color: #272c47;
  font-size: 15px;
  font-weight: 700;
`
