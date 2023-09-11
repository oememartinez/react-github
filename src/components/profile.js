import styled from 'styled-components';
import props from './profile-data';
import Button from './button';
import Icon from './icon';


const ProfileStyled = styled.div`
	grid-area: profile;

	.avatar {
		border: 1px solid var(--grey-1);
		box-sizing: border-box;
		border-radius: 50%;
		overflow: hidden;
		margin-block-end: 1.5rem;
	}

	.name {
		font: var(--headline1);
		color: var(--white);
		margin: 0;
		margin-block-end: .5rem;
	}

	.username {
		font: var(--headline2-ligth);
		margin: 0;
		margin-block-start: .5rem;
		margin-block-end: 1.5rem;
	}

	.buttons {
		display: flex;
		gap: .5rem;
		margin-block-end: 1.5rem;
	}

	.info {
		font: var(--body2-semi-bold);
		align-items: center;
		display: flex;
		color: var(--gray-1);
		text-decoration: none;
		gap: .5rem;
		margin-block: 1rem;
	}
	
	a:hover {
		text-decoration: underline;
	}
`;

function Profile() {

	const {name, login, avatar_url, bio, followers, following, location, twitter_username, blog } = props;

	return (
		<ProfileStyled>
			<img src={avatar_url} alt='' className='avatar' width='278' height='278'></img>
			<p className='name'>{name}</p>
			<p className='username'>{login}</p>
			<div className='buttons'>
				<Button
					text="Follow"
					link="#"
					className="custom"
				></Button>
				<Button
					text="Sponsor"
					icon={<Icon 
						name="heart"
						size={24}
						color="var(--pink)"
					/>}
				></Button>
			</div>
			<p className='bio'>
				{bio}
			</p>
			<p className='followers info'>
				* {followers} <span>followers</span> <span> * </span> {following} <span>following</span>
			</p>
			{/*<p className='stars info'>
				* 41
			</p>*/}
			<p className='location info'>
				* {location}
			</p>
			<a href={blog} target='_BLANK' rel='noreferrer' className='info'>
				{blog}
			</a>
			<a href={`https://twitter.com/@${twitter_username}`} target='_BLANK' rel='noreferrer' className='info'>
				@{twitter_username}
			</a>
		</ProfileStyled>
	)
}

export default Profile;