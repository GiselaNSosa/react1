import React from 'react'
import styled from 'styled-components'

function BurguerButton (props) {
  return (
    <Burguer> 
    <div onClick={props.handleClick} className={`hamburger ${props.clicked ? 'open' : ''}`}>
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
    </div>
    </Burguer>
  )
}
export default BurguerButton
const Burguer = styled.div `
 .hamburger .line{
  width: 50px;
  height: 5px;
  background-color: #e1e9eb;
  display: block;
  margin: 8px auto;
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.hamburger:hover{
  cursor: pointer;
}


#hamburger.is-active .line:nth-child(2){
  opacity: 0;
}

#hamburger.is-active .line:nth-child(1){
  -webkit-transform: translateY(13px) rotate(45deg);
  -ms-transform: translateY(13px) rotate(45deg);
  -o-transform: translateY(13px) rotate(45deg);
  transform: translateY(13px) rotate(45deg);
}

#hamburger.is-active .line:nth-child(3){
  -webkit-transform: translateY(-13px) rotate(-45deg);
  -ms-transform: translateY(-13px) rotate(-45deg);
  -o-transform: translateY(-13px) rotate(-45deg);
  transform: translateY(-13px) rotate(-45deg);
}
`
