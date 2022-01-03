const todoTitle = "Call Family";
const todoDesc = "Ipsum no sea sadipscing consetetur vero. Nonumy justo diam sed lorem sit, sed sit clita sit takimata sed sanctus invidunt.";
const fullDate = new Date();
const date = fullDate.getDate() + "/" + fullDate.getMonth() + "/"+ fullDate.getFullYear();


function Card(props){
  const {Title,Desc} = props;
  return     <div  className="card-style">
                <h3>{Title}</h3>
                <p>{Desc}</p>
                <p>{date}</p>
             </div>
}

export default Card;
