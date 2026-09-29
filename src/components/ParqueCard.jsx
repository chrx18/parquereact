const ParqueCard = ({ nombre, imagen, descripcion, likes}) => {
return (
<>
    <div className="card bg-light">
        <img className="card-img-top" src={imagen} alt={nombre} />
        <div className="card-body">
            <h2 className="card-title text-center bg-success rounded-4 text-white">{nombre}</h2>

            <div className="card-text p-3" dangerouslySetInnerHTML={{ __html: descripcion }}>
            </div>
            <p>Likes: {likes}</p>
        </div>
    </div>
</>
);
};
export default ParqueCard;