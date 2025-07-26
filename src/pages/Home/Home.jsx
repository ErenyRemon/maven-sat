import React, { useState, useEffect } from 'react';

import "./Home.css";
import Button from 'react-bootstrap/Button';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import { FaRegClock } from "react-icons/fa6";

import { FaFilm } from "react-icons/fa";
import { FaCubes } from "react-icons/fa";
import { FaTachometerAlt } from "react-icons/fa";
import { FaSatelliteDish } from "react-icons/fa";
import { FaUserClock } from "react-icons/fa";
import { MdOutlineWhatsapp } from "react-icons/md";
import { useRef } from 'react';

import { FaPlus, FaMinus } from 'react-icons/fa';
import { BsPlus, BsDash } from "react-icons/bs";
import AOS from 'aos';
import 'aos/dist/aos.css';



function Home() {

    const [activeKey, setActiveKey] = useState('');

    const toggleKey = (key) => {
        setActiveKey(activeKey === key ? null : key);
    };


    const { ref, inView } = useInView({
        triggerOnce: true, // يعمل مرة واحدة بس
        threshold: 0.2, // لما 20% من العنصر تظهر
    });


    const accordionRef = useRef(null);
    const isInView = useInView(accordionRef, {
        triggerOnce: true,
        threshold: 0.2,
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const rubberBandVariants = {
        initial: { scaleX: 1, scaleY: 1 },
        animate: {
            scaleX: [1, 1.25, 0.75, 1.15, 0.95, 1.05, 1],
            scaleY: [1, 0.75, 1.25, 0.85, 1.05, 0.95, 1],
            transition: {
                duration: 1,
                times: [0, 0.3, 0.4, 0.5, 0.65, 0.75, 1],
                ease: 'easeInOut',
            },
        },
    };


    return (
        <div className='main'>
            <div className="container">
                <div className="row">
                    <div className="divOne col-12 ">

                        <h2>أفضل اشتراكات
                            <span> IPTV </span>
                            في الوطن العربي و العالم
                        </h2>
                    </div>
                </div>
            </div>
            <div className="mainDivTwo ">
                <div className="mainDivTwoRight">
                    <div className="mainDivTwoRightFirst">
                        <div className="mainDivTwoRightFirstRight">
                            <FaFilm />
                        </div>
                        <div className="mainDivTwoRightFirstleft">
                            <h6>مكتبة افلام ومسلسلات </h6>
                            <span>جميع الباقات لدينا تضم مكتبة من الافلام والمسلسلات المحدثة يومياً</span>
                        </div>
                    </div>
                    <div className="mainDivTwoRightSecond">
                        <div className="mainDivTwoRightSecondRight">
                            <FaTachometerAlt />
                        </div>
                        <div className="mainDivTwoRightSecondleft">
                            <h6>سرعة في التشغيل</h6>
                            <span>جميع المحتوى في اشتراكات iptv لدينا يتميز بسرعة التشغيل والفتح</span>
                        </div>
                    </div>
                    <div className="mainDivTwoRightThird">
                        <div className="mainDivTwoRightThirdRight">
                            <FaSatelliteDish />
                        </div>
                        <div className="mainDivTwoRightThirdleft">
                            <h6> اشتراك القنوات العربية </h6>
                            <span>يضم جميع الباقات العربية بالاضافة الى مكتبة الافلام والمسلسلات</span>
                        </div>
                    </div>
                </div>

                <div className="mainDivTwoCenter">
                    <img src="./01.webp" alt="" />
                </div>
                <div className="mainDivTwoLeft">
                    <div className="mainDivTwoLeftFirst">
                        <div className="mainDivTwoLeftThirdFirst">
                            <FaCubes />
                        </div>
                        <div className="mainDivTwoLeftFirstleft">
                            <h6>اشتراكات iptv متنوعة</h6>
                            <span>يتوفر مجموعة من افضل سيرفرات iptv في العالم</span>
                        </div>
                    </div>
                    <div className="mainDivTwoLeftFirst">
                        <div className="mainDivTwoLeftThirdFirst">
                            <FaUserClock />
                        </div>
                        <div className="mainDivTwoLeftFirstleft">
                            <h6> اختر المدة الزمنية </h6>
                            <span>يمكنكم اختيار مدة الاشتراك حسب حاجتكم من خلال الموقع</span>
                        </div>
                    </div>
                    <div className="mainDivTwoLeftFirst">
                        <div className="mainDivTwoLeftThirdFirst">
                            <FaSatelliteDish />
                        </div>
                        <div className="mainDivTwoLeftFirstleft">
                            <h6> اشتراك الباقة الكاملة </h6>
                            <span>يضم جميع القنوات العربية  والأجنبية بالاضافة الى مكتبة من الافلام والمسلسلات</span>
                        </div>
                    </div>
                </div>
            </div>
                    <div className="mainDivThree col-12">
            <div className="container">
                <div className="row">

                        <h2>الباقات
                            <span> الأكثر طلباً </span>
                            حول العالم
                        </h2>
                    </div>
                </div>
            </div>

            <div className="mainDivFour">
                <div className="mainDivFourFirst">
                    <Card className="mainDivFourFirstCard">
                        <div className="sale-triangle">
                            <span className="saleclass">Sale</span>
                        </div>
                        <a href="https://wa.me/201207710703"><Card.Img className="mainDivFourthImages" variant="top" src="./05.webp" /></a>
                        <Card.Body className="mainDivFourFirstCardBody">
                            <Card.Title className="mainDivFourFirstCardTitle">
                                <a className='mainDivFourthLinks' href="https://wa.me/201207710703" target="_blank" rel="noopener noreferrer">
                                    اشتراك سيرفر NOVA TV الباقة الكاملة
                                </a></Card.Title>
                            <Card.Text className="mainDivFourFirstText">
                                من خلال هذه الخدمة ستحصل على اشتراك مدفوع في سيرفر NOVA TV الباقه الكامله ... بالنقر علي التعرف علي المزيد سوف تتعرف علي خصائص الباقه ومميزاتها والمدد المتاحه والأسعار .
                            </Card.Text>

                            <button className="moreInfo" onClick={() => window.open('https://wa.me/201207710703', '_blank')}>تعرف على المزيد</button>
                        </Card.Body>
                    </Card>

                </div>
                <div className="mainDivFourSecond">
                    <Card className="mainDivFourSecondCard">
                        <div className="sale-triangle">
                            <span className="saleclass">Sale</span>
                        </div>
                        <a href="https://wa.me/201207710703"><Card.Img className="mainDivFourthImages" variant="top" src="./04.webp" /></a>
                        <Card.Body className="mainDivFourSecondCardBody">
                            <Card.Title className="mainDivFourSecondCardTitle">
                                <a className='mainDivFourthLinks' href="https://wa.me/201207710703" target="_blank" rel="noopener noreferrer">
                                    اشتراك سيرفر MAVEN TV الباقة الكاملة
                                </a>
                            </Card.Title>

                            <Card.Text className="mainDivFourSecondText">
                                من خلال هذه الخدمة ستحصل على اشتراك مدفوع في سيرفر MAVEN TV الباقه الكامله ... بالنقر علي التعرف علي المزيد سوف تتعرف علي خصائص الباقه ومميزاتها والمدد المتاحه والأسعار .
                            </Card.Text>
                            <button className="moreInfo" onClick={() => window.open('https://wa.me/201207710703', '_blank')}>تعرف على المزيد</button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="mainDivFourThird">
                    <Card className="mainDivFourThirdCard">
                        <div className="sale-triangle">
                            <span className="saleclass">Sale</span>
                        </div>
                        <a href="https://wa.me/201207710703"><Card.Img className="mainDivFourthImages" variant="top" src="./03.webp" /></a>
                        <Card.Body className="mainDivFourThirdCardBody">
                            <Card.Title className="mainDivFourThirdCardTitle"><a className='mainDivFourthLinks' href="https://wa.me/201207710703" target="_blank" rel="noopener noreferrer">
                                اشتراك سيرفر X IPTV الباقة الكاملة
                            </a></Card.Title>
                            <Card.Text className="mainDivFourThirdText">
                                من خلال هذه الخدمة ستحصل على اشتراك مدفوع في سيرفر X IPTV الباقه الكامله ... بالنقر علي التعرف علي المزيد سوف تتعرف علي خصائص الباقه ومميزاتها والمدد المتاحه والأسعار .
                            </Card.Text>
                            <button className="moreInfo" onClick={() => window.open('https://wa.me/201207710703', '_blank')}>تعرف على المزيد</button>

                        </Card.Body>
                    </Card>

                </div>
                <div className="mainDivFourFourth">
                    <Card className="mainDivFourFourthCard">
                        <div className="sale-triangle">
                            <span className="saleclass">Sale</span>
                        </div>
                        <a href="https://wa.me/201207710703"><Card.Img className="mainDivFourthImages" variant="top" src="./02.webp" /></a>
                        <Card.Body className="mainDivFourFourthCardBody">
                            <Card.Title className="mainDivFourFourthCardTitle"> <a className='mainDivFourthLinks' href="https://wa.me/201207710703" target="_blank" rel="noopener noreferrer">
                                اشتراك سيرفر MH PRO الباقة الكاملة
                            </a></Card.Title>
                            <Card.Text className="mainDivFourFourthCardText">
                                من خلال هذه الخدمة ستحصل على اشتراك مدفوع في سيرفر MH PRO الباقه الكامله ... بالنقر علي التعرف علي المزيد سوف تتعرف علي خصائص الباقه ومميزاتها والمدد المتاحه والأسعار .
                            </Card.Text>
                            <button className="moreInfo" onClick={() => window.open('https://wa.me/201207710703', '_blank')}>تعرف على المزيد</button>
                        </Card.Body>
                    </Card>

                </div>

            </div>
            <div className="mainDivFive">
                <div
                    ref={ref}
                    className={`mainDivFiveCenter ${inView ? 'animate__animated animate__zoomIn' : ''}`}
                >
                    <div className="mainDivFiveCenterIcon"><FaRegClock /></div>
                    <h2 className="mainDivFiveCenterHeaderOne">
                        يمكنكم التواصل معنا للحصول على اشتراك iptv تجريبي 24 ساعة
                    </h2>
                    <h2 className="mainDivFiveCenterHeaderTwo">
                        من خلال الزر التالي يمكنكم التواصل معنا مباشرة عبر واتس اب لطلب تجربة اشتراك قنوات iptv مجانية 24 ساعة لإختبار الخدمة على شبكة الإنترنت لديكم
                    </h2>
                    <button
                        className={`contactUs ${inView ? 'animate__animated animate__bounceIn' : ''}`}
                        onClick={() => window.open('https://wa.me/201207710703', '_blank')}
                    >
                        <MdOutlineWhatsapp /> تواصل معنا
                    </button>
                </div>
            </div>

            <div className="mainDivSix">
                <div className="mainDivSixLeft">
                    <h3>
                        قنوات مخصصة
                        <span> للأطفال </span>
                        تشمل محتوى متنوع و آمن
                    </h3>

                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        style={{ position: 'relative' }}
                    >
                        <motion.img
                            src="./06.webp"
                            alt=""
                           
                        />
                    </motion.div>
                    {/* <img src="./06.webp" alt="" /> */}

                    <p>يتوفر ضمن اشتراكاتنا iptv مجموعة من القنوات المخصصة
                        <span> للأطفال </span>
                        بنظام البث المباشر 7/24 ، وتضم محتوى متنوع وآمن بالإضافة الى قنوات الأطفال المعروفة</p>
                </div>
                <div className="mainDivSixRight">
                    <h3>تابع أهم
                        <span> الأحداث الرياضية </span>
                        على البث المباشر</h3>

                    <motion.div
                        initial={{ x: -200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        style={{ width: '100%' }}
                    >
                        <img src="./07.webp" alt="قناة تعليمية" style={{ width: '100%', height: 'auto' }} />
                    </motion.div>
                    <p>لا تفوت فرصة متابعة كأس العالم 2022 على البث المباشر من خلال جميع اشتراكات iptv المتوفرة لدينا ، اذ يتوفر في جميع الباقات لدينا أهم
                        <span> القنوات الرياضية </span>
                        المفتوحة والمشفرة</p>
                </div>

            </div>
            <div className="mainDivSeven">
                <h3>مجموعة من أهم باقات
                    <span> القنوات الرياضية </span>
                    العربية والأجنبية</h3>

            </div>
            <div className="mainDivEight">
                <div className="mainDivEightRight">
                    <motion.div
                        initial={{ x: 100, opacity: 0 }} // يدخل من اليمين
                        whileInView={{ x: 0, opacity: 1 }} // لما يدخل مجال الرؤية
                        transition={{ duration: 1 }}
                        viewport={{ once: true, amount: 0.5 }} // يتحرك مرة واحدة لما يظهر نصه
                        style={{ position: 'relative' }}
                    >
                        <Accordion className='mainDivEightRightAccordion' activeKey={activeKey} >
                            <Accordion.Item eventKey="0">
                                <Accordion.Header onClick={() => toggleKey('0')}>
                                    قنوات بين سبورت {activeKey === '0' ? <FaMinus /> : <FaPlus />}
                                </Accordion.Header>
                                <Accordion.Body className="mainDivEightRightBody">
                                    <span>يمكنكم مشاهدة البث المباشر لأهم الأحداث الرياضية على قنوات بين سبورت</span>
                                    <ul style={{ listStyleType: 'square' }}>
                                        <li>بين سبورت بريميوم</li>
                                        <li> بين سبورت ماكس</li>
                                        <li>بين سبورت العامة</li>
                                    </ul>
                                    <span>قنوات بين سبورت بث مباشر بدون تأخير من خلال اشتراكات iptv لدينا</span>
                                    <br />
                                    <span>اطلب تجربة 24 ساعة مجانية للباقة التي تريد وتمتع بوقتك</span>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header onClick={() => toggleKey('1')}>
                                    القنوات الرياضية العربية {activeKey === '1' ? <FaMinus /> : <FaPlus />}
                                </Accordion.Header>
                                <Accordion.Body className="mainDivEightRightBody">
                                    <span>البث المباشر لأهم القنوات الرياضية العربية المفتوحة والمشفرة</span>
                                    <br />
                                    <ul style={{ listStyleType: 'square' }}>
                                        <li>قنوات السعودية الرياضية بث مباشر</li>
                                        <li> قنوات ابو ظبي الرياضية بث مباشر</li>
                                        <li>قنوات ابوظبي اسيا بث مباشر</li>
                                        <li>قنوات ابو ظبي اكسترا بث مباشر</li>
                                        <li>قنوات اون سبورت المصرية بث مباشر</li>
                                    </ul>

                                    <span>والكثير الكثير من القنوات الرياضية العربية في قسم البث المباشر ضمن باقة قنوات الرياضة العربية</span>

                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2">
                                <Accordion.Header onClick={() => toggleKey('2')}>
                                    القنوات الرياضية العالمية {activeKey === '2' ? <FaMinus /> : <FaPlus />}
                                </Accordion.Header>
                                <Accordion.Body className="mainDivEightRightBody">
                                    <span>يمكنكم متابعة البث المباشر للقنوات الرياضية العالمية من خلال باقة قنوات الرياضة العالمية ضمن جميع اشتراكاتنا الموجودة في الموقع.</span>

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header onClick={() => toggleKey('3')}>
                                    قنوات الدوري الإيطالي {activeKey === '3' ? <FaMinus /> : <FaPlus />}
                                </Accordion.Header>
                                <Accordion.Body className="mainDivEightRightBody">
                                    <span>تابع الدوري الإيطالي واستمتع بالتعليق العربي من خلال قنوات الدوري الإيطالي</span>

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header onClick={() => toggleKey('4')}>
                                    اضافات مستمرة {activeKey === '4' ? <FaMinus /> : <FaPlus />}
                                </Accordion.Header>
                                <Accordion.Body className="mainDivEightRightBody">
                                    <span>يتم اضافة اي باقة رياضية تنقل اي حدث رياضي عالمي ضمن جميع الباقات لدينا وبالتالي لاحاجة لشراء اشتراكات جديدة في حال ظهور باقة قنوات جديدة .</span>

                                </Accordion.Body>
                            </Accordion.Item>


                        </Accordion>
                    </motion.div>
                </div>
                <div className="mainDivEightLeft">
                    <img src="08.webp" alt="" />
                </div>
            </div>
            <div className="mainDivNine">
                <motion.div className='mainDivNineDiv'

                    initial={{ rotate: -90, opacity: 0, transformOrigin: "bottom right" }}
                    whileInView={{ rotate: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <h2 >أهم
                        <span> الأسئلة الشائعة </span>
                        في عالم IPTV
                    </h2>
                </motion.div>
            </div>
            <div className="mainDivTen">
                <div className="mainDivTenLeft">
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }} // لما يدخل مجال الرؤية
                        transition={{ duration: 1 }}
                        viewport={{ once: true, amount: 0.5 }} // يتحرك مرة واحدة لما يظهر نصه
                        style={{ position: 'relative' }}
                    >
                        <Accordion className='mainDivTenLeftAccordion' activeKey={activeKey} alwaysOpen>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header onClick={() => toggleKey('5')}> ماهي طريقة تشغيل اشتراكات IPTV على أجهزة الأندرويد ؟{activeKey === '5' ? <FaMinus /> : <FaPlus />}
                                </Accordion.Header>
                                <Accordion.Body className="mainDivTenLeftBody">
                                    <p>يتوفر لجميع اشتراكات iptv تطبيقات خاصة للتشغيل على
                                        <span> اشتراك iptv </span>
                                        أنظمة الأندرويد ، حيث يمكن للمستخدم تحميلها بشكل مباشر من متجر غوغل بلاي وادخال بيانات الاشتراك داخل التطبيق ، ثم التمتع بمشاهدة المحتوى.
                                    </p>

                                    <p className="mainDivTenLeftBodyParagraph">تحميل برامج اشتراكات اي بي تي في تشغيل اشتراكات iptv الخاصة بنا على أجهزة الاندرويد وشاشات الأندرويد</p>

                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="6">
                                <Accordion.Header onClick={() => toggleKey('6')}>
                                    ماهي طريقة تشغيل اشتراكات IPTV على أجهزة الكمبيوتر ؟ {activeKey === '6' ? <FaMinus /> : <FaPlus />}
                                </Accordion.Header>
                                <Accordion.Body className="mainDivTenLeftBody">
                                    <p>يتوفر العديد
                                        <span> اشتراكات اي بي تي في </span>
                                        من برامج تشغيل اشتراكات IPTV على الكمبيوتر ، ومن اهم هذه البرامج :
                                    </p>
                                    <ul style={{ listStyleType: 'square' }}>
                                        <li>windows iptv player</li>
                                        <li> smarters iptv</li>
                                    </ul>

                                    <p>كما يمكن لمشتركي خدمة iptv في موقعنا التمتع بمشاهدة اشتراك IPTV الخاص بهم من خلال متصفح الانترنت مباشرة دون الحاجة لتحميل اي تطبيق تشغيل للاشتراكات
                                        <span> اشتراك iptv </span>
                                        على الكمبيوتر.
                                    </p>

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="7">
                                <Accordion.Header onClick={() => toggleKey('7')}>
                                    ماهي طريقة تشغيل اشتراكات IPTV على شاشات سمارت ؟ {activeKey === '7' ? <FaMinus /> : <FaPlus />}
                                </Accordion.Header>
                                <Accordion.Body className="mainDivTenLeftBody">
                                    <p>يمكن تشغيل اشتراكات iptv على شاشات سمارت LG و Samsung وباقي
                                        <span> افضل اشتراك iptv </span>
                                        الماركات مثل Philips وغيرها من خلال برامج تشغيل iptv عامة.
                                    </p>
                                    <p>من أهم برامج تشغيل اشتراكات iptv على شاشات سمارت:</p>
                                    <ul style={{ listStyleType: 'square' }}>
                                        <li>Laxy Player</li>
                                        <li> Ibo Player</li>
                                        <li> NET IPTV</li>
                                        <li> Smart IPTV</li>
                                        <li> SET IPTV</li>
                                        <li> Fox IPTV</li>
                                        <li>Home IPTV</li>
                                        <li>Flix IPTV</li>
                                        <li>SmartOne</li>
                                        <li>HOT IPTV</li>
                                        <li>Bay TV</li>
                                        <li>Gecko IPTV Player</li>
                                        <li>Room IPTV</li>
                                    </ul>
                                    <p>وغيرها الكثير من التطبيقات الجديدة التي تظهر بشكل يومي.</p>
                                    <p>ما هي طريقة اضافة اشتراك iptv الى برامج التشغيل على شاشات سمارت:</p>

                                    <p>يمكن اضافة
                                        <span> اشتراكات iptv  </span>
                                        على برامج التشغيل في شاشات سمارت من خلال رفع رابط m3u الخاص باشتراك iptv من داخل موقع التطبيق .
                                    </p>
                                    <p>اذ أننا عندما نقوم بفتح اي تطبيق تشغيل للاشتراكات على شاشات سمارت نجد معرف التطبيق (
                                        <span> ID </span>
                                        البرنامج ) من خلال هذا المعرف يمكننا التوجه الى موقع التطبيق عبر الانترنت واضافة رابط قائمة التشغيل الخاصة بنا وتسمى
                                        <span> m3u link </span>
                                        أو
                                        <span> Playlist link </span>
                                    </p>

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="8">
                                <Accordion.Header onClick={() => toggleKey('8')}>
                                    كيف أحصل على اشتراك iptv تجريبي مجاني ؟ {activeKey === '8' ? <FaMinus /> : <FaPlus />}
                                </Accordion.Header>
                                <Accordion.Body className="mainDivTenLeftBody">
                                    <p>
                                        <span> الباقات التي يمكن الحصول على اشتراك iptv تجريبي لها من خلال اشتراك اي بي تي في موقعنا هي:</span>

                                    </p>

                                    <ul style={{ listStyleType: 'square' }}>
                                        <li>سيرفر MAC EXTREME الباقة الكاملة</li>
                                        <li>سيرفر FAMILY 4K الباقة الكاملة</li>
                                        <li>سيرفر AROMA TV الباقة الكاملة.</li>
                                        <li>سيرفر KING 4K الباقة الكاملة.</li>
                                    </ul>
                                    <p>للحصول على
                                        <span> افضل اشتراك iptv تجريبي </span>
                                        ماعليك سوى اختيار الباقة المناسبة لإحتياجاتك مع تحديد نوع الجهاز المتوفر لديكم
                                        <span> اشتراكات iptv </span>
                                        للتشغيل.
                                    </p>

                                    <p>ثم التواصل معنا بشكل مباشر عبر أحد وسائل التواصل المتوفرة في الزاوية اليمين في الأسفل، او الضغط هنا للتواصل عبر واتس اب بشكل مباشر</p>

                                    <p>للحصول على تجربة مجانية لإشتراكات iptv على
                                        <span> أجهزة ابل</span>
                                        ، يجب استخدام أحد البرامج العامة لتشغيل الإشتراكات مثل:

                                    </p>
                                    <ul style={{ listStyleType: 'square' }}>
                                        <li>طلب اشتراك مجاني على تطبيق ibo player</li>
                                        <li>gse iptv اشتراك مجاني.</li>
                                        <li>iptv smarters اشتراك افضل اشتراك iptv مجاني.</li>
                                        <li>xtream codes iptv اشتراك مجاني.</li>
                                    </ul>
                                    <p>لطلب تجربة الإشتراكات على شاشات سمارت يجب تحديد البرنامج المتوفر لديكم للتشغيل ثم التواصل معنا لمساعدتكم على رفع ملف m3u المجاني على التلفزيون.</p>


                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="9">
                                <Accordion.Header onClick={() => toggleKey('9')}>
                                    هل يتوفر في الاشتراكات محتوى للكبار +18 ؟ {activeKey === '9' ? <FaMinus /> : <FaPlus />}
                                </Accordion.Header>
                                <Accordion.Body className="mainDivTenLeftBody">
                                    <p>لا يتوفر لدينا في جميع الاشتراكات  اي قنوات او باقات للكبار +18 .</p>
                                    <p>اذ ان هدفنا من تقديم الخدمة ارضاء العائلة بشكل كامل وبالتالي يمكن الحديث عن أن الإشتراكات التي نقدمها من خلال موقعنا هي اشتراكات عائلية بإمتياز
                                        <span> افضل اشتراك اي بي تي في </span>
                                        ، وتناسب جميع أفراد الأسرة على حد سواء.
                                    </p>

                                    <span> تنويه : </span>
                                    <p>يجب الأخذ بعين الإعتبار ان بعض الأفلام والمسلسلات لا تخلوا من مشاهد العنف او بعض اللقطات التي تحتوي على محتوى غير لائق ، وهذا للاسف خارج عن إرادتنا.</p>

                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </motion.div>
                </div>
                <div className="mainDivTenRight">

                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        style={{ position: 'relative' }}
                    >

                        <Accordion className='mainDivTenRightAccordion' activeKey={activeKey} alwaysOpen>
                            <Accordion.Item eventKey="10">
                                <Accordion.Header onClick={() => toggleKey('10')}>
                                    ماهي خدمة IPTV ؟ {activeKey === '10' ? <FaMinus /> : <FaPlus />}
                                </Accordion.Header>
                                <Accordion.Body className="mainDivTenRightBody">
                                    <p>خدمة iptv هي خدمة بث رقمي
                                        <span>  افضل اشتراكات iptv  </span>
                                        عبر الإنترنت للقنوات التلفزيونية ، حيث يتم من خلال هذه
                                        <span> افضل اشتراك iptv </span>
                                        الخدمة اعادة بث القنوات التلفزيونية من مصدرها بإستخدام سيرفرات بث خاصة الى المستخدم
                                        <span> اشتراكات iptv </span>
                                        بشكل مباشر.
                                    </p>

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="11">
                                <Accordion.Header onClick={() => toggleKey('11')}>
                                    كم هي سرعة الإنترنت المطلوبة  لتشغيل IPTV ؟ {activeKey === '11' ? <FaMinus /> : <FaPlus />}
                                </Accordion.Header>
                                <Accordion.Body className="mainDivTenRightBody">
                                    <p>تحتاج اشتراكات IPTV سرعة انترنت 6 ميغا ذات
                                        <span> اشتراك iptv </span>
                                        جودة عالية كحد ادنى لتشغيل المحتوى دون مشاكل
                                        <span> اشتراكات اي بي تي في </span>
                                        تقطيع.
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="12">
                                <Accordion.Header onClick={() => toggleKey('12')}>
                                    لدي سرعة انترنت عالية ويوجد  لدي تقطيع ، لماذا ؟ {activeKey === '12' ? <FaMinus /> : <FaPlus />}
                                </Accordion.Header>
                                <Accordion.Body className="mainDivTenRightBody">
                                    <p>كما ذكرنا
                                        <span> اشتراك اي بي تي في</span>
                                        سابقاً اننا نحتاج سرعة انترنت 6 ميغا ذات
                                        <span> جودة عالية </span>
                                        لتشغيل اشتراكات IPTV بدون تقطيع.
                                    </p>
                                    <p>ولكن مع الاسف ببعض
                                        <span> افضل اشتراكات اي بي تي في </span>
                                        الحالات قد يتوفر سرعة انترنت عالية ولكن جودة الاتصال سيئة وبالتالي لا أهمية لسرعة الانترنت في هذه الحالة.
                                    </p>
                                    <p>اذ ان اهم متطلبات
                                        <span> افضل اشتراك اي بي تي في </span>
                                        تشغيل اشتراكات IPTV هو وجود اتصال انترنت عالي الجودة بالاضافة
                                        <span> اقوي اشتراك اي بي تي في الى الحد الادنى </span>
                                        للسرعة بطبيعة الحال.
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="13">
                                <Accordion.Header onClick={() => toggleKey('13')}>
                                    لدي سرعة انترنت عالية ويوجد لدي تقطيع على IPTV فقط ، ما السبب ؟ {activeKey === '13' ? <FaMinus /> : <FaPlus />}
                                </Accordion.Header>
                                <Accordion.Body className="mainDivTenRightBody">
                                    <p>لا يمكن مقارنة منصات تشغيل الفيديو
                                        <span> افضل اشتراك iptv </span>
                                        الاخرى مثل يوتيوب ونتفلكس بنظام تشغيل اشتراكات iptv ، اذ ان هذا النوع من المنصات تعتمد على نظام التحميل المسبق قبل المشاهدة.
                                    </p>
                                    <p>بالاضافة الى نظام المشاهدة بجودة صورة متعددة حسب سرعة الانترنت ، وهذا يتعارض تماماً
                                        <span> اشتراك iptv </span>
                                        مع نظام تشغيل اشتراكات iptv ، اذ أن خدمات iptv لا تعتمد على نظام التحميل المسبق قبل المشاهدة ولا تدعم نظام تغيير جودة الصورة بشكل اتوماتيكي حسب سرعة الانترنت.
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="14">
                                <Accordion.Header onClick={() => toggleKey('14')}>
                                    هل يتم تحديث مكتبة الأفلام والمسلسلات ؟ {activeKey === '14' ? <FaMinus /> : <FaPlus />}
                                </Accordion.Header>
                                <Accordion.Body className="mainDivTenRightBody">
                                    <p>نعم يتم تحديث مكتبة
                                        <span> اشتراكات iptv  </span>
                                        الأفلام والمسلسلات بشكل مستمر ويومي ، حيث يتم اضافة كل ماهو جديد من أفلام ومسلسلات وبرامج .
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="15">
                                <Accordion.Header onClick={() => toggleKey('15')}>
                                    هل يتم نقل جميع الأحداث الرياضية على الإشتراكات ؟ {activeKey === '15' ? <FaMinus /> : <FaPlus />}
                                </Accordion.Header>
                                <Accordion.Body className="mainDivTenLeftBody">
                                    <p>نعم يتم نقل
                                        <span> اشتراكات اي بي تي في </span>
                                        جميع الأحداث الرياضية على جميع الباقات المتوفرة لدينا ، اذ عمل بشكل مستمر على مواكبة الحدث واضافة القنوات الرياضية الناقلة لأهم الأحداث
                                        <span> اشتراك iptv </span>
                                        والبطولات العربية والعالمية.
                                    </p>
                                    <p>
                                        <span> نقدم لمستخدمي اشتراكات iptv لدينا أفضل خدمة بأقل سعر حول العالم </span>
                                    </p>
                                    <p>أهم باقات
                                        <span> القنوات الرياضية </span>
                                        العالمية المفتوحة والمشفرة  التي قمنا باضافتها الى اشتراكاتنا:
                                    </p>

                                    <p>من أهم برامج تشغيل اشتراكات iptv على شاشات سمارت:</p>
                                    <ul style={{ listStyleType: 'square' }}>
                                        <li>قنوات SSC الرياضية السعودية ( حيث يتم نقل الدوري السعودي على قنوات <span> اشتراك iptv </span> اس اس سي السعودية)</li>
                                        <li> باقة قنوات بين سبورت بريميوم Bein Sport Premium.</li>
                                        <li> قنوات بين سبورت Bein Sport.</li>
                                        <li>قنوات بين سبورت ماكس Bein Sport Max ( حيث تم نقل التغطية الكاملة لكأس<span> افضل اشتراك iptv </span> الامم الافريقية).</li>
                                        <li>مجموعة قنوات Amazone prime sport امازون برايم سبورت ( الناقل الرسمي للدوري الفرنسي).</li>
                                        <li>قنوات أبو ظبي اسيا الرياضية بث مباشر.</li>
                                        <li>قنوات أبو ظبي اكسترا <span> افضل اشتراكات اي بي تي في </span> الرياضية بث مباشر.</li>
                                        <li>قنوات اون سبورت المصرية .</li>
                                        <li>القنوات الرياضية العربية والأجنبية.</li>
                                        <li>والكثير من القنوات المفتوحة والمشفرة في قسم البث المباشر مرتبة ضمن باقات متعددة.</li>
                                    </ul>

                                    <p>يمكنكم الان ومن خلال موقعنا طلب أفضل اشتراك IPTV  مع افضل خدمة زبائن والتمتع بمشاهدة باقة قنوات
                                        <span> افضل اشتراكات iptv </span>
                                        مميزة تضم اهم القنوات الرياضية العربية والأجنبية بالاضافة الى باقة قنوات الأطفال المميزة.
                                    </p>

                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Home;
