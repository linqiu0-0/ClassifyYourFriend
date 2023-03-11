const image_list = [
    'images/bulbasaur.png', 
    'images/border collie1.jpg',
    'images/border collie2.jpg',
    'images/Ragdoll.png',
];

const ExampleImages = ({ setImages }) => {
    const handleClickImage = () => {
        setImages()
    }
    return (
        <>
            <p>
                No Images? Try one of these:
            </p>
            <div className="flex flex-row h-20 gap-1">
                {image_list.map((image, index) => (
                    <button key = {index} onClick={handleClickImage}>
                    <img  src={image} alt={image} className="example_img" />
                    </button>
                ))}

            </div>
        </>

    );
}

export default ExampleImages;
