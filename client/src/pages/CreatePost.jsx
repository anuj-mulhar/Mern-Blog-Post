import { Button, FileInput, Select, TextInput } from "flowbite-react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import React from "react";

export default function CreatePost() {
  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl my-7 font-semibold">Create a post</h1>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput
            type="text"
            placeholder="Title"
            required
            id="title"
            className="flex-1"
          />
          <Select>
            <option value="uncategorized">Select a category</option>
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="javascript">JavaScript</option>
            <option value="sql">SQL</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="php">Php</option>
            <option value="c">C </option>
            <option value="c++">C++ </option>
            <option value="c#">C# </option>
            <option value="bootstrap">Bootstrap </option>
            <option value="react">React </option>
            <option value="mysql">MySQL </option>
            <option value="jquery">JQuery </option>
            <option value="django">Django </option>
            <option value="numpy">Numpy </option>
            <option value="pandas">Pandas </option>
            <option value="nodejs">NodeJS </option>
            <option value="r">R </option>
            <option value="typescript">Typescript</option>
            <option value="angular"> Angular</option>
            <option value="git">Git </option>
            <option value="postgresql">PostgreSQL </option>
            <option value="mongodb"> MongoDB</option>
            <option value="asp">ASP </option>
            <option value="go"> GO</option>
            <option value="kotlin"> Kotlin</option>
            <option value="vue">VueJS </option>
            <option value="dsa"> DSA</option>
            <option value="genai"> GENAI</option>
            <option value="scipy"> SCIPY</option>
            <option value="aws"> AWS</option>
            <option value="datascience"> Data Science</option>
            <option value="cybersecurity"> Cybersecurity</option>
          </Select>
        </div>
        <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3 ">
          <FileInput type="file" accept="image/*" />
          <Button
            type="button"
            gradientDuoTone="purpleToBlue"
            size="sm"
            outline
          >
            Upload Image
          </Button>
        </div>
        <ReactQuill theme="snow" placeholder="Write Something..." className="h-72 mb-12" required/>
        <Button type="submit" gradientDuoTone='purpleToPink' > Publish </Button>
      </form>
    </div>
  );    
}
