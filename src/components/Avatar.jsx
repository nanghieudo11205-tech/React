
function Avatar(props) {
    const {name, gender, image} = props; 
  return (
    <>
    <h2>Hello {gender?'Mr.':'Miss'} {name}!</h2>
    <img src={image} width={200} height={200} />
    </>
  );
}

export default Avatar