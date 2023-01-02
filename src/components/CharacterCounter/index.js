import {Component} from 'react'
import {v4} from 'uuid'

import {
  MainContainer,
  BannerPart,
  BannerRightPart,
  BannerTopPart,
  BannerDesc,
  InputsContainer,
  BannerLeftPart,
  BannerHeading,
  TextInputContainer,
  Input,
  AddInputButton,
  NoEntriesImage,
  InputDetails,
  InputNameAndLength,
} from './styledComponents'

class CharacterCounter extends Component {
  state = {textInput: '', inputsList: []}

  onChangeTextInput = event => {
    this.setState({textInput: event.target.value})
  }

  onClickAddButton = () => {
    const {textInput, inputsList} = this.state

    const newTextInput = {
      id: v4(),
      inputName: textInput,
      countOfCharacters: textInput.length,
    }

    inputsList.push(newTextInput)

    this.setState({inputsList, textInput: ''})
  }

  renderNoEntriesView = () => (
    <NoEntriesImage
      src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
      alt="no user inputs"
    />
  )

  renderListEntriesView = () => {
    const {inputsList} = this.state

    return (
      <>
        {inputsList.map(eachInput => (
          <InputDetails key={eachInput.id}>
            <InputNameAndLength>
              {eachInput.inputName} : {eachInput.countOfCharacters}
            </InputNameAndLength>
          </InputDetails>
        ))}
      </>
    )
  }

  render() {
    const {textInput, inputsList} = this.state

    const isInputsListEmpty = inputsList.length === 0

    return (
      <MainContainer>
        <BannerPart>
          <BannerRightPart>
            <BannerTopPart>
              <BannerDesc>Count the characters like a boss...</BannerDesc>
            </BannerTopPart>
            <InputsContainer>
              {isInputsListEmpty
                ? this.renderNoEntriesView()
                : this.renderListEntriesView()}
            </InputsContainer>
          </BannerRightPart>
          <BannerLeftPart>
            <BannerHeading>Character Counter</BannerHeading>
            <TextInputContainer>
              <Input
                type="text"
                value={textInput}
                onChange={this.onChangeTextInput}
                placeholder="Enter the Characters here"
              />
              <AddInputButton type="button" onClick={this.onClickAddButton}>
                Add
              </AddInputButton>
            </TextInputContainer>
          </BannerLeftPart>
        </BannerPart>
      </MainContainer>
    )
  }
}

export default CharacterCounter
