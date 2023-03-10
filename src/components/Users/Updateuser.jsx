import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Updateuser = () => {

    const [id, idchange] = useState("");
    const [name, namechange] = useState("");
    const [password, passwordchange] = useState("");
    const [email, emailchange] = useState("");
    const [phone, phonechange] = useState("");
    const [cPassword, Cpasswordchange] = useState("");
    const [profile, profilechange] = useState("");
    const [gender, genderchange] = useState("");

    const navigate = useNavigate();

    const IsValidate = () => {
        let isproceed = true;
        let errormessage = 'Please enter the value in ';
        if (id === null || id === '') {
            isproceed = false;
            errormessage += ' id';
        }
        if (name === null || name === '') {
            isproceed = false;
            errormessage += ' name';
        }
        if (password === null || password === '') {
            isproceed = false;
            errormessage += ' Password';
        }
        if (cPassword !== password || cPassword === '') {
          isproceed = false;
          errormessage += ' Comfirm-Password';
      }
        if (email === null || email === '') {
            isproceed = false;
            errormessage += ' Email';
        }

        if(!isproceed){
            toast.warning(errormessage)
        }else{
            if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){

            }else{
                isproceed = false;
                toast.warning('Please enter the valid email')
            }
        }
        return isproceed;
    }


    const handlesubmit = (e) => {
            e.preventDefault();
            let regobj = { id, name, password, email, phone, cPassword, profile, gender };
            if (IsValidate()) {
            //console.log(regobj);
            fetch(`http://localhost:8000/user/${id}`, {
                method: "PUT",
                headers: { 'content-type': 'application/json'  },
                body: JSON.stringify(regobj)
            }).then((res) => {
                toast.success('update successfully.')
                navigate('/');
            }).catch((err) => {
                toast.error('Failed :' + err.message);
            });
        }
    }
    return (
        <div>
            <div className="offset-lg-3 col-lg-6">
                <form className="container" onSubmit={handlesubmit}>
                    <div className="card">
                        <div className="card-header">
                            <h1 className="text-center">Update User</h1>
                        </div>
                        <div className="card-body">

                            <div className="row">

                            <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>id <span className="errmsg">*</span></label>
                                        <input type='number' value={id} onChange={e => idchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                            <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Name <span className="errmsg">*</span></label>
                                        <input type='text' value={name} onChange={e => namechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Email <span className="errmsg">*</span></label>
                                        <input type='email' value={email} onChange={e => emailchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                
                               
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Password <span className="errmsg">*</span></label>
                                        <input  type='password' value={password} onChange={e => passwordchange(e.target.value)}  className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Comfirm-Password <span className="errmsg">*</span></label>
                                        <input type='password' value={cPassword} onChange={e => Cpasswordchange(e.target.value)}  className="form-control"></input>
                                    </div>
                                </div>
                               
                                
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Phone <span className="errmsg"></span></label>
                                        <input type='number' value={phone} onChange={e => phonechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Profile</label>
                                        {/* <input type="file" class="form-control" id="inputGroupFile02"></input> */}
                                        <input type='file' value={profile} onChange={e => profilechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

   
                                <div className="col-lg-6 ">
                                    <div className="form-group ">
                                        <label>Gender</label>
                                        <br></br>
                                        <input type="radio" checked={gender === 'male'} onChange={e => genderchange(e.target.value)} name="gender" value="male" className="app-check"></input>
                                        <label className="m-2"  >Male</label>
                                        <input type="radio" checked={gender === 'female'} onChange={e => genderchange(e.target.value)} name="gender" value="female" className="app-check"></input>
                                        <label className="m-2" >Female</label>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="d-grid gap-2 col-6 mx-auto">
                            <button type="submit" className="btn btn-primary mt-2 mb-4">Update</button> 
                            
                        </div>
                    </div>
                </form>
            </div>


        </div>
    );
}

export default Updateuser;





