import styled from 'styled-components';

const LinkStyles = styled.a`
 a{
	padding: 1rem 0;
	margin: 0 3rem;
	position: relative;
	letter-spacing: 2px;
}
 a:last-child{
	margin-right: 0;
}
 a::before,
 a::after{
	content: '';
	position: absolute;
	width: 100%;
	height: 2px;
	background-color: crimson;
	left: 0;
	transform: scaleX(0);
	transition: all .5s;
}
 a::before{
	top: 0;
	transform-origin: left;
}

a::after{
	bottom: 0;
	transform-origin: right;
}


 a:hover::before,
a:hover::after{
	transform: scaleX(1);
}



@media screen and (max-width: 860px){
a{
		margin: 0;
		font-size: 2rem;
	}
`

export default LinkStyles;