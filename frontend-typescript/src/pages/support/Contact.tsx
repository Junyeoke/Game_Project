import React, { useState } from "react";
import { useEffect } from "react";
import form from "../../assets/js/form";
import recaptcha from "../../assets/js/recaptcha";
import designesis from "../../assets/js/designesia";
import emailjs, { send } from "emailjs-com";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import customMarquee from "../../assets/js/custom-marquee";
import { useAppDispatch } from "../../store/store";
import AuthService from "../../services/auth/AuthService";

function Contact() {
  const [message, setMessage] = useState("");
  const [anyQuestion, setAnyQuestion] = useState<string | null>();

  // Todo : 유효성 체크 lib
  // Todo : Formik 객체 초기화 (initialValues) : html 태그에서
  // Todo : 체크대상 (question) : Field 태그
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    question: "",
  };

  
  // Todo : 함수 정의
  // Todo : Formit 라이브러리 : validationSchema
  // Todo : validationSchema : 유효성 체크 규칙을 정의
  // Todo : validationSchema = Yup.object().shape({유효성 체크규칙})
  const validationSchema = Yup.object().shape({

  });

  useEffect(() => {
    // form();
    // recaptcha();
    customMarquee();
    designesis();
  },[]);

  // Todo : 로그인 함수 : submit(Formit)
  // Todo : Formit lib 에서 자동으로 email , password 값을 보내줌
  const sendMessage = (formValue: any) => {
    const { name, email, phone, question } = formValue;
    // setSendEmailClick(true);
    // console.log(message);
    // console.log(anyQuestion);
    // let data = {
    //   name,
    //   email,
    //   phone,
    //   message
    // };
    // AuthService.resetPassword(data)
    // .then((response : any) => {
    //   console.log(response);
    //   setMessage("문의 되었습니다.")
    //   sendVerificationEmail(message);
    // })
    // .catch((e : Error )=> {
    //   console.log(e);
    // })
    sendVerificationEmail(name , email , phone , question)
  };

  const sendVerificationEmail = (name : string , email : string , phone : string , question : string) => {
    // 이메일 보내기
    // 여기서 정의해야하는 것은 위에서 만든 메일 템플릿에 지정한 변수({{ }})에 대한 값을 담아줘야한다.
    // const templateParams = {
    //   to_email: "san2636@naver.com",
    //   message: `  이용자 ${name} 으로부터 문의가 왔습니다.
    //                 이메일 : ${email}
    //                 핸드폰 : ${phone}
    //                 ${anyQuestion}

    //                 ----------------
    //                   `,
    // };

    // emailjs
    //   .send(
    //     "test-service", // 서비스 ID
    //     "my-template2", // 템플릿 ID
    //     templateParams,
    //     "pe9gKXXdvYA-8jITi" // public-key
    //   )
    //   .then((response: any) => {
    //     console.log("문의가 성공적으로 전송되었습니다:", response);
    //     // setIsEmailSent(true);
    //   })
    //   .catch((error: Error) => {
    //     console.error("문의 실패:", error);
    //     // 이메일 전송 실패 처리 로직 추가
    //   });
  };

  return (
    <>
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>
        {/* <!-- section begin --> */}
        <section id="subheader" className="jarallax">
          <img
            src={require("../../assets/images/background/subheader-contact.webp")}
            className="jarallax-img"
            alt=""
          />
          <div className="container z-1000">
            <div className="row">
              <div className="col-lg-12">
                <div className="subtitle wow fadeInUp mb-3">Do you have</div>
              </div>
              <div className="col-lg-6">
                <h2 className="wow fadeInUp mb20" data-wow-delay=".2s">
                  Any questions?
                </h2>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- section close --> */}

        {/* Form section 시작 */}
        <section>
          <div className="container position-relative z1000">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <p className="lead">
                  Please read our <a href="faq.html">faq page</a> first. If you
                  got any questions, please do not hestitae to send us a
                  message.
                </p>
                {/* Formik 시작 */}
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={sendMessage}
                >
                 {({ errors, touched }) => (
                    <Form name="contactForm" id="contact_form" className="contactForm" >
                      <div className="row gx-4">
                        <div className="col-lg-6 mb10">
                          <div className="field-set">
                            <span className="d-label">Name</span>
                            <input
                              type="text"
                              name="Name"
                              id="name"
                              className="form-control"
                              placeholder="Your Name"
                              required
                            />
                          </div>

                          <div className="field-set">
                            <span className="d-label">Email</span>
                            <input
                              type="text"
                              name="Email"
                              id="email"
                              className="form-control"
                              placeholder="Your Email"
                              required
                            />
                            

                         </div>

                          <div className="field-set">
                            <span className="d-label">Phone</span>
                            <input
                              type="text"
                              name="phone"
                              id="phone"
                              className="form-control"
                              placeholder="Your Phone"
                              required
                            />
                          </div>
                        </div>

                        <div className="col-lg-6">
                          <div className="field-set mb20">
                            <span className="d-label">Message</span>
                            <textarea
                              name="message"
                              id="message"
                              className="form-control"
                              placeholder="Your Message"
                              required
                            ></textarea>
                            
                          </div>
                        </div>
                      </div>

                      {/* <div
                    className="g-recaptcha"
                    data-sitekey="insert-sitekey-here"
                  ></div> */}
                      <div id="submit" className="mt20">
                        <input
                          type="submit"
                          id="send_message"
                          value="Send Message"
                          className="btn-main"
                        />
                      </div>

                      <div id="success_message" className="success">
                        Your message has been sent successfully. Refresh this
                        page if you want to send more messages.
                      </div>
                      <div id="error_message" className="error">
                        Sorry there was an error sending your form.
                      </div>
                    </Form>
                 )}
                </Formik>
              </div>
            </div>
          </div>
        </section>
        {/* Form section 종료 */}

        {message && (
          <p className="alert alert-success mt-3 text-center">{message}</p>
        )}
      </div>
    </>
  );
}

export default Contact;
