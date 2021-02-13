
const Launches = ({ launches, loading }) => {

    if (loading) {
        return (
            <h2>loading...</h2>
        )
    }

    return (
        <>
            {
                launches.map((el, idx) => (
                    <h2 key={idx}>{el.mission_name}</h2>
                ))
            }
        </>
    )
}

export default Launches