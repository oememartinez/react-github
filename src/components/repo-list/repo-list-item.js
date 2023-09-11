import { styled } from "styled-components";


const RepoListItemStyled = styled.div`
  border: 10px solid red;
  margin: 10px;
`

function RepoListItem({ name }) {
  return (
    <RepoListItemStyled>
      {name}
    </RepoListItemStyled>
  )
}

export default RepoListItem;