import React, { useState, useEffect } from "react";
import HeaderIvyMoDa from "../HeaderIvymoda";
import IntroduceAndEndIvyPage from "../IntroduceAndEndIvyPage";
import './index.css'
import { Link } from "react-router-dom";
import axios from "axios";

const initFormValue = {
    email: '',
    password: '',
}

export default function SigninIVYmoda(props) {

    const [formValue, setFormValue] = useState(initFormValue);





    const handleChange = (event) => {
        const { value, name } = event.target
        setFormValue(
            {
                ...formValue,
                [name]: value,
            }
        )
    }

    const validateForm = () => {

    }


    const isEmptyValue = (value) => {
        return !value || value.trim().lenght < 2;
    }



    const [post, setPost] = useState(null);
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('https://b097-117-1-109-1.ngrok-free.app/API/SigninIvymoda/signinivymoda.php', {
            email: formValue.email,
            password: formValue.password,
            phone: formValue.phone,
        },
            {
                headers: {
                    "ngrok-skip-browser-warning": "69420"
                }
            }).then((response) => {
                setPost(response.data);
            });
    }

    console.log(formValue.email);

    return (
        <div>
            <div>
                <HeaderIvyMoDa></HeaderIvyMoDa>
            </div>

            <div className="AllFormsigin_Ivymoda">
                <div className="MainLeftSiginIVY">
                    <h2>Bạn đã có tài khoản IVY</h2>
                    <p>Nếu bạn đã có tài khoản , hãy đăng nhập để tích lũy điểm thành </p>
                    <p>viên và nhận được những ưu đãi tốt hơn!</p>

                    <div className="AllformSignInIVY">
                        <form onSubmit={handleSubmit} method="post">
                            <div>
                                <div className="formSignInIVY">
                                    <input type="text" placeholder="Email/SĐT" className="signinEmail"
                                        name="email"
                                        value={formValue.phone}
                                        onChange={handleChange}></input>

                                    <input type="password" placeholder="Mật khẩu" className="signinPassword"
                                        name="password"
                                        value={formValue.password}
                                        onChange={handleChange}></input>

                                </div>
                            </div>
                            <div className="AllRememberPasswordIVY" >
                                <div >
                                    <div className="RememberPasswordIVY">
                                        <input type="checkbox"></input>
                                        <p>Ghi nhớ đăng nhập</p>
                                    </div>
                                </div>
                            </div>
                            <div className="SetupPasswordAgainAndmoreSignIn">
                                <Link><p>Quên mật khẩu?</p></Link>
                                <p>Đăng nhập bằng OTP</p>
                            </div>
                            <div className="ButtonForSignInIvyMODA">
                                <button type="submit">ĐĂNG NHẬP</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="MainLeftSiginIVY MainRightSiginIVY">
                    <h2>Khách hàng mới của IVY moda</h2>
                    <div className="InformationInMainRightSiginIVY">
                        <p>Nếu bạn chưa có tài khoản trên ivymoda.com , hãy sử dụng tùy</p>
                        <p>chọn này để truy cập biểu mẫu đăng ký.</p>
                        <p>Bằng cách cung cấp cho IVY moda thông tin chi tiết của bạn,</p>
                        <p>quá trình mua hàng trên  ivymoda.com sẽ là một trải nghiệm </p>
                        <p>thú vị và nhanh chóng hơn</p>
                    </div>
                    <div className="ButtonForSignInIvyMODA">
                        <Link to="/DangKyIvyMODA"><button>ĐĂNG KÝ</button></Link>
                    </div>
                </div>

            </div>
            <div>
                <IntroduceAndEndIvyPage></IntroduceAndEndIvyPage>
            </div>
        </div>
    )

}

