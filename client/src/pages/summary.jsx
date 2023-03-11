
import React from "react";
import Grid from '@mui/material/Grid';
import MainAppBar from "../components/AppBar";
import { Link } from "react-router-dom";

const Summary = () => {
    // eslint-disable-next-line
    const [images, setImages] = React.useState("");


    return (
        <div className="bg-gray_50 min-h-screen w-[100%] ">
            <MainAppBar />
            <p className="font-sans text-center text-gray-800 font-bold text-5xl self-center pt-[80px]">
                CSE455 Final Project Demo
            </p>
            <Grid container spacing={2}>
                <Grid item xs={7}>
                    <div className="w-[100%] items-center pt-[100px]">
                        <p className='font-sans text-center text-gray-800 font-bold text-5xl self-center'>
                            Embedded youtube video
                        </p >
                    </div>
                </Grid>
                <Grid item xs={5}>
                    <div className="bg-white_A700 border-solid drop-shadow-xl  mx-12 my-12 rounded-radius10 items-center px-4 py-4">
                        <p className='font-sans text-center text-indigo_700 font-bold text-2xl self-center'>
                            Problem Description:
                        </p >
                        <p>
                            We train a classifier that is able to classify cat and dog breed. The classifier will be trained on a large dataset of cat and dog images and will be able to identify the specific breed of a cat or dog image with high accuracy.


                        </p>
                    </div>
                    <div className="bg-white_A700 border-solid drop-shadow-xl  mx-12 my-12 rounded-radius10 items-center px-4 py-4">
                        <p className='font-sans text-center text-indigo_700 font-bold text-2xl self-center'>
                            Data used:
                        </p >
                        <p>
                            Cat breed dataset:
                            <a href="https://www.kaggle.com/datasets/ma7555/cat-breeds-dataset"> link </a>
                        </p>
                        <p>
                            Dog breed dataset:
                            <a href="https://www.kaggle.com/datasets/gpiosenka/70-dog-breedsimage-data-set"> link </a>
                        </p>
                        <p>
                            Mixed dataset:
                            <a href="https://www.kaggle.com/datasets/zippyz/cats-and-dogs-breeds-classification-oxford-dataset"> link </a>
                        </p>

                    </div>
                    <div className="bg-white_A700 border-solid drop-shadow-xl  mx-12 my-12 rounded-radius10 items-center px-4 py-4">
                        <p className='font-sans text-center text-indigo_700 font-bold text-2xl self-center'>
                            Techniques:
                        </p >
                        <p>
                            To improve the accuracy of our classification, this project will be split into to parts. First, we will train a binary classification model [model_1] that can classify cats and dogs separately. Second, we will develop two models to classify cat breeds and dog breeds separately. User’s input photo will be first processed in the model_1 and it will go to the dog breed model or cat breed model depends on result from model_1. By doing so, we can reduce the complexity of the problem and increase the accuracy of the model.

                            We might use various machine learning classification methods, including logistic regression,  k-nearest neighbors, CNN and etc. After trying different algorithms, we can evaluate their performance and select the best one for our problem. We can then fine-tune the model to improve its accuracy and optimize its hyperparameters.


                        </p>
                    </div>




                </Grid>
            </Grid>
        </div >


    );
}
export default Summary;