import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Card from "./card";

function App() {
  const [picture, setPicture] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=nzWAShtLCbz8b2khTE0vdq7tqDuRXXVHm7VfKZ42"
      )
      .then((response) => {
        setPicture(response.data.url);
        setTitle(response.data.title);
        console.log(title);
        console.log(picture);
        console.log(response);
        console.log(response.data);
        console.log(response.data.url);
        console.log(response.data.title);
      })
      .catch((error) => {
        console.log("The data was not returned", error);
      });
  }, []);

  return (
    <div className="App">
      <Card title={title} picture={picture} />
    </div>
  );
}
export default App;

/*
data response:

Object
copyright: "Helmut Schnieder"
date: "2020-05-28"
explanation: "Still bathed in sunlight, the International Space Station arced through the evening sky over lake Wulfsahl-Gusborn in northern Germany, just after sunset on March 25. The familiar constellation of Orion can be seen left of the trail of the orbital station's bright passage. On the right, Venus is the brilliant evening star above the western horizon. With the camera fixed to a tripod, this scene was captured in a series of five exposures. How can you tell? The short time delay between the end of one exposure and the beginning of the next leaves small gaps in the ISS light trail. Look closely and you'll also see that the sky that appears to be above the horizon is actually a reflection though. The final image has been vertically inverted and the night skyscape recorded in the mirror-like waters of the small lake."
hdurl: "https://apod.nasa.gov/apod/image/2005/ISS-Lighttrail-Reflection.jpg"
media_type: "image"
service_version: "v1"
title: "Reflecting the International Space Station"
url: "https://apod.nasa.gov/apod/image/2005/ISS-Lighttrail-Reflection_invert.jpg"

and also


{copyright: "Helmut Schnieder", date: "2020-05-28", explanation: "Still bathed in sunlight, the International Space …rded in the mirror-like waters of the small lake.", hdurl: "https://apod.nasa.gov/apod/image/2005/ISS-Lighttrail-Reflection.jpg", media_type: "image", …}
copyright: "Helmut Schnieder"
date: "2020-05-28"
explanation: "Still bathed in sunlight, the International Space Station arced through the evening sky over lake Wulfsahl-Gusborn in northern Germany, just after sunset on March 25. The familiar constellation of Orion can be seen left of the trail of the orbital station's bright passage. On the right, Venus is the brilliant evening star above the western horizon. With the camera fixed to a tripod, this scene was captured in a series of five exposures. How can you tell? The short time delay between the end of one exposure and the beginning of the next leaves small gaps in the ISS light trail. Look closely and you'll also see that the sky that appears to be above the horizon is actually a reflection though. The final image has been vertically inverted and the night skyscape recorded in the mirror-like waters of the small lake."
hdurl: "https://apod.nasa.gov/apod/image/2005/ISS-Lighttrail-Reflection.jpg"
media_type: "image"
service_version: "v1"
title: "Reflecting the International Space Station"
url: "https://apod.nasa.gov/apod/image/2005/ISS-Lighttrail-Reflection_invert.jpg"

*/
