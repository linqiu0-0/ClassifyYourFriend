import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import ImagePreview from "./ImagePreview";
import BreedPredict from "../BreedPredict";
import { handlePostFetch } from '../Utils';

const Upload = ({ prevImages, photos }) => {
    const [files, setFiles] = useState([]);
    const [filesData, setFilesData] = useState([]);
    const [breed, setBreed] = useState("");
    const handleChange = (e) => {
        let newFiles = [...e.target.files];
        setFiles([...files, ...newFiles]);
        setFilesData([...filesData, {}]);
    };
    const handleClick = (index) => (e) => {
        setFiles(oldValues => {
            return oldValues.filter((_, i) => i !== index)
        })
        setFilesData(oldValues => {
            return oldValues.filter((_, i) => i !== index)
        })
    };

    const handleClassify = () => {
        handlePostFetch("classify", { image: filesData }).then((res) => {
            console.log(res)
            setBreed(res.breed);
        })
    

        
    }

    useEffect(() => {
        setFiles([...files, ...prevImages]);
    }, [prevImages]);

    const getFileData = (index) => (fileData) => {
        filesData[index] = fileData
        photos(filesData);
    }

    return (
        <div className='flex gap-10'>
            <div className='flex flex-col gap-12' >

                {files.map((file, index) => (
                    <ImagePreview file={file} key={index} onClick={handleClick(index)} getFileData={getFileData(index)} />
                ))}
                {(files.length === 0) ?
                    <>
                        <img src="images/placeholder.svg" alt="img_placeholder" width="300" height="300" />
                        <Button size="large" variant="contained" component="label" startIcon={<AddAPhotoIcon />}>
                            Upload Images
                            <input hidden accept="image/*" multiple type="file" onChange={handleChange} />
                        </Button>
                    </>
                    :
                    <Button size="large" variant="contained" component="label" onClick={handleClassify} startIcon={<AddAPhotoIcon />}>
                        Classify
                    </Button>
                }
            </div>
            {(breed) && <BreedPredict breed={breed}/>}
        </div>
    );
};

export default Upload;