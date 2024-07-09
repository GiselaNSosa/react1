import React, {useState} from 'react'
import styled from 'styled-components';
import BurguerButton from './BurguerButton';

function Navbar () {
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    setClicked(!clicked)
  }

  return (
    <>
    <NavContainer>
        <h2>Mira que te <span>COMO</span></h2>
        <div className={`links ${clicked ? 'active' : ''}`}>
          <a href='/'>Home</a>
          <a href='/'>Shop</a>
          <a href='/'>Contact</a>
          <a href='/'>Blog</a>
        </div>
        <div className='hamburger'>
        <BurguerButton clicked={clicked} handleClick={handleClick}/>
       
        </div>
    </NavContainer>
        
    </>
  )
}
export default Navbar
const NavContainer = styled.nav `
    h2{
        font-weight: 400;
        color: white;
        span{
            font-weight: bold;
        }
    }
    padding: .4rem;
    background-color: blueviolet;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a{
      color: white;
      text-decoration: none;
      margin-right: 1rem;
     }

     .links{
      position: absolute;
      top: -700px;
      left: -2000px;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
      a{
        color: black;
        font-size: 2rem;
        display: block;
      }
       @media(min-width: 768px){
        position: initial;
        margin: 0;
       a{
          font-size: 1rem;
          color: #e0b0e6;
          display: inline;
        }
       }
     }

     .links.active{
      width: 100%;
      display: block;
      position: absolute;
      margin-left: auto;
      margin-right: auto;
      top: 30%;
      left: 0;
      right: 0;
      text-align: center;
      a{
        color: #cc0dcc;
      }
         
      }


     .hamburger{
      @media(min-width: 768px){
        display: none;
      }
     }
`