import React from "react";
import "./HeroSection.css";

function HeroSection() {
    return (
        <div className="hero ">
            <div className="overlay ">
                <div className="container">
                    <div className="row">
                        <div className="hero-content col-12 ">
                            <h1 className='headerOne'>افضل اشتراكات IPTV بدون تقطيع او تأخير</h1>
                            <div className="divHeaderTwo">
                                <h1 className="headerTwo">نوفر لكم اكبر شبكه وكلاء بجميع انحاء العالم للمساعده في تشغيل الخدمه بكل سهوله</h1>
                            </div>
                            <h2 className='headerThree'>كما نوفر اسهل واسرع وامن طرق الدفع المحليه والعالميه </h2>
                            <div className="divSpan">
                                <span className="divSpanColor">( </span>
                                <span>فيزا </span>
                                <span className="divSpanColor"> , </span>
                                <span>ماستر كارد</span>
                                <span className="divSpanColor"> , </span>
                                <span>مدي </span>
                                <span className="divSpanColor"> , </span>
                                <span>تحويل STC PAY</span>
                                <span className="divSpanColor"> , </span>
                                <span>تحويل PAYPAL</span>
                                <span className="divSpanColor"> , </span>
                                <span>تحويل فودافون كاش</span>
                                <span className="divSpanColor"> , </span>
                                <span>عملات رقميه USDT</span>
                                <span className="divSpanColor"> )</span>
                            </div>
                            <div className="lastDiv">
                                <button onClick={() => window.open('https://wa.me/201207710703', '_blank')}>تواصل معنا</button>
                                <div><span>|</span></div>
                                <div><span>دعم فني متواصل علي مدار الساعه  </span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;

