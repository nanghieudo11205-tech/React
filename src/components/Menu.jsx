import {NavLink} from 'react-router-dom';

function Menu() {
  return (
    <div className='d-flex flex-row' style={{backgroundColor:'#5C4F4A'}}>
       <NavLink className='p-3'
       style={({isActive})=>({
        color:isActive?'chocolate':'white',
        textDecoration:'none',marginLeft:100
       })}
       to='/movie'>MOVIES</NavLink>
       <NavLink className='p-3'
       style={({isActive})=>({
        color:isActive?'chocolate':'white',
        textDecoration:'none'
       })}
       to='/book'>BOOKS</NavLink>
       <NavLink className='p-3'
       style={({isActive})=>({
        color:isActive?'chocolate':'white',
        textDecoration:'none'
       })}
       to='/bai2'>Bai 2</NavLink>
       <NavLink className='p-3'
       style={({isActive})=>({
        color:isActive?'chocolate':'white',
        textDecoration:'none'
       })}
       to='/hello'>Hello</NavLink>
       <NavLink className='p-3'
       style={({isActive})=>({
        color:isActive?'chocolate':'white',
        textDecoration:'none'
       })}
       to='/items'>Items</NavLink>
       <NavLink className='p-3'
       style={({isActive})=>({
        color:isActive?'chocolate':'white',
        textDecoration:'none'
       })}
       to='/vidu1'>VI DU 1</NavLink>
         <NavLink className='p-3'
       style={({isActive})=>({
        color:isActive?'chocolate':'white',
        textDecoration:'none'
       })}
       to='/movie'>MOVIES</NavLink>
    </div>
  )
}

export default Menu