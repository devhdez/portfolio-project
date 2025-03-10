import React from "react"


const Feat = () => {
    return (
        <div className="Features-wrapper">
            <section className="Features">
                <h2 className="Features-title"> Developer | Translator | SEO</h2>
                <div className="Features-list">
                    <div className="Feature">
                    <img src="/assets/pexels-joshsorenson-1714208.jpg" alt="Foto" className="lafoto" />
                        <p className="Feature-description">As a seasoned freelancer combining advanced web development and thoughtful translation/localisation services, I craft digital solutions that are both technically robust and culturally resonant. 
                            Whether you need a cutting-edge business website, an administrative application (think personnel selection systems), a dynamic webshop, a food delivery platform, or a CRM solution, I ensure that every digital asset is optimized for efficiency and tailored to the nuances of your target audience—even across different languages and cultures. 
                            In short, if it needs to appear on screen to boost your business's performance and engage a global customer base, I've got the expertise to make it shine both technically and linguistically.</p>
                    </div>
                    {/* <div className="Feature">
                        <h3 className="Feature-title">SEO Optimization</h3>
                        <p className="Feature-description">I can help you rank higher on search engines, so your website can be found by more people.</p>
                    </div>
                    <div className="Feature">
                        <h3 className="Feature-title">Responsive Design</h3>
                        <p className="Feature-description">I can make your website look great on any device, so you can reach more users.</p> */}
                    {/* </div> */}
                </div>
            </section>
        </div>
    );

}


export default Feat;