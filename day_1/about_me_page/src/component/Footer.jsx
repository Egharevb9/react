function Footer(){
    const year = new Date().getFullYear
    return(
        <footer>
            <div className="social_media">
                <a href="https://github.com/Egharevb9">github</a>
                <a href="">Twitter</a>
                <a href="">linkedin</a>
            </div>
            <p>©{year} Esther. All Right Rserved</p>
        </footer>
    );
}