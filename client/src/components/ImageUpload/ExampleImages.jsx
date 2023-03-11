import Button from '@mui/material/Button';

const image_list = {
    'images/bulbasaur.png': 'bulbasaur',
    'images/golden_retriever.png':'golden_retriever',
    'images/border_collie.jpg':'border_collie',
    'images/Ragdoll.png':'Ragdoll',
};

const ExampleImages = ({ uploadLocalFile }) => {


    const handleClickImage = (filePath) => {

        var data =require('../../assets/sampleImageBase64.json');
        let key= image_list[filePath]
        let base64_string=data[key]
       
        let blob = new Blob([Uint8Array.from(atob(base64_string), c => c.charCodeAt(0))], {type:'image/png'});
        let file = new File([blob],filePath);
        uploadLocalFile(file)
    }


    return (
        <div>
            <p className='font-sans text-gray-600 font-bold text-1xl'>
                No Images? Try one of these:
            </p>
            <div className="flex flex-row h-20 gap-1">
                {Object.keys(image_list).map((image, index) => (
                    <Button key={index} onClick={() => handleClickImage(image)}>
                        <img src={image} alt={image} className="example_img" />
                    </Button>
                ))}

            </div>
        </div>

    );
}

export default ExampleImages;
