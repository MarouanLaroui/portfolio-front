import { Timer } from "../timer"
import { CatchPhraseContainer, CatchPhraseText } from "./style"

export const CatchPhrase = () => {
  return <CatchPhraseContainer>
    <CatchPhraseText>Black friday is coming soon, 20% discount on every items in</CatchPhraseText>
    <Timer/>
  </CatchPhraseContainer>
}