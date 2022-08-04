import { ReactNode } from "react"
import styled from "styled-components"

export const StyledColLabels = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 0.5em;
  font-size: 0.75rem;

  .main-text {
    font-weight: 900;
    margin: 0;
    flex: 0;
  }

  .sub-text {
    font-weight: 500;
    margin: 0;
    flex: 0;
  }
`

export const CircleImage = styled.div`
  flex: 0;
  height: 5rem;
  width: 5rem;
  clip-path: circle(40%);
  .image {
    width: 5rem;
    height: auto;
  }
`

export const LabeledIcon = ({
  idImage,
  mainText,
  subText
}: {
  idImage: string
  mainText: ReactNode
  subText: ReactNode
}) => {
  return (
    <div className={`d-flex flex-grow-1`}>
      <CircleImage>
        <img src={idImage} alt={`${mainText} image`} className={`image`} />
      </CircleImage>
      <StyledColLabels>
        <div className="main-text">{mainText}</div>
        <p className="sub-text">{subText}</p>
      </StyledColLabels>
    </div>
  )
}
