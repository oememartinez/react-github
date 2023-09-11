import styled from 'styled-components';
import RepoListItem from './repo-list-item';

const RepoListStyled = styled.div`
	grid-area: repo-list;
	background-color: black;
`;

function RepoList({repoList}) {
	return (
		<RepoListStyled>
			{repoList.map((item) => {
				return <RepoListItem {...item} key={item.id}/>
			})}
		</RepoListStyled>
	)
}

export default RepoList;