const Options = ({ nombre, src }) => {
    return (
        <div>
            <div>
                <h1>{nombre}</h1>
            </div>
            <div>
                <img src={src} />
            </div>
        </div>
    )
}

export default Options