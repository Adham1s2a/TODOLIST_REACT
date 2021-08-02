
const Button = ({color,text,show,Addtaskbutton}) => {
      
    return (
      <>
      <button style={{width:'10%', backgroundColor: color,color:'white',textAlign: 'center',borderRadius: '12px'}} onClick= {Addtaskbutton}> {text}</button>
      </>
    )
}

export default Button
