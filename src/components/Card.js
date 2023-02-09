

const Card = (props) => {
    const { name, email, id } = props;
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='this is a photo of a robot!' src={`https://robohash.org/${props.id}?set=set4`} />
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    )
}

export default Card;