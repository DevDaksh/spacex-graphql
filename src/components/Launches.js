
const Launches = ({ launches }) => {

    return (
        <>
            {
                launches.map(el => (
                    <h2>{el}</h2>
                ))
            }
        </>
    )
}

export default Launches