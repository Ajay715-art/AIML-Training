import './App.css'
import CompOne from '../components/CompOne'
import CompTwo from '../components/CompTwo'

function App() {

  return (
    <>
    <div className='header'>
      <CompOne name="Ajay" rollno="23N31A66V1" age={21} imgSrc="ajay.jpg" />
      <CompOne name="Bhanu" rollno="23N31A66Y5" age={20} imgSrc="Bhanu25.jpg" />
      <CompOne name="Veteesh" rollno="23N31A66X0" age={20} imgSrc="v1.jpg" />
      <CompOne name="Nandhu" rollno="23N31A66Y0" age={20} imgSrc="n2.jpg" />
      <CompOne name="Santosh" rollno="23N31A66U7" age={21} imgSrc="s1.jpg" />
      <CompOne name="Sai Kumar" rollno="24N35A6632" age={21} imgSrc="sai1.jpg" />
    </div>
    </>
  )
}

export default App;
