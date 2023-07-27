import { firebaseApp, firebaseDb, firebaseStorage } from "../assets/fbase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
} from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";



export default function ImgUp() {
const fileInput = useRef(null);
const [imageUpload, setImageUpload] = useState<any>("");
const [image, setImage] = useState("");
const [images, setImages] = useState([]);
const [uploadStep, setUploadStep] = useState(1);

const selectFile = (file) => {
  console.log(file);
  setImageUpload(file);
  setUploadStep(2);
};

useEffect(() => {
  const imageRef = ref(firebaseStorage, `photo/${imageUpload.name}`); // storage directory (path, file name)
  if (!imageUpload) return;
  uploadBytes(imageRef, imageUpload).then((snapshot) => {
    getDownloadURL(snapshot.ref).then((url) => {
      setImage(url);
      console.log(url);
    });
  });
}, [imageUpload]);

const uploadImgUrl = async () => {
  await addDoc(collection(firebaseDb, "photo"), {
    imgUrl: image,
    timestamp: new Date(),
  });
  fetchImages();
  setImageUpload("");
  setImage("");
  setUploadStep(1);
};

async function fetchImages() {
  const photo = collection(getFirestore(firebaseApp), "photo");
  const result = await getDocs(query(photo, orderBy("timestamp", "desc")));
  const fetchData = result.docs.map((el) => el.data());
  setImages(fetchData);
}

useEffect(() => {
  fetchImages();
}, []);

  return(
    <>
    <ImgInput 
      onChange={(e) => fileInput(e.target.value)} 
    >
      <Img 
      onChange={(e) => setImage(e.target.value)} 
      />
    </ImgInput>
    </>
  )
}

const ImgInput = styled.input`
  width: 180px;
  height: 250px;

`

const Img = styled.img`

`