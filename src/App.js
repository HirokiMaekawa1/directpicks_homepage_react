import React from 'react';
import logo from './logo.svg';
import './App.css';
import Portfolio from './components/Portfolio'

function App() {
  return (
    <div classNameName="App">
        
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand js-scroll-trigger" href="#page-top"><img src="assets/img/navbar-logo.svg" alt="" /></a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars ml-1"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ml-auto">
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#services">事業内容</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#team">代表者紹介</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#contact">コンタクト情報</a></li>
                    </ul>
                </div>
            </div>
        </nav>

        
        <header className="masthead">
            <div className="container">
                <div className="masthead-subheading text-uppercase">​次世代のWeb系企業を熱烈に応援しています！</div>
                <div className="masthead-heading">DirectPicksはエンジニアポジションに特化したヘッドハンティング会社です</div>
            </div>
        </header>

       
        
        <section className="page-section" id="services">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">事業内容</h2>
                </div>
                <div className="row text-center">

                    <div className="col-md-4">

                    
                    <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
                        </span>

                        <h4 className="my-3">​ヘッドハンティング事業</h4>
                        <p className="text-muted">目安半年以内の入社を必要とするエンジニアリングポジションに対して、短期集中型で採用にコミットをさせて頂きます。</p>
                    

                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-laptop fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">​人材紹介事業</h4>
                            <p className="text-muted">採用が困難であるエンジニアリングポジションの採用を担当させて頂きます。</p>
                            <p className="text-muted">また採用だけでなく、会社の事業や採用ポジションに関するPRもさせて頂きます。</p>
                    </div>

                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-lock fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">紹介ポジション一覧</h4>
                            <p className="text-muted1">CTO</p>
                            <p className="text-muted1">VPoE</p>
                            <p className="text-muted1">エンジニアリングマネージャー</p>
                            <p className="text-muted1">プロダクトマネージャー</p>
                            <p className="text-muted1">プロジェクトマネージャー</p>
                            <p className="text-muted1">サーバーサイドエンジニア</p>
                            <p className="text-muted1">SRE</p>
                            <p className="text-muted1">DevOps</p>
                            <p className="text-muted1">インフラエンジニア</p>
                            <p className="text-muted1">機械学習エンジニア</p>
                            <p className="text-muted1">データサイエンティスト</p>
                            <p className="text-muted1">データエンジニア</p>
                            <p className="text-muted1">データアナリスト</p>
                            <p className="text-muted1">iOS / Android エンジニア</p>
                            <p className="text-muted1">フロントエンドエンジニア</p>
                            <p className="text-muted1">UI/UX デザイナー</p>
                            <p className="text-muted1">セキュリティーエンジニア</p>
                            <p className="text-muted1">QA エンジニア</p>
                    </div>
                </div>
            </div>
        </section>
        

        




        
        <section className="page-section bg-light" id="team">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">代表者紹介</h2>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src="https://raw.githubusercontent.com/StartBootstrap/startbootstrap-agency/master/dist/assets/img/team/1.jpg" alt="" />
                            <h4>Hiroki Maekawa</h4>
                                <p className="text-muted">早稲田大学卒業後、​日系商社、米国シリコンバレーベンチャーキャピタルを経て、現在ヘッドハンターとして日本で活動中。​</p>
                                <p className="text-muted">得意な領域はエンジニアリングポジション、スタートアップ、Fintech業界。</p>
                                <p className="text-muted">本業以外ではプログラミング（Golang、Python、AWS）やスキーインストラクターとしての活動も行なっています。</p>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
        
        
        <section className="page-section" id="contact">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">コンタクト情報</h2>
                </div>
                <form id="contactForm" name="sentMessage" novalidate="novalidate">
                    <div className="row align-items-stretch mb-5">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input className="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name." />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="form-group">
                                <input className="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address." />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="form-group mb-md-0">
                                <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number." />
                                <p className="help-block text-danger"></p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group form-group-textarea mb-md-0">
                                <textarea className="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                                <p className="help-block text-danger"></p>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <div id="success"></div>
                        <button className="btn btn-primary btn-xl text-uppercase" id="sendMessageButton" type="submit">Send Message</button>
                    </div>
                </form>
            </div>
        </section>
        
        <footer className="footer py-4">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 my-3 my-lg-0">
                        <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a>
                        <div className="col-lg-4 text-lg-left">Copyright © 2020 DirectPicks K.K. All Rights Reserved.</div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  );
}

export default App;
