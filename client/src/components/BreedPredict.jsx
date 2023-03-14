
const BreedPredict = ({ breed }) => {
    return (
        <div className="self-center">

            Your pet's breed is
            {breed !== "Bulbasaur" ?
                <p className='font-sans text-center text-gray-800 font-bold text-5xl self-center'>
                    {breed}
                </p >
                :
                <div className="gap-1">
                    <p className='font-sans text-center text-gray-800 font-bold text-5xl self-center'>
                        {breed + ":)"}
                    </p >
                    <p>
                        You have unlocked the mystery breed!
                    </p>
                </div>
            }
        </div>
    );
}

export default BreedPredict