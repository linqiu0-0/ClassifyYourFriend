
import React from "react";
import Upload from "../components/ImageUpload/Upload";
import MainAppBar from "../components/AppBar";

const Home = () => {
    // eslint-disable-next-line
    const [images, setImages] = React.useState("");


    return (
        <div className="bg-gray_50 flex flex-col  gap-12 items-center min-h-screen w-[100%] ">
            <MainAppBar/>
            <div className="w-[45%] items-center pt-[80px]">
                <p className='font-sans text-center text-gray-800 font-bold text-5xl self-center'>
                    Upload your cat or dog image
                    to classify its breed
                </p >
            </div>
            <div className="bg-white_A700  drop-shadow-xl  px-12 py-12 rounded-radius10">
                <Upload classname="self-center" photos={photoData => {
                    setImages(photoData);
                }} prevImages={[]} />
            </div>
        </div>


    );
}
export default Home;