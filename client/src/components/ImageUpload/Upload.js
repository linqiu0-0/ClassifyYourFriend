import React, { useState } from 'react';
import { Button } from '@mui/material';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import ImagePreview from "./ImagePreview";
import ExampleImages from "./ExampleImages";
import BreedPredict from "../BreedPredict";
import { handlePostFetch } from '../Utils';

const Upload = () => {
    const [file, setFile] = useState();
    const [fileData, setFileData] = useState();
    const [breed, setBreed] = useState("");

    const handleChange = (e) => {
        let newFiles = e.target.files[0];
        // console.log(e.target.files[0]);
        setFile(newFiles);
        setFileData({});
    };

    const handleClose = () => {
        setFile()
        setFileData()
        setBreed()
    };

    const handleClassify = () => {
        console.log(fileData)
        handlePostFetch("classify", { image: fileData }).then((res) => {
            setBreed(res.breed);
        })
       
    }

    const getFileData = (fileData) => {
        setFileData(fileData)
    }

    return (
        <div className='flex gap-10'>
            {file ?
                <div className='flex flex-col gap-12' >
                    <ImagePreview file={file} onClick={handleClose} getFileData={getFileData} />
                    <Button size="large" variant="contained" component="label" onClick={handleClassify} startIcon={<AddAPhotoIcon />}>
                        Classify
                    </Button>
                </div>
                :
                <div className='flex flex-col gap-4' >
                    <img src="images/placeholder.svg" alt="img_placeholder" width="100%" height="100%" className='mb-2' />
                    <Button size="large" variant="contained" component="label" startIcon={<AddAPhotoIcon />}>
                        Upload Images
                        <input hidden accept="image/*" multiple type="file" onChange={handleChange} />
                    </Button>
                    <ExampleImages uploadLocalFile={(localFile) => setFile(localFile)} />
                </div>
            }
            {(breed && file) && <BreedPredict breed={breed} />}
        </div>
    );
};

export default Upload;