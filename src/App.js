import React from 'react';
import logo from './logo.svg';
import './App.css';
import Portfolio from './components/Portfolio'

function App() {
  return (
    <div classNameName="App">
        
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div className="container">
                <div className="navbar-brand js-scroll-trigger" href="#page-top">DirectPicks K.K.</div>



                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ml-auto">
                        <a className="btn btn-dark btn-social mx-2" href="https://twitter.com/hiroki_maekawa"><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="https://www.facebook.com/hiroki.maekwa"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="https://www.linkedin.com/in/hiroki-maekawa/"><i className="fab fa-linkedin-in"></i></a>
                    </ul>
                </div>
            </div>
        </nav>

        
        <header className="masthead">
            <div className="container">
                <div className="masthead-subheading text-uppercase">​次世代のWeb系企業を熱烈に応援しています！</div>
                <div className="masthead-heading text-uppercase">DirectPicksはエンジニアポジションに特化したヘッドハンティング会社です</div>
            </div>
        </header>

       
        
        <section className="page-section" id="services">
            <div className="container">

                <div className="text-center">
                    <h2 className="section-heading text-uppercase">事業内容</h2>
                </div>

                <div className="row text-center">

                  <div className="col-md-4">

                  <br />

                    <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-user-clock fa-stack-1x fa-inverse"></i>
                    </span>

                        <h4 className="my-3">​ヘッドハンティング事業</h4>
                        <p className="text-muted">目安半年以内の入社を必要とするエンジニアリングポジションに対して、短期集中型で採用にコミットをさせて頂きます。</p>
                    
                    <br />

                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-user-edit fa-stack-1x fa-inverse"></i>
                        </span>

                        <h4 className="my-3">​人材紹介事業</h4>
                            <p className="text-muted">採用が困難であるエンジニアリングポジションの採用を担当させて頂きます。</p>
                            <p className="text-muted">また採用だけでなく、会社の事業や採用ポジションに関するPRもさせて頂きます。</p>
                  
                    <br />

                </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-laptop-code fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">担当ポジション一覧</h4>
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
                            <img className="mx-auto rounded-circle" src="https://raw.githubusercontent.com/HirokiMaekawa1/directpicks_homepage_react/master/src/assets/img/team/1.jpg" alt="" />
                            <h4>Hiroki Maekawa</h4>
                            <br />
                                <p className="text-muted">早稲田大学卒業後、​日系商社、米国シリコンバレーベンチャーキャピタルを経て、現在ヘッドハンターとして日本で活動中。​</p>
                                <p className="text-muted">得意な領域はエンジニアリングポジション、スタートアップ、Fintech業界。</p>
                                <p className="text-muted">本業以外ではプログラミング（Golang、Python、AWS）やスキーインストラクターとしての活動も行なっています。</p>
                            <a className="btn btn-dark btn-social mx-2" href="https://twitter.com/hiroki_maekawa"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="https://www.facebook.com/hiroki.maekwa"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="https://www.linkedin.com/in/hiroki-maekawa/"><i className="fab fa-linkedin-in"></i></a>
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
                <br />
                <div className="text-center">
                    <h4 className="font-weight-bold section-heading text-uppercase my-3">会社名：DirectPicks株式会社​</h4>
                    <h4 className="font-weight-bold section-heading text-uppercase my-3">設立：2020年5月</h4>
                    <h4 className="font-weight-bold section-heading text-uppercase my-3">本社：神奈川県川崎市宮前区犬蔵2-32-2-323</h4>
                    <h4 className="font-weight-bold section-heading text-uppercase my-3">電話番号(固定)：044-975-6689</h4>
                    <h4 className="font-weight-bold section-heading text-uppercase my-3">Mobile：080-3010-1664</h4>
                    <h4 className="font-weight-bold section-heading text-uppercase my-3">Email：hiroki_maekawa@directpicks.co.jp</h4>
                </div>





            </div>
        </section>
        
        <footer className="footer py-4">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 my-3 my-lg-0">
                        <div className="col-lg-4">Copyright © 2020 DirectPicks K.K. All Rights Reserved.</div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  );
}

export default App;




