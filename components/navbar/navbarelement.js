import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';

export const Nav = styled.nav`
	background: #FFFFFF;
	height: 80px;
	display: flex;
	justify-content: space-between;
	padding: 0.5 rem calc((100vw - 1000px) /2);
	z-index: 10;
`;

export const NavLink = styled(Link)`
	color: #000000;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;
`;	

export const Bars = styled(MenuIcon)`
	display: none;
	color: #fff;

	@media screen and (max-width: 760px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 75%);
		font-size: 1.8 rem;
		cursor: pointed; 
	}
`;

export const NavMenu = styled.div`
	display: flex;
	align-items: right;
	margin-right: 24px;

	@media screen and (max-width: 760px) {
		display: none;
	}
`;
