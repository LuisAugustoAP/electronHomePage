import "./cardAnimated.css"

type CardAnimatedProps = {
  typeCard: string,
  text?: string,
}

const CardAnimated = (props: CardAnimatedProps) => {

  return (
    <>
      {props.typeCard=="animatedRainbow"?
        <div className="card_animated">
          <span className="fa-solid fa-house"/>
        </div>
      :
        <div className="card_animated_new">
          <span className="fa-solid fa-house"/>
          <a>{props.text!=""&&props.text!=null? props.text : "Card"}</a>
        </div>
      } 
    </>
  )
}

export default CardAnimated
