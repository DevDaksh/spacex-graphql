
const Launches = ({ launches, loading }) => {

    if (loading) {
        return (
            <h2>loading...</h2>
        )
    }

    return (
        <div className="self-center">
            {
                launches.map((el, idx) => (
                    <div className="container mx-auto py-6">
                        <h2 key={idx} className="text-md text-white-100">{el.mission_name}</h2>

                    </div>
                ))
            }
        </div>
    )
}

export default Launches