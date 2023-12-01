import React, { useEffect, useState } from "react";
import "./index.css";
import HeaderIvyMoDa from "../HeaderIvymoda";
import IntroduceAndEndIvyPage from "../IntroduceAndEndIvyPage";
import { Link } from "react-router-dom";
import axios from "axios";
import fetchAlluser from "../UserPage/aixosFile/axios"


const initFormValue = {
    familyname: "",
    name: "",
    email: '',
    phone: '',
    date: "",
    password: '',
    checkpassword: '',
    License: false,
    gender: '123',

};

export default function SignUpIvymoda(props) {





    const [formValue, setFormValue] = useState(initFormValue);
    const [formError, setFormError] = useState({});


    const isEmptyValue = (value) => {
        return !value || value.trim().lenght < 2;
    }

    let emailRegrex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    const invalidEmail = (email) => {
        return emailRegrex.test(email);

    }



    const validateForm = () => {
        const error = {};
        if (isEmptyValue(formValue.familyname)) {
            error['familyname'] = "Firs Name is required";
        }
        if (isEmptyValue(formValue.name)) {
            error['familyname'] = "Name is required";
        }
        if (isEmptyValue(formValue.email)) {
            error['email'] = "email is required";
            if (!invalidEmail(formValue.email)) {
                error['email'] = 'Email is invalid'
            }
        }
        if (isEmptyValue(formValue.phone)) {
            error['phone'] = "Phone is required";
            if (formValue.phone.length < 1) {
                error['phone'] = "Phone is invalid";
            }
        }

        if (isEmptyValue(formValue.password)) {
            error['password'] = "password is required";

        } if (isEmptyValue(formValue.checkpassword)) {
            error['checkpassword'] = "checkpassword is required";
            if (formValue.checkpassword !== formValue.password) {
                error['checkpassword'] = "Your password doesn't match "
            }
        }

        setFormError(error);
        console.log(error);
        return Object.keys(error).lenght === 0;

    }



    const handleChange = (event) => {
        const { value, name } = event.target
        setFormValue({
            ...formValue,
            [name]: value,
        })
    }

    console.log(formError);






    const [post, setPost] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(event.target.elements.familyname.value) // from elements property
        // console.log(event.target.elements.name.value)
        // console.log(event.target.elements.familyname.value)
        // console.log(event.target.elements.email.value)
        // console.log(event.target.elements.phone.value)
        // console.log(event.target.elements.year.value)
        // console.log(event.target.elements.gender.value)
        // console.log(event.target.elements.password.value)
        // console.log(event.target.elements.checkpassword.value)


        console.log('form value : ', formValue)

        axios.post("https://bf5e-1-52-41-206.ngrok-free.app/API/Signupapiphpivymoda/ivymodasignup.php", {
            id: formValue.phone,
            name: formValue.name,
            phone: formValue.phone,
            email: formValue.email,
            age: formValue.date,
            password: formValue.password,
           

        }, {
            headers: {
                "ngrok-skip-browser-warning": "69420"
            }
        }).then((response) => {
            setPost(response.data);
        });



    }





    return (
        <div>
            <div>
                <HeaderIvyMoDa></HeaderIvyMoDa>
            </div>
            <div className="HeaderPageIVYMODA">
                <h2>Đăng ký</h2>
            </div>

            <form onSubmit={handleSubmit} method="post">
                <div className="AllMainSighUpIVYMODA">

                    <div className="MainLeftSignUpivymoda">
                        <div>
                            <h4>Thông tin khách hàng</h4>
                        </div>
                        <div className="AllInputInformationIvymodaSignup">
                            <div className="InformationIvymodaSignup">
                                <div >
                                    <p>Họ:*</p>
                                    <input placeholder="Họ..." name="familyname"
                                        value={formValue.familyname}
                                        onChange={handleChange}>
                                    </input>
                                    {formError.familyname && (
                                        <div className="ERROR_feedback">
                                            {formError.familyname}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="InformationIvymodaSignup" >
                                <p>Tên:*</p>
                                <input placeholder="Tên..." name="name"
                                    value={formValue.name}
                                    onChange={handleChange}></input>
                                {formError.name && (
                                    <div className="ERROR_feedback">
                                        {formError.name}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="AllInputInformationIvymodaSignup">
                            <div className="InformationIvymodaSignup">
                                <div className="InformationIvymodaSignup">
                                    <p>Email:*</p>
                                    <input placeholder="Email..." name="email"
                                        value={formValue.email}
                                        onChange={handleChange}></input>
                                    {formError.email && (
                                        <div className="ERROR_feedback">
                                            {formError.email}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="InformationIvymodaSignup">
                                <div className="InformationIvymodaSignup" >
                                    <p>Điện thoại:*</p>
                                    <input placeholder="Điện thoại..." type="number" name="phone"
                                        value={formValue.phone}
                                        onChange={handleChange}></input>
                                    {formError.phone && (
                                        <div className="ERROR_feedback">
                                            {formError.phone}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="AllInputInformationIvymodaSignup">
                            <div className="InformationIvymodaSignup">
                                <div className="InformationIvymodaSignup">
                                    <p>Ngày sinh:*</p>
                                    <input type="date" placeholder="Ngày sinh..." name="date"
                                    ></input>
                                </div>
                            </div>
                            <div className="InformationIvymodaSignup">
                                <div className="InformationIvymodaSignup" >
                                    <p>Giới tính:*</p>
                                    <select name="gender" id="" placeholder="Giới tính"
                                    >
                                        <option value={formValue.gender}
                                        >Nam</option>
                                        <option value={formValue.gender}
                                        >Nữ</option>
                                        <option value={formValue.gender}
                                        >Khác</option>

                                    </select>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="MainRightSignUpIvymoda">
                        <div>
                            <h4>Thông tin mật khẩu</h4>
                        </div>
                        <div className="InputPassWordSignUpIVYMODA">
                            <div className="InformationIvymodaSignup" >
                                <p>Mật khẩu:*</p>
                                <input placeholder="Mật khẩu..." name="password" type="password"
                                    value={formValue.password}
                                    onChange={handleChange}></input>
                                {formError.password && (
                                    <div className="ERROR_feedback">
                                        {formError.password}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="InputPassWordSignUpIVYMODA">
                            <div className="InformationIvymodaSignup">
                                <p>Nhập lại mật khẩu:*</p>
                                <input placeholder="Nhập lại mật khẩu..." name="checkpassword" type="password"
                                    value={formValue.checkpassword}
                                    onChange={handleChange}></input>
                                {formError.checkpassword && (
                                    <div className="ERROR_feedback">
                                        {formError.checkpassword}
                                    </div>
                                )}


                            </div>
                        </div>
                        <div>
                            <div className="AccesLicenseIVYmoda">
                                <div>
                                    <div className="InformationIvymodaSignup" >
                                        <input type="checkbox" name="License"
                                            value={formValue.License}
                                            onChange={handleChange}></input>
                                    </div>
                                </div>
                                <div>
                                    <p>Đồng ý với các <Link>điều khoản</Link> của IVY</p>
                                </div>
                            </div>

                        </div>
                        <div className="ButtonForSignInIvyMODA">
                            <div className="InformationIvymodaSignup" >
                                <button className="ButtonForSignInIvyMODA" type="submit">ĐĂNG KÝ</button>
                            </div>
                        </div>


                    </div>
                </div>
            </form>
            <div>
                <IntroduceAndEndIvyPage></IntroduceAndEndIvyPage>
            </div>
        </div>
    )
}

