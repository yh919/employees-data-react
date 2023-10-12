import React, {useState} from "react";
import Form from "../Layout/Form";
import Button from "../Layout/Button";




const AddUser = ({addUserHandler , close}) => {
    
    
    
    const getInitialState = () => {
        const gender = "male";
        return gender;
    };
    
        const [name, setName] = useState('');
        const [age, setAge] = useState('');
        const [title, setTitle] = useState('');
        const [gender, setGender] = useState(getInitialState);

  const handleSelectChange = (e) => {
    setGender(e.target.value);
    };
    
    const onSubmitHandler = (e) => {
        e.preventDefault();

        addUserHandler({
            id: Math.round(Math.random() * 100),
            name,
            age,
            title,
            gender,
        });
        // setName('');
        // setAge('');
        // setTitle('');
        // setGender('');
        close();
    
    }



    return (
        <Form onSubmit={onSubmitHandler}>
            <Form.Controller>
                <label htmlFor="name">Name</label>
                <input onChange={(e) => setName(e.target.value) } type="text" placeholder="Enter Name" id="name" value={name} />
                <label htmlFor="age">Age</label>
                <input onChange={(e) => setAge(e.target.value)} type="text" placeholder="Enter Age" id="age" value={age} />
                <label htmlFor="title">Title</label>
                <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Enter Title" id="title" value={title} />
                <label htmlFor="gender">Gender</label>
                <select onChange={handleSelectChange} value={gender} id="gender">
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                </select>
                <Form.Controller>
                    <Button type='submit'>Submit</Button>
                    <Button type='reset'>Reset</Button>
                </Form.Controller>
            </Form.Controller>
        </Form>
     );
}
 
export default AddUser;