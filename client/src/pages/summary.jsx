
import React from "react";
import Grid from '@mui/material/Grid';
import MainAppBar from "../components/AppBar";

const Summary = () => {
    // eslint-disable-next-line
    const [images, setImages] = React.useState("");


    return (
        <div className="bg-gray_50 min-h-screen w-[100%] ">
            <MainAppBar />
            <p className="font-sans text-center text-gray-800 font-bold text-5xl self-center pt-[80px]">
                CSE455 Final Project Demo
            </p>
            <Grid container spacing={1}>
                <Grid item xs={7}>
                    <div className="bg-white_A700 border-solid drop-shadow-xl  ml-12 my-12 rounded-radius10 items-center px-4 py-4">
                        <iframe width="100%" height="400" src="https://www.youtube.com/embed/nETU0XmlAbs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div className="bg-white_A700 border-solid drop-shadow-xl  ml-12 my-12 rounded-radius10 items-center px-4 py-4">
                        <p className='font-sans text-center text-indigo_700 font-bold text-2xl self-center'>
                            Problem Description:
                        </p >
                        <p>
                            A survey conducted by the American Pet Products Association (APPA) in 2021-2022 found that 70% of households own a pet. Among the 70%, there are 69 million U.S. households that own a dog compared to 45.3 million households that own a cat. People are constantly sharing pictures and video recordings of their pets through social media, but to other people, they may not know the breed of the pet they see. Therefore, we want to build a website that allows people to upload the pictures of the dog/cats and provide a classification result based on the training data.

                        </p>
                    </div>
                    <div className="bg-white_A700 border-solid drop-shadow-xl  ml-12 my-12 rounded-radius10 items-center px-4 py-4">
                        <p className='font-sans text-center text-indigo_700 font-bold text-2xl self-center'>
                            Approach
                        </p >
                        <p className="mb-[8px]">
                            First, we performed several data preprocessing steps to prepare our dataset for training. We began by cleaning the data and removing any images that were corrupted or of poor quality, and ensured that the dataset only contained images of cats and dogs. We then removed any dog or cat breeds that had fewer than 50 images in the dataset to ensure that there were enough images for each breed to train the models effectively. The dataset was then split into three separate sets for training, validation, and testing for each breed. We added data augmentation techniques such as random crop and random flip, to help the model generalize better to new images. Finally, the images in the dataset were resized to a standard size and normalized to ensure consistency and to ensure that the pixel values fell within a certain range.
                        </p>
                        <p className="mb-[8px]">
                            Then, we trained 3 models using Pytorch to fulfill our goal: one model for classifying cats and dogs, one model for cat breed classification, and one model for dog breed classification. Once the first model decides the species, our algorithm will forward the user uploaded images to the corresponding breed classification model and output the result.

                        </p>
                        <p>
                            For the first model, we used a neural network with 3 convolutional layers and 3 fully connected layers, and we got high accuracy on this first task. We also implement the batch normalization and the data augumentaion to regularize the model and improve accuarcy.
                            For the breed classification models, after we came up with our own 3 layer Convolutional Neural Network and performed some hyperparameter tuning, we found the results are not very promising. We then tried to use the examples from the class tutorials and the pretrained models to perform transfer learning, and we found that using ResNet 18 on our breed classification model can provide us with a high test accuracy (90%) after we fine tuned the hyperparameters.
                        </p>
                    </div>

                    <div className="bg-white_A700 border-solid drop-shadow-xl  ml-12 my-12 rounded-radius10 items-center px-4 py-4">
                        <p className='font-sans text-center text-indigo_700 font-bold text-2xl self-center'>
                            How does our approach differ from others? Was that beneficial?
                        </p >
                        <p>
                            Our project is not just about building a neural network model for breed classification, but also about creating a user-friendly web application that makes it easy for users to interact with the model and get predictions for the pet images. By creating a website that can accurately classify the breeds of dogs and cats, we provided a valuable resource for pet owners and pet lovers who want to learn more about different breeds of pets. If our model is trained on more breeds, our website can also be useful for animal shelters who need to quickly identify the breed of a cat or dog.
                        </p>
                    </div>





                </Grid>
                <Grid item xs={5}>
                    <div className="bg-white_A700 border-solid drop-shadow-xl  mx-12 my-12 rounded-radius10 items-center px-4 py-4">
                        <p className='font-sans text-center text-indigo_700 font-bold text-2xl self-center'>
                            Team member
                        </p >
                        <p>
                            Lin Qiu, Wenxin Zhang
                        </p>
                    </div>

                    <div className="bg-white_A700 border-solid drop-shadow-xl  mx-12 my-12 rounded-radius10 items-center px-4 py-4">
                        <p className='font-sans text-center text-indigo_700 font-bold text-2xl self-center'>
                            Data used:
                        </p >
                        <p>
                            Dog breed dataset:
                            <a href="https://www.kaggle.com/datasets/ma7555/cat-breeds-dataset"
                                className='text-sky-600 underline decoration-sky-600/30'> 70 Dog Breeds-Image Data Set
                            </a>
                        </p>
                        <p>
                            Cat breed dataset:

                            <a href="https://www.kaggle.com/datasets/imbikramsaha/cat-breeds"
                                className='text-sky-600 underline decoration-sky-600/30'> Oxford IIIT Cats </a>
                        </p>
                        <p>
                            Mixed dataset for the species model:

                        </p>
                        <a href="https://www.kaggle.com/datasets/zippyz/cats-and-dogs-breeds-classification-oxford-dataset"
                            className='text-sky-600 underline decoration-sky-600/30'> Cats and Dogs Breeds Classification Oxford Dataset
                        </a>

                    </div>

                    <div className="bg-white_A700 border-solid drop-shadow-xl  mx-12 my-12 rounded-radius10 items-center px-4 py-4">
                        <p className='font-sans text-center text-indigo_700 font-bold text-2xl self-center'>
                            Previous work
                        </p >
                        <p>
                            We use a pretrained model
                            <a href="https://pytorch.org/vision/master/models/generated/torchvision.models.resnet18.html"
                                className='text-sky-600 underline decoration-sky-600/30'>  ResNet18
                            </a>
                            {" for the breed classifers."}
                        </p>
                    </div>

                    <div className="bg-white_A700 border-solid drop-shadow-xl  mx-12 my-12 rounded-radius10 items-center px-4 py-4">
                        <p className='font-sans text-center text-indigo_700 font-bold text-2xl self-center'>
                            Results
                        </p >

                        <p>
                            We successfully built a website that allows users to upload images of dogs and cats and receive predictions on the breeds of the cat or dog. With our fine-tuned neural network models, we archived over 90% accuracy on all classifying tasks.

                        </p>
                    </div>

                    <div className="bg-white_A700 border-solid drop-shadow-xl  mx-12 my-12 rounded-radius10 items-center px-4 py-4">
                        <p className='font-sans text-center text-indigo_700 font-bold text-2xl self-center'>
                            Discussion
                        </p >
                        <p className='font-sans text-center text-indigo_700 font-bold text-2xl self-center'>
                            What problem do we encounter?
                        </p >
                        <p>
                            Initially, our model works well on the classifying cat/dogs and dog breeds, but it can classify cats on 50% accuracy. We tried using other pretrained models and they did not improve the results. Then, we investigated the first cat breed dataset we used and found some breeds such as “American Curl” and “Domestic long hair” are too generalized and contained a large variety of cats that looked very different from one another. This made it difficult for our model to accurately classify the cats into the correct breed. To solve this problem, we decided to switch to another dataset that only included breeds that were more distinct and had more consistent physical features.

                        </p>
                    </div>


                    <div className="bg-white_A700 border-solid drop-shadow-xl  mx-12 my-12 rounded-radius10 items-center px-4 py-4">
                        <p className='font-sans text-center text-indigo_700 font-bold text-2xl self-center'>
                            Next Steps
                        </p >
                        <p className="mb-[8px]">
                            The dog and cat breed classifier currently uses a basic CNN model that has achieved an accuracy of 90%. While this is a good starting point, we can explore ways to further improve the model's accuracy in the future. One way to improve the accuracy of the dog cat breed classifier is by fine-tuning a pre-trained model, such as VGG16 or ResNet50. These models have already been trained on large datasets and have achieved high accuracies, making them suitable as starting points for transfer learning.
                        </p>
                        <p>
                            Our new cat breed dataset only contains 12 different breeds whereas the Cat Fanciers Association recognizes 42 pedigree breeds of cats, so we would like to improve our model to include more cat breeds while ensuring the high performance of our model. We would also like to expand our model to classify other common pets such as rabbits and hamsters.


                        </p>
                    </div>









                </Grid>
            </Grid>
        </div >


    );
}
export default Summary;