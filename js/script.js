class  Myheader extends HTMLElement
{ connectedCallback()
    {
        this.innerHTML=`
        <a href="home.html">HOME</a>
        <a href="aboutus.html">ABOUT US</a>
        <a href="hospital.html">HOSPITAL</a>
        <a href="treatment.html">TREATMENT</a>
        <a href="contactus.html">CONTACT US</a>`
    }

}

class Myfooter extends HTMLElement{
    connectedCallback()
    {this.innerHTML=`
    <p >Copyright @ MAX Hospital</p>
    
    `}
}

customElements.define('my-header',Myheader)
customElements.define('my-footer',Myfooter)

function alert1() { alert("Thank You") }
        function alert2() { alert("You can leave") }