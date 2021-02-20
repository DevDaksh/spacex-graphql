
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
                    <div key={idx} className="container mx-auto py-6 rounded-md min-w-min min-h-min  ">
                        <h2 className="text-3xl text-white-100">{el.mission_name}</h2>
                        <h4 className='text-sm'>{el.launch_year}</h4>
                        <p className="text-xl">{el.rocket.rocket_name}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Launches