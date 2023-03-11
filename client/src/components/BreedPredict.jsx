
const BreedPredict = ({ breed }) => {
    return (
        <div className="self-center">

            Your breed is
            <p className='font-sans text-center text-gray-800 font-bold text-5xl self-center'>
                {breed}
            </p >
        </div>
    );
}

export default BreedPredict