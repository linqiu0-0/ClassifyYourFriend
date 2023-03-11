import React, { useState } from 'react';
import { Button } from '@mui/material';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import ImagePreview from "./ImagePreview";
import BreedPredict from "../BreedPredict";
import { handlePostFetch } from '../Utils';

const Upload = () => {
    const [file, setFile] = useState([]);
    const [fileData, setFileData] = useState([]);
    const [breed, setBreed] = useState("");
    
    const handleChange = (e) => {
        console.log(e.target.files);
        let newFiles = [...e.target.files];
        setFile([...file, ...newFiles]);
        setFileData([...fileData, {}]);
        console.log(fileData);
    };
    
    const handleClick = (index) => (e) => {
        setFile(oldValues => {
            return oldValues.filter((_, i) => i !== index)
        })
        setFileData(oldValues => {
            return oldValues.filter((_, i) => i !== index)
        })
    };

    const handleClassify = () => {
        handlePostFetch("classify", { image: fileData }).then((res) => {
            setBreed(res.breed);
        })
    }

    const getFileData = (index) => (fileData) => {
        fileData[index] = fileData
    }

    return (
        <div className='flex gap-10'>
            <div className='flex flex-col gap-12' >

                {file.map((file, index) => (
                    <ImagePreview file={file} key={index} onClick={handleClick(index)} getFileData={getFileData(index)} />
                ))}
                {(file.length === 0) ?
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
            {(breed && file.length !== 0) && <BreedPredict breed={breed}/>}
        </div>
    );
};

export default Upload;